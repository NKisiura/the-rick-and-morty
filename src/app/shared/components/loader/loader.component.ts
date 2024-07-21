import { ChangeDetectionStrategy, Component } from "@angular/core";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

@Component({
  selector: "loader",
  standalone: true,
  imports: [FaIconComponent],
  templateUrl: "./loader.component.html",
  styleUrl: "./loader.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {
  public loadingIcon = faCircleNotch;
}
