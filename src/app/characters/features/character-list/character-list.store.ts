import { ComponentStore } from "@ngrx/component-store";
import { inject, Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import { debounceTime, map, switchMap, tap } from "rxjs";
import { tapResponse } from "@ngrx/operators";
import {
  BackendErrorResponse,
  PaginatedResponseDTO,
  PaginationInfo,
} from "@shared/types/http";
import { CharactersApiService } from "@characters/services";
import { Character, CharactersFilter } from "@characters/types";

interface CharacterListState {
  readonly initialFilter: CharactersFilter;
  readonly filter: CharactersFilter;
  readonly isLoading: boolean;
  readonly characters: Character[] | null;
  readonly paginationInfo: PaginationInfo | null;
  readonly error: BackendErrorResponse | null;
}

const initialState: CharacterListState = {
  initialFilter: {},
  filter: {},
  isLoading: false,
  characters: null,
  paginationInfo: null,
  error: null,
};

@Injectable()
export class CharacterListStore extends ComponentStore<CharacterListState> {
  private readonly charactersApiService = inject(CharactersApiService);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);

  constructor() {
    super(initialState);
    this.pathStateWithInitialFilterFromQueryParams();
  }

  private pathStateWithInitialFilterFromQueryParams(): void {
    const { page, ...params } = this.activatedRoute.snapshot.queryParams;
    const initialFilter: CharactersFilter = { page: +page || 1, ...params };

    this.patchState({ initialFilter });
  }

  private applyFilterToQueryParams(filter: CharactersFilter): void {
    this.router.navigate([], { queryParams: filter });
  }

  // ------------------------- SELECTORS -------------------------

  public readonly characters = this.selectSignal(
    ({ characters }) => characters,
  );
  public readonly charactersLoading = this.selectSignal(
    ({ isLoading }) => isLoading,
  );
  public readonly hasLoadedCharacters = this.selectSignal(({ characters }) =>
    Boolean(characters),
  );
  public readonly error = this.selectSignal(({ error }) => error);

  public readonly initialFilter = this.selectSignal(
    ({ initialFilter }) => initialFilter,
  );
  public readonly charactersFilter = this.selectSignal(({ filter }) => filter);

  public readonly currentPage = this.selectSignal(
    this.charactersFilter,
    ({ page }) => page || 1,
  );
  public readonly pagesCount = this.selectSignal(
    ({ paginationInfo }) => paginationInfo?.pages || 1,
  );
  public readonly isLastPage = this.selectSignal(
    this.pagesCount,
    this.currentPage,
    (pagesCount, currentPage) => pagesCount === currentPage,
  );

  // ------------------------- EFFECTS -------------------------

  public readonly initialCharactersRequested = this.effect<void>((trigger$) => {
    return trigger$.pipe(
      map(() => this.initialFilter()),
      tap((filter) => {
        this.patchState({ filter });
        this.applyFilterToQueryParams(filter);
        this.charactersByFilterRequested(filter);
      }),
    );
  });

  public readonly filterChanged = this.effect<CharactersFilter>(
    (charactersFilter$) => {
      return charactersFilter$.pipe(
        debounceTime(300),
        map((filter) => ({ ...filter, page: 1 }) as CharactersFilter),
        tap((filter) => {
          this.patchState({ filter, characters: null });
          this.applyFilterToQueryParams(filter);
          this.charactersByFilterRequested(filter);
        }),
      );
    },
  );

  public readonly pageChanged = this.effect<number>((pageNumber$) => {
    return pageNumber$.pipe(
      map((page) => ({ ...this.charactersFilter(), page }) as CharactersFilter),
      tap((filter) => {
        this.patchState({ filter, characters: null });
        this.applyFilterToQueryParams(filter);
        this.charactersByFilterRequested(filter);
      }),
    );
  });

  private readonly charactersByFilterRequested = this.effect<CharactersFilter>(
    (charactersFilter$) => {
      return charactersFilter$.pipe(
        tap(() => this.patchState({ isLoading: true })),
        switchMap((charactersFilter) => {
          return this.charactersApiService
            .getCharactersByFilter(charactersFilter)
            .pipe(
              tapResponse(
                (paginatedCharacterList) => {
                  this.charactersByFilterSucceeded(paginatedCharacterList);
                },
                ({ error }: HttpErrorResponse) => {
                  this.charactersByFilterFailed(error);
                },
              ),
            );
        }),
      );
    },
  );

  public readonly nextPageRequested = this.effect<void>((trigger$) => {
    return trigger$.pipe(
      map(() => {
        const { page, ...filterProps } = this.charactersFilter();
        return {
          ...filterProps,
          page: (page || 1) + 1,
        } as CharactersFilter;
      }),
      tap((filter) => {
        this.patchState({ filter, isLoading: true });
        this.applyFilterToQueryParams(filter);
      }),
      switchMap((filter) => {
        return this.charactersApiService.getCharactersByFilter(filter).pipe(
          tapResponse(
            (paginatedCharacterList) => {
              this.nextPageSucceeded(paginatedCharacterList);
            },
            ({ error }: HttpErrorResponse) => {
              this.nextPageFailed(error);
            },
          ),
        );
      }),
    );
  });

  // ------------------------- UPDATERS -------------------------

  private readonly charactersByFilterSucceeded = this.updater(
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

  private readonly charactersByFilterFailed = this.updater(
    (state, error: BackendErrorResponse): CharacterListState => ({
      ...state,
      isLoading: false,
      characters: null,
      paginationInfo: null,
      error,
    }),
  );

  private readonly nextPageSucceeded = this.updater(
    (
      state,
      { info, results }: PaginatedResponseDTO<Character>,
    ): CharacterListState => ({
      ...state,
      isLoading: false,
      characters: [...(state.characters || []), ...results],
      paginationInfo: info,
      error: null,
    }),
  );

  private readonly nextPageFailed = this.updater(
    (state, error: BackendErrorResponse): CharacterListState => ({
      ...state,
      isLoading: false,
      error,
    }),
  );
}
