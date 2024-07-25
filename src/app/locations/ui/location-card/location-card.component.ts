import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { Location } from "@locations/types";
import { APP_ROUTES } from "@shared/constants";
import { RouterLink } from "@angular/router";

@Component({
  selector: "location-card",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./location-card.component.html",
  styleUrl: "./location-card.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationCardComponent {
  public APP_ROUTES = APP_ROUTES;

  public location = input.required<Location>();
}
