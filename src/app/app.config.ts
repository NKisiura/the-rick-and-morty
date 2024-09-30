import { ApplicationConfig } from "@angular/core";
import {
  provideRouter,
  withComponentInputBinding,
  withViewTransitions,
} from "@angular/router";

import { routes } from "./app.routes";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import {
  apiBaseUrlInterceptor,
  httpRequestLoadingTrackerInterceptor,
  retryInterceptor,
} from "@core/interceptors";
import { provideState, provideStore } from "@ngrx/store";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { appStateFeature } from "./app.state";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding(), withViewTransitions()),
    provideHttpClient(
      withInterceptors([
        apiBaseUrlInterceptor,
        httpRequestLoadingTrackerInterceptor,
        retryInterceptor,
      ]),
    ),
    provideStore(),
    provideStoreDevtools({ maxAge: 25, logOnly: true }),
    provideState(appStateFeature),
  ],
};
