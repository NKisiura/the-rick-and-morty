import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { Location } from "@locations/types";
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
  public location = input.required<Location>();
}
