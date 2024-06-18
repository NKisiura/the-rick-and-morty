import { ComponentStore } from "@ngrx/component-store";
import { inject, Injectable } from "@angular/core";
import { CharactersApiService } from "@characters/services";
import { Character, CharactersFilter } from "@characters/types";
import {
  BackendErrorResponse,
  PaginatedResponseDTO,
  PaginationInfo,
} from "@shared/types/http";
import { switchMap, tap } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { tapResponse } from "@ngrx/operators";

interface CharacterListState {
  readonly filter: CharactersFilter;
  readonly isLoading: boolean;
  readonly characters: Character[] | null;
  readonly paginationInfo: PaginationInfo | null;
  readonly error: BackendErrorResponse | null;
}

const initialState: CharacterListState = {
  filter: {},
  isLoading: false,
  characters: null,
  paginationInfo: null,
  error: null,
};

@Injectable()
export class CharacterListStore extends ComponentStore<CharacterListState> {
  private readonly charactersApiService = inject(CharactersApiService);

  constructor() {
    super(initialState);
  }

  // ------------------------- SELECTORS -------------------------

  public readonly characters = this.selectSignal(
    ({ characters }) => characters,
  );
  public readonly charactersLoading = this.selectSignal(
    ({ isLoading }) => isLoading,
  );
  public readonly error = this.selectSignal(({ error }) => error);

  public readonly charactersFilter = this.selectSignal(({ filter }) => filter);
  public readonly currentPage = this.selectSignal(
    this.charactersFilter,
    ({ page }) => page || 1,
  );
  public readonly pagesCount = this.selectSignal(
    ({ paginationInfo }) => paginationInfo?.pages || 1,
  );

  // ------------------------- EFFECTS -------------------------

  public readonly getCharactersByFilter = this.effect<CharactersFilter>(
    (charactersFilter$) => {
      return charactersFilter$.pipe(
        tap(() => this.patchState({ isLoading: true })),
        switchMap((charactersFilter) =>
          this.charactersApiService
            .getCharactersByFilter(charactersFilter)
            .pipe(
              tapResponse(
                (paginatedCharacterList) => {
                  this.getCharactersSuccess(paginatedCharacterList);
                },
                ({ error }: HttpErrorResponse) => {
                  this.getCharactersFailure(error);
                },
              ),
            ),
        ),
      );
    },
  );

  // ------------------------- UPDATERS -------------------------

  private readonly getCharactersSuccess = this.updater(
    (
      state,
      { info, results }: PaginatedResponseDTO<Character>,
    ): CharacterListState => ({
      ...state,
      isLoading: false,
      characters: results,
      paginationInfo: info,
      error: null,
    }),
  );

  private readonly getCharactersFailure = this.updater(
    (state, error: BackendErrorResponse): CharacterListState => ({
      ...state,
      isLoading: false,
      characters: null,
      paginationInfo: null,
      error: error,
    }),
  );

  public readonly setFilter = this.updater(
    (state, filter: CharactersFilter): CharacterListState => ({
      ...state,
      filter: { ...filter },
    }),
  );
}
