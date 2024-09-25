import { inject, Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { ComponentStore } from "@ngrx/component-store";
import { tapResponse } from "@ngrx/operators";
import { EMPTY, of, switchMap, tap } from "rxjs";
import { BackendErrorResponse } from "@shared/types/http";
import { LocalStorageService } from "@shared/services";
import { FAVOURITE_LOCATIONS_LS_KEY } from "@favourites/constants";
import { LocationsApiService } from "@locations/services";
import { Location } from "@locations/types";

interface FavouriteLocationListState {
  readonly favouriteLocations: Location[];
  readonly isLoading: boolean;
  readonly error: BackendErrorResponse | null;
}

const initialState: FavouriteLocationListState = {
  favouriteLocations: [],
  isLoading: false,
  error: null,
};

@Injectable()
export class FavouriteLocationListStore extends ComponentStore<FavouriteLocationListState> {
  private readonly localStorageService = inject(LocalStorageService);
  private readonly locationsApiService = inject(LocationsApiService);

  constructor() {
    super(initialState);
  }

  // ------------------------- SELECTORS -------------------------

  public readonly favouriteLocations = this.selectSignal(
    ({ favouriteLocations }) => favouriteLocations,
  );
  public readonly hasFavouriteLocations = this.selectSignal(
    this.favouriteLocations,
    (locations) => locations.length,
  );
  public readonly isLoading = this.selectSignal(({ isLoading }) => isLoading);
  public readonly error = this.selectSignal(({ error }) => error);

  // ------------------------- EFFECTS -------------------------

  public readonly favouriteLocationsRequested = this.effect<void>(
    (trigger$) => {
      return trigger$.pipe(
        tap(() => this.patchState({ isLoading: true })),
        switchMap(() => {
          return of(
            this.localStorageService.getItem<number[]>(
              FAVOURITE_LOCATIONS_LS_KEY,
            ) || [],
          );
        }),
        switchMap((favouriteLocationIdList) => {
          if (!favouriteLocationIdList.length) {
            return of(EMPTY);
          }

          return this.locationsApiService
            .getLocationsByIdList(favouriteLocationIdList)
            .pipe(
              tapResponse(
                (locations) => {
                  this.favouriteLocationsSucceeded(locations);
                },
                ({ error }: HttpErrorResponse) => {
                  this.favouriteLocationsFailed(error);
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

  private readonly favouriteLocationsSucceeded = this.updater<Location[]>(
    (state, locations): FavouriteLocationListState => ({
      ...state,
      favouriteLocations: [...locations],
      error: null,
    }),
  );

  private readonly favouriteLocationsFailed =
    this.updater<BackendErrorResponse>(
      (state, error): FavouriteLocationListState => ({
        ...state,
        error,
        favouriteLocations: [],
      }),
    );
}
