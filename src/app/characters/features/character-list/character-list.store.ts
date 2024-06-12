import { ComponentStore } from "@ngrx/component-store";
import { inject, Injectable } from "@angular/core";
import { CharactersApiService } from "@characters/services";
import { Character, CharactersFilter } from "@characters/types";
import { BackendErrorResponse, PaginatedResponseDTO } from "@shared/types/http";
import { switchMap, tap } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { tapResponse } from "@ngrx/operators";

export interface CharacterListState {
  readonly filter: CharactersFilter;
  readonly isLoading: boolean;
  readonly data: PaginatedResponseDTO<Character> | null;
  readonly error: BackendErrorResponse | null;
}

const initialState: CharacterListState = {
  filter: {},
  isLoading: false,
  data: null,
  error: null,
};

@Injectable()
export class CharacterListStore extends ComponentStore<CharacterListState> {
  private readonly charactersApiService = inject(CharactersApiService);

  constructor() {
    super(initialState);
  }

  // ------------------------- SELECTORS -------------------------

  private readonly paginatedResponse = this.selectSignal((state) => state.data);

  public readonly characters = this.selectSignal(
    this.paginatedResponse,
    (paginatedResponse) => paginatedResponse?.results || null,
  );
  public readonly charactersLoading = this.selectSignal(
    (state) => state.isLoading,
  );
  public readonly error = this.selectSignal((state) => state.error);

  public charactersFilter = this.selectSignal((state) => state.filter);
  public currentPage = this.selectSignal((state) => state.filter.page || 1);
  public pagesCount = this.selectSignal(
    this.paginatedResponse,
    (paginatedResponse) => paginatedResponse?.info.pages || 1,
  );

  // ------------------------- EFFECTS -------------------------

  public readonly getCharacterList = this.effect<CharactersFilter>(
    (charactersFilter$) => {
      return charactersFilter$.pipe(
        tap(() => this.patchState({ isLoading: true })),
        switchMap((charactersFilter) =>
          this.charactersApiService.getAllCharacters(charactersFilter).pipe(
            tapResponse(
              (paginatedResponse) => {
                this.getCharacterListSuccess(paginatedResponse);
              },
              (error: HttpErrorResponse) => {
                this.getCharacterListFailure(error.error);
              },
            ),
          ),
        ),
      );
    },
  );

  // ------------------------- UPDATERS -------------------------

  private readonly getCharacterListSuccess = this.updater(
    (
      state,
      paginatedCharacterList: PaginatedResponseDTO<Character>,
    ): CharacterListState => ({
      ...state,
      isLoading: false,
      data: paginatedCharacterList,
      error: null,
    }),
  );

  private readonly getCharacterListFailure = this.updater(
    (state, error: BackendErrorResponse): CharacterListState => ({
      ...state,
      isLoading: false,
      data: null,
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
