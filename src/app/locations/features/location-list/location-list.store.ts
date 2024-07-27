import { inject, Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import { debounceTime, map, switchMap, tap } from "rxjs";
import { tapResponse } from "@ngrx/operators";
import { ComponentStore } from "@ngrx/component-store";
import {
  BackendErrorResponse,
  PaginatedResponseDTO,
  PaginationInfo,
} from "@shared/types/http";
import { LocationsApiService } from "@locations/services";
import { Location, LocationsFilter } from "@locations/types";

interface LocationListState {
  readonly initialFilter: LocationsFilter;
  readonly filter: LocationsFilter;
  readonly isLoading: boolean;
  readonly locations: Location[] | null;
  readonly paginationInfo: PaginationInfo | null;
  readonly error: BackendErrorResponse | null;
}

const initialState: LocationListState = {
  initialFilter: {},
  filter: {},
  isLoading: false,
  locations: null,
  paginationInfo: null,
  error: null,
};

@Injectable()
export class LocationListStore extends ComponentStore<LocationListState> {
  private readonly locationsApiService = inject(LocationsApiService);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);

  constructor() {
    super(initialState);
    this.pathStateWithInitialFilterFromQueryParams();
  }

  private pathStateWithInitialFilterFromQueryParams(): void {
    const { page, ...params } = this.activatedRoute.snapshot.queryParams;
    const initialFilter: LocationsFilter = { page: +page || 1, ...params };

    this.patchState({ initialFilter });
  }

  private applyFilterToQueryParams(filter: LocationsFilter): void {
    this.router.navigate([], { queryParams: filter });
  }

  // ------------------------- SELECTORS -------------------------

  public readonly locations = this.selectSignal(({ locations }) => locations);
  public readonly locationsLoading = this.selectSignal(
    ({ isLoading }) => isLoading,
  );
  public readonly hasLoadedLocations = this.selectSignal(({ locations }) =>
    Boolean(locations),
  );
  public readonly error = this.selectSignal(({ error }) => error);

  public readonly initialFilter = this.selectSignal(
    ({ initialFilter }) => initialFilter,
  );
  public readonly locationsFilter = this.selectSignal(({ filter }) => filter);

  public readonly currentPage = this.selectSignal(
    this.locationsFilter,
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

  public readonly initialLocationsRequested = this.effect<void>((trigger$) => {
    return trigger$.pipe(
      map(() => this.initialFilter()),
      tap((filter) => {
        this.patchState({ filter });
        this.applyFilterToQueryParams(filter);
        this.locationByFilterRequested(filter);
      }),
    );
  });

  public readonly filterChanged = this.effect<LocationsFilter>(
    (locationsFilter$) => {
      return locationsFilter$.pipe(
        debounceTime(300),
        map((filter) => ({ ...filter, page: 1 }) as LocationsFilter),
        tap((filter) => {
          this.patchState({ filter, locations: null });
          this.applyFilterToQueryParams(filter);
          this.locationByFilterRequested(filter);
        }),
      );
    },
  );

  public readonly pageChanged = this.effect<number>((pageNumber$) => {
    return pageNumber$.pipe(
      map((page) => ({ ...this.locationsFilter(), page }) as LocationsFilter),
      tap((filter) => {
        this.patchState({ filter, locations: null });
        this.applyFilterToQueryParams(filter);
        this.locationByFilterRequested(filter);
      }),
    );
  });

  private readonly locationByFilterRequested = this.effect<LocationsFilter>(
    (locationsFilter$) => {
      return locationsFilter$.pipe(
        tap(() => this.patchState({ isLoading: true })),
        switchMap((locationsFilter) =>
          this.locationsApiService.getLocationsByFilter(locationsFilter).pipe(
            tapResponse(
              (paginatedLocationList) => {
                this.locationByFilterSucceeded(paginatedLocationList);
              },
              ({ error }: HttpErrorResponse) => {
                this.locationByFilterFailed(error);
              },
            ),
          ),
        ),
      );
    },
  );

  public readonly nextPageRequested = this.effect<void>((trigger$) => {
    return trigger$.pipe(
      map(() => {
        const { page, ...filterProps } = this.locationsFilter();
        return {
          ...filterProps,
          page: (page || 1) + 1,
        } as LocationsFilter;
      }),
      tap((filter) => {
        this.patchState({ filter, isLoading: true });
        this.applyFilterToQueryParams(filter);
      }),
      switchMap((filter) => {
        return this.locationsApiService.getLocationsByFilter(filter).pipe(
          tapResponse(
            (paginatedLocationList) => {
              this.nextPageSucceeded(paginatedLocationList);
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

  private readonly locationByFilterSucceeded = this.updater(
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

  private readonly locationByFilterFailed = this.updater(
    (state, error: BackendErrorResponse): LocationListState => ({
      ...state,
      isLoading: false,
      locations: null,
      paginationInfo: null,
      error: error,
    }),
  );

  private readonly nextPageSucceeded = this.updater(
    (
      state,
      { info, results }: PaginatedResponseDTO<Location>,
    ): LocationListState => ({
      ...state,
      isLoading: false,
      locations: [...(state.locations || []), ...results],
      paginationInfo: info,
      error: null,
    }),
  );

  private readonly nextPageFailed = this.updater(
    (state, error: BackendErrorResponse): LocationListState => ({
      ...state,
      isLoading: false,
      error,
    }),
  );
}
