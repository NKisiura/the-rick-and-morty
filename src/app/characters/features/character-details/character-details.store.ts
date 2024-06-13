import { inject, Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { CharactersApiService } from "@characters/services";
import { Character } from "@characters/types";
import { BackendErrorResponse } from "@shared/types/http";
import { switchMap, tap } from "rxjs";
import { tapResponse } from "@ngrx/operators";
import { HttpErrorResponse } from "@angular/common/http";

export interface CharacterDetailsState {
  isLoading: boolean;
  character: Character | null;
  error: BackendErrorResponse | null;
}

const initialState: CharacterDetailsState = {
  isLoading: false,
  character: null,
  error: null,
};

@Injectable()
export class CharacterDetailsStore extends ComponentStore<CharacterDetailsState> {
  private readonly charactersApiService = inject(CharactersApiService);

  constructor() {
    super(initialState);
  }

  // ------------------------- SELECTORS -------------------------

  public readonly character = this.selectSignal((state) => state.character);
  public readonly characterLoading = this.selectSignal(
    (state) => state.isLoading,
  );
  public readonly error = this.selectSignal((state) => state.error);

  // ------------------------- EFFECTS -------------------------

  public readonly getCharacter = this.effect<number>((characterId$) => {
    return characterId$.pipe(
      tap(() => this.patchState({ isLoading: true })),
      switchMap((characterId) =>
        this.charactersApiService.getSingleCharacter(characterId).pipe(
          tapResponse(
            (character) => {
              this.getCharacterSuccess(character);
            },
            (error: HttpErrorResponse) => {
              this.getCharacterListFailure(error.error);
            },
          ),
        ),
      ),
    );
  });

  // ------------------------- UPDATERS -------------------------

  private readonly getCharacterSuccess = this.updater(
    (state, character: Character): CharacterDetailsState => ({
      ...state,
      isLoading: false,
      character: character,
      error: null,
    }),
  );

  public readonly getCharacterListFailure = this.updater(
    (state, error: BackendErrorResponse): CharacterDetailsState => ({
      ...state,
      isLoading: false,
      character: null,
      error: error,
    }),
  );
}
