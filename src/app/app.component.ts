import {
  Component,
  ChangeDetectionStrategy,
  inject,
  viewChild,
  AfterViewInit,
  DestroyRef,
} from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { FooterComponent, HeaderComponent } from "@core/ui";
import { NgProgressComponent } from "ngx-progressbar";
import { Store } from "@ngrx/store";
import { appStateFeature } from "@app/app.state";
import { skip } from "rxjs";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    NgProgressComponent,
    FooterComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly store = inject(Store);

  private progressbar = viewChild(NgProgressComponent);
  private httpOrNavigationLoading$ = this.store.select(
    appStateFeature.selectHttpOrNavigationLoading,
  );

  ngAfterViewInit(): void {
    this.initProgressbar();
  }

  private initProgressbar(): void {
    this.httpOrNavigationLoading$
      .pipe(skip(1), takeUntilDestroyed(this.destroyRef))
      .subscribe((isLoading) => {
        const progressbar = this.progressbar();
        if (!progressbar) return;

        isLoading ? progressbar.start() : progressbar.complete();
      });
  }
}
