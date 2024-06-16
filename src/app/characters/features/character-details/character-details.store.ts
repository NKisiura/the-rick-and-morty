import { inject, Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { CharactersApiService } from "@characters/services";
import { EpisodesApiService } from "@episodes/services";
import { Character } from "@characters/types";
import { Episode } from "@episodes/types";
import { BackendErrorResponse } from "@shared/types/http";
import { switchMap, tap } from "rxjs";
import { tapResponse } from "@ngrx/operators";
import { HttpErrorResponse } from "@angular/common/http";

export interface CharacterDetailsState {
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

  public readonly character = this.selectSignal((state) => state.character);
  public readonly characterLoading = this.selectSignal(
    (state) => state.characterLoading,
  );
  public readonly characterError = this.selectSignal(
    (state) => state.characterError,
  );

  public readonly episodes = this.selectSignal((state) => state.episodes);
  public readonly episodesLoading = this.selectSignal(
    (state) => state.episodesLoading,
  );
  public readonly episodesError = this.selectSignal(
    (state) => state.episodesError,
  );

  // ------------------------- EFFECTS -------------------------

  public readonly getCharacterWithEpisodesById = this.effect<number>(
    (characterId$) => {
      return characterId$.pipe(
        tap(() =>
          this.patchState({ characterLoading: true, episodesLoading: true }),
        ),
        switchMap((characterId) =>
          this.charactersApiService.getCharacterById(characterId).pipe(
            tapResponse(
              (character) => {
                this.getCharacterSuccess(character);
                this.getCharacterEpisodesByIdList(character.episodeIds);
              },
              (error: HttpErrorResponse) => {
                this.getCharacterFailure(error.error);
              },
            ),
          ),
        ),
      );
    },
  );

  private readonly getCharacterEpisodesByIdList = this.effect<number[]>(
    (episodeIdList$) => {
      return episodeIdList$.pipe(
        switchMap((episodeIdList) =>
          this.episodesApiService.getEpisodesByIdList(episodeIdList).pipe(
            tapResponse(
              (episodes) => {
                this.getCharacterEpisodesSuccess(episodes);
              },
              (error: HttpErrorResponse) => {
                this.getCharacterEpisodesFailure(error.error);
              },
            ),
          ),
        ),
      );
    },
  );

  // ------------------------- UPDATERS -------------------------

  private readonly getCharacterSuccess = this.updater(
    (state, character: Character): CharacterDetailsState => ({
      ...state,
      characterLoading: false,
      character: character,
      characterError: null,
    }),
  );

  private readonly getCharacterFailure = this.updater(
    (state, error: BackendErrorResponse): CharacterDetailsState => ({
      ...state,
      characterLoading: false,
      character: null,
      characterError: error,
    }),
  );

  private readonly getCharacterEpisodesSuccess = this.updater(
    (state, episodes: Episode[]): CharacterDetailsState => ({
      ...state,
      episodesLoading: false,
      episodes: episodes,
      episodesError: null,
    }),
  );

  private readonly getCharacterEpisodesFailure = this.updater(
    (state, error: BackendErrorResponse): CharacterDetailsState => ({
      ...state,
      episodesLoading: false,
      episodes: null,
      episodesError: error,
    }),
  );
}
