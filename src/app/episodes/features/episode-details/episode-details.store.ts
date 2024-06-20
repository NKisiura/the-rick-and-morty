import { inject, Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { EpisodesApiService } from "@episodes/services";
import { CharactersApiService } from "@characters/services";
import { Episode } from "@episodes/types";
import { Character } from "@characters/types";
import { BackendErrorResponse } from "@shared/types/http";
import { switchMap, tap } from "rxjs";
import { tapResponse } from "@ngrx/operators";
import { HttpErrorResponse } from "@angular/common/http";

interface EpisodeDetailsState {
  readonly episodeLoading: boolean;
  readonly episode: Episode | null;
  readonly episodeError: BackendErrorResponse | null;

  readonly charactersLoading: boolean;
  readonly characters: Character[] | null;
  readonly charactersError: BackendErrorResponse | null;
}

const initialState: EpisodeDetailsState = {
  episodeLoading: false,
  episode: null,
  episodeError: null,

  charactersLoading: false,
  characters: null,
  charactersError: null,
};

@Injectable()
export class EpisodeDetailsStore extends ComponentStore<EpisodeDetailsState> {
  private readonly episodesApiService = inject(EpisodesApiService);
  private readonly charactersApiService = inject(CharactersApiService);

  constructor() {
    super(initialState);
  }

  // ------------------------- SELECTORS -------------------------

  public readonly episode = this.selectSignal(({ episode }) => episode);
  public readonly episodeLoading = this.selectSignal(
    ({ episodeLoading }) => episodeLoading,
  );
  public readonly episodeError = this.selectSignal(
    ({ episodeError }) => episodeError,
  );

  public readonly characters = this.selectSignal(
    ({ characters }) => characters,
  );
  public readonly charactersLoading = this.selectSignal(
    ({ charactersLoading }) => charactersLoading,
  );
  public readonly charactersError = this.selectSignal(
    ({ charactersError }) => charactersError,
  );

  // ------------------------- EFFECTS -------------------------

  public readonly getEpisodeWithCharactersById = this.effect<number>(
    (episodeId$) => {
      return episodeId$.pipe(
        tap(() =>
          this.patchState({ episodeLoading: true, charactersLoading: true }),
        ),
        switchMap((episodeId) =>
          this.episodesApiService.getEpisodeById(episodeId).pipe(
            tapResponse(
              (episode) => {
                this.getEpisodeSuccess(episode);
                this.getEpisodeCharactersByIdList(episode.characterIds);
              },
              ({ error }: HttpErrorResponse) => {
                this.getEpisodeFailure(error);
              },
            ),
          ),
        ),
      );
    },
  );

  private readonly getEpisodeCharactersByIdList = this.effect<number[]>(
    (characterIdList$) => {
      return characterIdList$.pipe(
        switchMap((characterIdList) =>
          this.charactersApiService.getCharactersByIdList(characterIdList).pipe(
            tapResponse(
              (characters) => {
                this.getEpisodeCharactersSuccess(characters);
              },
              ({ error }: HttpErrorResponse) => {
                this.getEpisodeCharactersFailure(error);
              },
            ),
          ),
        ),
      );
    },
  );

  // ------------------------- UPDATERS -------------------------

  private readonly getEpisodeSuccess = this.updater(
    (state, episode: Episode): EpisodeDetailsState => ({
      ...state,
      episodeLoading: false,
      episode: episode,
      episodeError: null,
    }),
  );

  private readonly getEpisodeFailure = this.updater(
    (state, error: BackendErrorResponse): EpisodeDetailsState => ({
      ...state,
      episodeLoading: false,
      charactersLoading: false,
      episode: null,
      episodeError: error,
    }),
  );

  private readonly getEpisodeCharactersSuccess = this.updater(
    (state, characters: Character[]): EpisodeDetailsState => ({
      ...state,
      charactersLoading: false,
      characters: characters,
      charactersError: null,
    }),
  );

  private readonly getEpisodeCharactersFailure = this.updater(
    (state, error: BackendErrorResponse): EpisodeDetailsState => ({
      ...state,
      charactersLoading: false,
      characters: null,
      charactersError: error,
    }),
  );
}
