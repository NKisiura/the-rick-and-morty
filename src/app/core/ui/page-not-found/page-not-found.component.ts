import { ChangeDetectionStrategy, Component } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-page-not-found",
  standalone: true,
  imports: [NgOptimizedImage, FaIconComponent],
  templateUrl: "./page-not-found.component.html",
  styleUrl: "./page-not-found.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent {
  public goBackIcon = faArrowLeftLong;

  public goBack(): void {
    history.back();
  }
}
