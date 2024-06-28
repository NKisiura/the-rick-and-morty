import { HttpContextToken, HttpInterceptorFn } from "@angular/common/http";
import { finalize } from "rxjs";
import { inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { HttpRequestActions } from "@app/app.state";

export const SKIP_REQUEST_LOADING_TRACKING = new HttpContextToken(() => false);

let requestsInProgressCount = 0;

export const httpRequestLoadingTrackerInterceptor: HttpInterceptorFn = (
  req,
  next,
) => {
  const store = inject(Store);

  if (req.context.get(SKIP_REQUEST_LOADING_TRACKING)) {
    return next(req);
  }

  requestsInProgressCount++;
  if (requestsInProgressCount === 1) {
    store.dispatch(HttpRequestActions.loadingStart());
  }

  return next(req).pipe(
    finalize(() => {
      requestsInProgressCount--;
      if (requestsInProgressCount === 0) {
        store.dispatch(HttpRequestActions.loadingEnd());
      }
    }),
  );
};
