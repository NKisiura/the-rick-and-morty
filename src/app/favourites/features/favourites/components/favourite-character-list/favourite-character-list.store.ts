import { inject, Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { ComponentStore } from "@ngrx/component-store";
import { tapResponse } from "@ngrx/operators";
import { EMPTY, of, switchMap, tap } from "rxjs";
import { BackendErrorResponse } from "@shared/types/http";
import { LocalStorageService } from "@shared/services";
import { FAVOURITE_CHARACTERS_LS_KEY } from "@favourites/constants";
import { CharactersApiService } from "@characters/services";
import { Character } from "@characters/types";

interface FavouriteCharacterListState {
  readonly favouriteCharacters: Character[];
  readonly isLoading: boolean;
  readonly error: BackendErrorResponse | null;
}

const initialState: FavouriteCharacterListState = {
  favouriteCharacters: [],
  isLoading: false,
  error: null,
};

@Injectable()
export class FavouriteCharacterListStore extends ComponentStore<FavouriteCharacterListState> {
  private readonly localStorageService = inject(LocalStorageService);
  private readonly charactersApiService = inject(CharactersApiService);

  constructor() {
    super(initialState);
  }

  // ------------------------- SELECTORS -------------------------

  public readonly favouriteCharacters = this.selectSignal(
    ({ favouriteCharacters }) => favouriteCharacters,
  );
  public readonly hasFavouriteCharacters = this.selectSignal(
    this.favouriteCharacters,
    (characters) => !!characters.length,
  );
  public readonly isLoading = this.selectSignal(({ isLoading }) => isLoading);
  public readonly error = this.selectSignal(({ error }) => error);

  // ------------------------- EFFECTS -------------------------

  public readonly favouriteCharactersRequested = this.effect<void>(
    (trigger$) => {
      return trigger$.pipe(
        tap(() => this.patchState({ isLoading: true })),
        switchMap(() => {
          return of(
            this.localStorageService.getItem<number[]>(
              FAVOURITE_CHARACTERS_LS_KEY,
            ) || [],
          );
        }),
        switchMap((favouriteCharacterIdList) => {
          if (!favouriteCharacterIdList.length) {
            return of(EMPTY);
          }

          return this.charactersApiService
            .getCharactersByIdList(favouriteCharacterIdList)
            .pipe(
              tapResponse(
                (characters) => {
                  this.favouriteCharactersSucceeded(characters);
                },
                ({ error }: HttpErrorResponse) => {
                  this.favouriteCharactersFailed(error);
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
    },
  );

  // ------------------------- UPDATERS -------------------------

  private readonly favouriteCharactersSucceeded = this.updater<Character[]>(
    (state, characters): FavouriteCharacterListState => ({
      ...state,
      favouriteCharacters: [...characters],
      error: null,
    }),
  );

  private readonly favouriteCharactersFailed =
    this.updater<BackendErrorResponse>(
      (state, error): FavouriteCharacterListState => ({
        ...state,
        error,
        favouriteCharacters: [],
      }),
    );
}
