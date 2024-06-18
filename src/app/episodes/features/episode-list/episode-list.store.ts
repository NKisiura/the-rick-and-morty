import { inject, Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { Episode, EpisodesFilter } from "@episodes/types";
import {
  BackendErrorResponse,
  PaginatedResponseDTO,
  PaginationInfo,
} from "@shared/types/http";
import { switchMap, tap } from "rxjs";
import { EpisodesApiService } from "@episodes/services";
import { tapResponse } from "@ngrx/operators";
import { HttpErrorResponse } from "@angular/common/http";

interface EpisodeListState {
  readonly filter: EpisodesFilter;
  readonly isLoading: boolean;
  readonly episodes: Episode[] | null;
  readonly paginationInfo: PaginationInfo | null;
  readonly error: BackendErrorResponse | null;
}

const initialState: EpisodeListState = {
  filter: {},
  isLoading: false,
  episodes: null,
  paginationInfo: null,
  error: null,
};

@Injectable()
export class EpisodeListStore extends ComponentStore<EpisodeListState> {
  private readonly episodesApiService = inject(EpisodesApiService);

  constructor() {
    super(initialState);
  }

  // ------------------------- SELECTORS -------------------------

  public episodes = this.selectSignal(({ episodes }) => episodes);
  public episodesLoading = this.selectSignal(({ isLoading }) => isLoading);
  public error = this.selectSignal(({ error }) => error);

  public episodesFilter = this.selectSignal(({ filter }) => filter);
  public currentPage = this.selectSignal(
    this.episodesFilter,
    ({ page }) => page || 1,
  );
  public pagesCount = this.selectSignal(
    ({ paginationInfo }) => paginationInfo?.pages || 1,
  );

  // ------------------------- EFFECTS -------------------------

  public readonly getEpisodesByFilter = this.effect<EpisodesFilter>(
    (episodesFilter$) => {
      return episodesFilter$.pipe(
        tap(() => this.patchState({ isLoading: true })),
        switchMap((episodesFilter) =>
          this.episodesApiService.getEpisodesByFilter(episodesFilter).pipe(
            tapResponse(
              (paginatedEpisodeList) => {
                this.getEpisodesSuccess(paginatedEpisodeList);
              },
              ({ error }: HttpErrorResponse) => {
                this.getEpisodesFailure(error);
              },
            ),
          ),
        ),
      );
    },
  );

  // ------------------------- UPDATERS -------------------------

  private readonly getEpisodesSuccess = this.updater(
    (
      state,
      { info, results }: PaginatedResponseDTO<Episode>,
    ): EpisodeListState => ({
      ...state,
      isLoading: false,
      episodes: results,
      paginationInfo: info,
      error: null,
    }),
  );

  private readonly getEpisodesFailure = this.updater(
    (state, error: BackendErrorResponse): EpisodeListState => ({
      ...state,
      isLoading: false,
      episodes: null,
      paginationInfo: null,
      error: error,
    }),
  );

  public readonly setFilter = this.updater(
    (state, filter: EpisodesFilter): EpisodeListState => ({
      ...state,
      filter: { ...filter },
    }),
  );
}
