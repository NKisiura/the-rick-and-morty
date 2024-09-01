import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { NgClass } from "@angular/common";
import { APP_ROUTES } from "@shared/constants";
import { Location } from "@locations/types";
import { EntityType } from "@shared/types/entity";
import { EntityFavouriteToggleComponent } from "@favourites/features";

@Component({
  selector: "location-card",
  standalone: true,
  imports: [RouterLink, NgClass, EntityFavouriteToggleComponent],
  templateUrl: "./location-card.component.html",
  styleUrl: "./location-card.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationCardComponent {
  public APP_ROUTES = APP_ROUTES;
  public EntityType = EntityType;

  public location = input.required<Location>();
}
