import {
  createActionGroup,
  createFeature,
  createReducer,
  createSelector,
  emptyProps,
  on,
} from "@ngrx/store";
import {
  routerCancelAction,
  routerErrorAction,
  routerNavigatedAction,
  routerRequestAction,
} from "@ngrx/router-store";

export const HttpRequestActions = createActionGroup({
  source: "Http Request",
  events: {
    "Loading Start": emptyProps(),
    "Loading End": emptyProps(),
  },
});

interface AppState {
  readonly httpRequestLoading: boolean;
  readonly routerNavigationLoading: boolean;
}

const initialState: AppState = {
  httpRequestLoading: false,
  routerNavigationLoading: false,
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
    routerRequestAction,
    (state): AppState => ({
      ...state,
      routerNavigationLoading: true,
    }),
  ),
  on(
    routerNavigatedAction,
    (state): AppState => ({
      ...state,
      routerNavigationLoading: false,
    }),
  ),
  on(
    routerCancelAction,
    (state): AppState => ({
      ...state,
      routerNavigationLoading: false,
    }),
  ),
  on(
    routerErrorAction,
    (state): AppState => ({
      ...state,
      routerNavigationLoading: false,
    }),
  ),
);

export const appStateFeature = createFeature({
  name: "app",
  reducer,
  extraSelectors: ({
    selectHttpRequestLoading,
    selectRouterNavigationLoading,
  }) => ({
    selectHttpOrNavigationLoading: createSelector(
      selectHttpRequestLoading,
      selectRouterNavigationLoading,
      (httpLoading, navigationLoading) => httpLoading || navigationLoading,
    ),
  }),
});
