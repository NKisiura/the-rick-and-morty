import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import {
  faArrowRotateRight,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "load-more-button",
  standalone: true,
  imports: [FaIconComponent],
  templateUrl: "./load-more-button.component.html",
  styleUrl: "./load-more-button.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadMoreButtonComponent {
  public loadMoreIcon = faArrowRotateRight;
  public loadingIcon = faCircleNotch;

  public isLoading = input<boolean>(false);
}
