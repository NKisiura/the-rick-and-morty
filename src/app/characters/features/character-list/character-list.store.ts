import { ComponentStore } from "@ngrx/component-store";
import { inject, Injectable } from "@angular/core";
import { CharactersApiService } from "@characters/services";
import { Character, CharactersFilter } from "@characters/types";
import { BackendErrorResponse, PaginatedResponseDTO } from "@shared/types/http";
import { switchMap, tap } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { tapResponse } from "@ngrx/operators";

interface CharacterListState {
  readonly filter: CharactersFilter;
  readonly isLoading: boolean;
  readonly paginatedCharacterList: PaginatedResponseDTO<Character> | null;
  readonly error: BackendErrorResponse | null;
}

const initialState: CharacterListState = {
  filter: {},
  isLoading: false,
  paginatedCharacterList: null,
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
    ({ paginatedCharacterList }) => paginatedCharacterList?.results || null,
  );
  public readonly charactersLoading = this.selectSignal(
    ({ isLoading }) => isLoading,
  );
  public readonly error = this.selectSignal(({ error }) => error);

  public readonly charactersFilter = this.selectSignal(({ filter }) => filter);
  public readonly currentPage = this.selectSignal(
    ({ filter }) => filter.page || 1,
  );
  public readonly pagesCount = this.selectSignal(
    ({ paginatedCharacterList }) => paginatedCharacterList?.info.pages || 1,
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
                (error: HttpErrorResponse) => {
                  this.getCharactersFailure(error.error);
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
      paginatedCharacterList: PaginatedResponseDTO<Character>,
    ): CharacterListState => ({
      ...state,
      isLoading: false,
      paginatedCharacterList: paginatedCharacterList,
      error: null,
    }),
  );

  private readonly getCharactersFailure = this.updater(
    (state, error: BackendErrorResponse): CharacterListState => ({
      ...state,
      isLoading: false,
      paginatedCharacterList: null,
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
