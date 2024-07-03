import { DestroyRef, inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Event, EventType, Router } from "@angular/router";
import { filter, map, tap } from "rxjs";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { LazyNavigationActions } from "@app/app.state";

@Injectable({ providedIn: "root" })
export class LazyNavigationLoadingTrackerService {
  private readonly destroyRef = inject(DestroyRef);
  private readonly store = inject(Store);
  private readonly router = inject(Router);

  private routeConfigLoadEventTypes = [
    EventType.RouteConfigLoadStart,
    EventType.RouteConfigLoadEnd,
  ];

  public initLazyNavigationLoadingTracking(): void {
    this.router.events
      .pipe(
        filter((event) => this.isRouteConfigLoadEvent(event)),
        map((event) => this.defineActionToDispatch(event)),
        tap((action) => this.store.dispatch(action())),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }

  private isRouteConfigLoadEvent(event: Event): boolean {
    return this.routeConfigLoadEventTypes.includes(event.type);
  }

  private defineActionToDispatch(event: Event) {
    const isStartEvent = event.type === EventType.RouteConfigLoadStart;

    return isStartEvent
      ? LazyNavigationActions.lazyModuleLoadingStart
      : LazyNavigationActions.lazyModuleLoadingEnd;
  }
}
