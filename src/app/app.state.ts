import {
  createActionGroup,
  createFeature,
  createReducer,
  createSelector,
  emptyProps,
  on,
} from "@ngrx/store";

export const HttpRequestActions = createActionGroup({
  source: "Http Request",
  events: {
    "Loading Start": emptyProps(),
    "Loading End": emptyProps(),
  },
});

export const LazyNavigationActions = createActionGroup({
  source: "Lazy Navigation",
  events: {
    "Lazy Module Loading Start": emptyProps(),
    "Lazy Module Loading End": emptyProps(),
  },
});

interface AppState {
  readonly httpRequestLoading: boolean;
  readonly lazyNavigationLoading: boolean;
}

const initialState: AppState = {
  httpRequestLoading: false,
  lazyNavigationLoading: false,
};

const reducer = createReducer(
  initialState,
  on(
    HttpRequestActions.loadingStart,
    (state): AppState => ({
      ...state,
      httpRequestLoading: true,
    }),
  ),
  on(
    HttpRequestActions.loadingEnd,
    (state): AppState => ({
      ...state,
      httpRequestLoading: false,
    }),
  ),
  on(
    LazyNavigationActions.lazyModuleLoadingStart,
    (state): AppState => ({
      ...state,
      lazyNavigationLoading: true,
    }),
  ),
  on(
    LazyNavigationActions.lazyModuleLoadingEnd,
    (state): AppState => ({
      ...state,
      lazyNavigationLoading: false,
    }),
  ),
);

export const appStateFeature = createFeature({
  name: "app",
  reducer,
  extraSelectors: ({
    selectHttpRequestLoading,
    selectLazyNavigationLoading,
  }) => ({
    selectHttpOrLazyNavigationLoading: createSelector(
      selectHttpRequestLoading,
      selectLazyNavigationLoading,
      (httpLoading, lazyNavigationLoading) => {
        return httpLoading || lazyNavigationLoading;
      },
    ),
  }),
});
