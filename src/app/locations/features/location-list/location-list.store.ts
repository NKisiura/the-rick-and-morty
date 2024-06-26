import { inject, Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { Location, LocationsFilter } from "@locations/types";
import {
  BackendErrorResponse,
  PaginatedResponseDTO,
  PaginationInfo,
} from "@shared/types/http";
import { LocationsApiService } from "@locations/services";
import { switchMap, tap } from "rxjs";
import { tapResponse } from "@ngrx/operators";
import { HttpErrorResponse } from "@angular/common/http";

interface LocationListState {
  readonly filter: LocationsFilter;
  readonly isLoading: boolean;
  readonly locations: Location[] | null;
  readonly paginationInfo: PaginationInfo | null;
  readonly error: BackendErrorResponse | null;
}

const initialState: LocationListState = {
  filter: {},
  isLoading: false,
  locations: null,
  paginationInfo: null,
  error: null,
};

@Injectable()
export class LocationListStore extends ComponentStore<LocationListState> {
  private readonly locationsApiService = inject(LocationsApiService);

  constructor() {
    super(initialState);
  }

  // ------------------------- SELECTORS -------------------------

  public readonly locations = this.selectSignal(({ locations }) => locations);
  public readonly locationsLoading = this.selectSignal(
    ({ isLoading }) => isLoading,
  );
  public readonly error = this.selectSignal(({ error }) => error);

  public readonly locationsFilter = this.selectSignal(({ filter }) => filter);
  public readonly currentPage = this.selectSignal(
    this.locationsFilter,
    ({ page }) => page || 1,
  );
  public readonly pagesCount = this.selectSignal(
    ({ paginationInfo }) => paginationInfo?.pages || 1,
  );

  // ------------------------- EFFECTS -------------------------

  public readonly getLocationByFilter = this.effect<LocationsFilter>(
    (locationsFilter$) => {
      return locationsFilter$.pipe(
        tap(() => this.patchState({ isLoading: true })),
        switchMap((locationsFilter) =>
          this.locationsApiService.getLocationsByFilter(locationsFilter).pipe(
            tapResponse(
              (paginatedLocationList) => {
                this.getLocationsSuccess(paginatedLocationList);
              },
              ({ error }: HttpErrorResponse) => {
                this.getLocationsFailure(error);
              },
            ),
          ),
        ),
      );
    },
  );

  // ------------------------- UPDATERS -------------------------

  private readonly getLocationsSuccess = this.updater(
    (
      state,
      { info, results }: PaginatedResponseDTO<Location>,
    ): LocationListState => ({
      ...state,
      isLoading: false,
      locations: results,
      paginationInfo: info,
      error: null,
    }),
  );

  private readonly getLocationsFailure = this.updater(
    (state, error: BackendErrorResponse): LocationListState => ({
      ...state,
      isLoading: false,
      locations: null,
      paginationInfo: null,
      error: error,
    }),
  );

  public readonly setFilter = this.updater(
    (state, filter: LocationsFilter): LocationListState => ({
      ...state,
      filter: { ...filter },
    }),
  );
}
