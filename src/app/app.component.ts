import {
  Component,
  ChangeDetectionStrategy,
  inject,
  viewChild,
  AfterViewInit,
} from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "@core/ui";
import { NgProgressComponent } from "ngx-progressbar";
import { Store } from "@ngrx/store";
import { appStateFeature } from "@app/app.state";
import { skip, tap } from "rxjs";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { LazyNavigationLoadingTrackerService } from "@core/services";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NgProgressComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {
  private readonly store = inject(Store);
  private readonly lazyNavigationTracker = inject(
    LazyNavigationLoadingTrackerService,
  );

  private progressbar = viewChild(NgProgressComponent);
  private httpOrLazyNavigationLoading$ = this.store.select(
    appStateFeature.selectHttpOrLazyNavigationLoading,
  );

  constructor() {
    this.lazyNavigationTracker.initLazyNavigationLoadingTracking();
  }

  ngAfterViewInit(): void {
    this.initProgressbar();
  }

  private initProgressbar(): void {
    this.httpOrLazyNavigationLoading$
      .pipe(
        skip(1),
        tap((isLoading) => {
          const progressbar = this.progressbar();
          if (!progressbar) return;

          isLoading ? progressbar.start() : progressbar.complete();
        }),
        takeUntilDestroyed(),
      )
      .subscribe();
  }
}
