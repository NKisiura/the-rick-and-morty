import { inject, Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { switchMap, tap } from "rxjs";
import { tapResponse } from "@ngrx/operators";
import { BackendErrorResponse } from "@shared/types/http";
import { HttpErrorResponse } from "@angular/common/http";
import { CharactersApiService } from "@characters/services";
import { EpisodesApiService } from "@episodes/services";
import { Character } from "@characters/types";
import { Episode } from "@episodes/types";

interface CharacterDetailsState {
  readonly characterLoading: boolean;
  readonly character: Character | null;
  readonly characterError: BackendErrorResponse | null;

  readonly episodesLoading: boolean;
  readonly episodes: Episode[] | null;
  readonly episodesError: BackendErrorResponse | null;
}

const initialState: CharacterDetailsState = {
  characterLoading: false,
  character: null,
  characterError: null,

  episodesLoading: false,
  episodes: null,
  episodesError: null,
};

@Injectable()
export class CharacterDetailsStore extends ComponentStore<CharacterDetailsState> {
  private readonly charactersApiService = inject(CharactersApiService);
  private readonly episodesApiService = inject(EpisodesApiService);

  constructor() {
    super(initialState);
  }

  // ------------------------- SELECTORS -------------------------

  public readonly character = this.selectSignal(({ character }) => character);
  public readonly characterLoading = this.selectSignal(
    ({ characterLoading }) => characterLoading,
  );
  public readonly characterError = this.selectSignal(
    ({ characterError }) => characterError,
  );

  public readonly episodes = this.selectSignal(({ episodes }) => episodes);
  public readonly episodesLoading = this.selectSignal(
    ({ episodesLoading }) => episodesLoading,
  );
  public readonly episodesError = this.selectSignal(
    ({ episodesError }) => episodesError,
  );

  // ------------------------- EFFECTS -------------------------

  public readonly characterWithEpisodesByIdRequested = this.effect<number>(
    (characterId$) => {
      return characterId$.pipe(
        tap(() => this.patchState({ characterLoading: true })),
        switchMap((characterId) =>
          this.charactersApiService.getCharacterById(characterId).pipe(
            tapResponse(
              (character) => {
                this.characterByIdSucceeded(character);
                this.characterEpisodesByIdListRequested(character.episodeIds);
              },
              ({ error }: HttpErrorResponse) => {
                this.characterByIdFailed(error);
              },
            ),
          ),
        ),
      );
    },
  );

  private readonly characterEpisodesByIdListRequested = this.effect<number[]>(
    (episodeIdList$) => {
      return episodeIdList$.pipe(
        tap(() => this.patchState({ episodesLoading: true })),
        switchMap((episodeIdList) =>
          this.episodesApiService.getEpisodesByIdList(episodeIdList).pipe(
            tapResponse(
              (episodes) => {
                this.characterEpisodesSucceeded(episodes);
              },
              ({ error }: HttpErrorResponse) => {
                this.characterEpisodesFailed(error);
              },
            ),
          ),
        ),
      );
    },
  );

  // ------------------------- UPDATERS -------------------------

  private readonly characterByIdSucceeded = this.updater(
    (state, character: Character): CharacterDetailsState => ({
      ...state,
      characterLoading: false,
      character: character,
      characterError: null,
    }),
  );

  private readonly characterByIdFailed = this.updater(
    (state, error: BackendErrorResponse): CharacterDetailsState => ({
      ...state,
      characterLoading: false,
      character: null,
      characterError: error,
    }),
  );

  private readonly characterEpisodesSucceeded = this.updater(
    (state, episodes: Episode[]): CharacterDetailsState => ({
      ...state,
      episodesLoading: false,
      episodes: episodes,
      episodesError: null,
    }),
  );

  private readonly characterEpisodesFailed = this.updater(
    (state, error: BackendErrorResponse): CharacterDetailsState => ({
      ...state,
      episodesLoading: false,
      episodes: null,
      episodesError: error,
    }),
  );
}
