import { inject, Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { Episode, EpisodesFilter } from "@episodes/types";
import {
  BackendErrorResponse,
  PaginatedResponseDTO,
  PaginationInfo,
} from "@shared/types/http";
import { EpisodesApiService } from "@episodes/services";
import { debounceTime, map, switchMap, tap } from "rxjs";
import { tapResponse } from "@ngrx/operators";
import { HttpErrorResponse } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";

interface EpisodeListState {
  readonly initialFilter: EpisodesFilter;
  readonly filter: EpisodesFilter;
  readonly isLoading: boolean;
  readonly episodes: Episode[] | null;
  readonly paginationInfo: PaginationInfo | null;
  readonly error: BackendErrorResponse | null;
}

const initialState: EpisodeListState = {
  initialFilter: {},
  filter: {},
  isLoading: false,
  episodes: null,
  paginationInfo: null,
  error: null,
};

@Injectable()
export class EpisodeListStore extends ComponentStore<EpisodeListState> {
  private readonly episodesApiService = inject(EpisodesApiService);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);

  constructor() {
    super(initialState);
    this.pathStateWithInitialFilterFromQueryParams();
  }

  private pathStateWithInitialFilterFromQueryParams(): void {
    const { page, ...params } = this.activatedRoute.snapshot.queryParams;
    const initialFilter: EpisodesFilter = { page: +page || 1, ...params };

    this.patchState({ initialFilter });
  }

  private applyFilterToQueryParams(filter: EpisodesFilter): void {
    this.router.navigate([], { queryParams: filter });
  }

  // ------------------------- SELECTORS -------------------------

  public readonly episodes = this.selectSignal(({ episodes }) => episodes);
  public readonly episodesLoading = this.selectSignal(
    ({ isLoading }) => isLoading,
  );
  public readonly hasLoadedEpisodes = this.selectSignal(({ episodes }) =>
    Boolean(episodes),
  );
  public readonly error = this.selectSignal(({ error }) => error);

  public readonly initialFilter = this.selectSignal(
    ({ initialFilter }) => initialFilter,
  );
  public readonly episodesFilter = this.selectSignal(({ filter }) => filter);

  public readonly currentPage = this.selectSignal(
    this.episodesFilter,
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

  public readonly initialEpisodesRequested = this.effect<void>((trigger$) => {
    return trigger$.pipe(
      map(() => this.initialFilter()),
      tap((filter) => {
        this.patchState({ filter });
        this.applyFilterToQueryParams(filter);
        this.episodesByFilterRequested(filter);
      }),
    );
  });

  public readonly filterChanged = this.effect<EpisodesFilter>(
    (episodesFilter$) => {
      return episodesFilter$.pipe(
        debounceTime(300),
        map((filter) => ({ ...filter, page: 1 }) as EpisodesFilter),
        tap((filter) => {
          this.patchState({ filter, episodes: null });
          this.applyFilterToQueryParams(filter);
          this.episodesByFilterRequested(filter);
        }),
      );
    },
  );

  public readonly pageChanged = this.effect<number>((pageNumber$) => {
    return pageNumber$.pipe(
      map((page) => ({ ...this.episodesFilter(), page }) as EpisodesFilter),
      tap((filter) => {
        this.patchState({ filter, episodes: null });
        this.applyFilterToQueryParams(filter);
        this.episodesByFilterRequested(filter);
      }),
    );
  });

  private readonly episodesByFilterRequested = this.effect<EpisodesFilter>(
    (episodesFilter$) => {
      return episodesFilter$.pipe(
        tap(() => this.patchState({ isLoading: true })),
        switchMap((episodesFilter) => {
          return this.episodesApiService
            .getEpisodesByFilter(episodesFilter)
            .pipe(
              tapResponse(
                (paginatedEpisodeList) => {
                  this.episodesByFilterSucceeded(paginatedEpisodeList);
                },
                ({ error }: HttpErrorResponse) => {
                  this.episodesByFilterFailed(error);
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
        const { page, ...filterProps } = this.episodesFilter();
        return {
          ...filterProps,
          page: (page || 1) + 1,
        } as EpisodesFilter;
      }),
      tap((filter) => {
        this.patchState({ filter, isLoading: true });
        this.applyFilterToQueryParams(filter);
      }),
      switchMap((filter) => {
        return this.episodesApiService.getEpisodesByFilter(filter).pipe(
          tapResponse(
            (paginatedEpisodeList) => {
              this.nextPageSucceeded(paginatedEpisodeList);
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

  private readonly episodesByFilterSucceeded = this.updater(
    (
      state,
      { info, results }: PaginatedResponseDTO<Episode>,
    ): EpisodeListState => ({
      ...state,
      isLoading: false,
      episodes: results,
      paginationInfo: info,
      error: null,
    }),
  );

  private readonly episodesByFilterFailed = this.updater(
    (state, error: BackendErrorResponse): EpisodeListState => ({
      ...state,
      isLoading: false,
      episodes: null,
      paginationInfo: null,
      error,
    }),
  );

  private readonly nextPageSucceeded = this.updater(
    (
      state,
      { info, results }: PaginatedResponseDTO<Episode>,
    ): EpisodeListState => ({
      ...state,
      isLoading: false,
      episodes: [...(state.episodes || []), ...results],
      paginationInfo: info,
      error: null,
    }),
  );

  private readonly nextPageFailed = this.updater(
    (state, error: BackendErrorResponse): EpisodeListState => ({
      ...state,
      isLoading: false,
      error,
    }),
  );
}
