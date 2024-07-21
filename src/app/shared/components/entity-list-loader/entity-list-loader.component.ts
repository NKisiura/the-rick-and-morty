import { ChangeDetectionStrategy, Component } from "@angular/core";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

@Component({
  selector: "entity-list-loader",
  standalone: true,
  imports: [FaIconComponent],
  templateUrl: "./entity-list-loader.component.html",
  styleUrl: "./entity-list-loader.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntityListLoaderComponent {
  public loadingIcon = faCircleNotch;
}
