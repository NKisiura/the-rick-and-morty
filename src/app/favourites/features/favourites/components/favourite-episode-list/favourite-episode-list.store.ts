import { inject, Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { ComponentStore } from "@ngrx/component-store";
import { tapResponse } from "@ngrx/operators";
import { EMPTY, of, switchMap, tap } from "rxjs";
import { BackendErrorResponse } from "@shared/types/http";
import { LocalStorageService } from "@shared/services";
import { FAVOURITE_EPISODES_LS_KEY } from "@favourites/constants";
import { EpisodesApiService } from "@episodes/services";
import { Episode } from "@episodes/types";

interface FavouriteEpisodeListState {
  readonly favouriteEpisodes: Episode[];
  readonly isLoading: boolean;
  readonly error: BackendErrorResponse | null;
}

const initialState: FavouriteEpisodeListState = {
  favouriteEpisodes: [],
  isLoading: false,
  error: null,
};

@Injectable()
export class FavouriteEpisodeListStore extends ComponentStore<FavouriteEpisodeListState> {
  private readonly localStorageService = inject(LocalStorageService);
  private readonly episodesApiService = inject(EpisodesApiService);

  constructor() {
    super(initialState);
  }

  // ------------------------- SELECTORS -------------------------

  public readonly favouriteEpisodes = this.selectSignal(
    ({ favouriteEpisodes }) => favouriteEpisodes,
  );
  public readonly hasFavouriteEpisodes = this.selectSignal(
    this.favouriteEpisodes,
    (episodes) => episodes.length,
  );
  public readonly isLoading = this.selectSignal(({ isLoading }) => isLoading);
  public readonly error = this.selectSignal(({ error }) => error);

  // ------------------------- EFFECTS -------------------------

  public readonly favouriteEpisodesRequested = this.effect<void>((trigger$) => {
    return trigger$.pipe(
      tap(() => this.patchState({ isLoading: true })),
      switchMap(() => {
        return of(
          this.localStorageService.getItem<number[]>(
            FAVOURITE_EPISODES_LS_KEY,
          ) || [],
        );
      }),
      switchMap((favouriteEpisodeIdList) => {
        if (!favouriteEpisodeIdList.length) {
          return of(EMPTY);
        }

        return this.episodesApiService
          .getEpisodesByIdList(favouriteEpisodeIdList)
          .pipe(
            tapResponse(
              (episodes) => {
                this.favouriteEpisodesSucceeded(episodes);
              },
              ({ error }: HttpErrorResponse) => {
                this.favouriteEpisodesFailed(error);
              },
            ),
          );
      }),
      tap(() =>
        this.patchState({
          isLoading: false,
        }),
      ),
    );
  });

  // ------------------------- UPDATERS -------------------------

  private readonly favouriteEpisodesSucceeded = this.updater<Episode[]>(
    (state, episodes): FavouriteEpisodeListState => ({
      ...state,
      favouriteEpisodes: [...episodes],
      error: null,
    }),
  );

  private readonly favouriteEpisodesFailed = this.updater<BackendErrorResponse>(
    (state, error): FavouriteEpisodeListState => ({
      ...state,
      error,
      favouriteEpisodes: [],
    }),
  );
}
