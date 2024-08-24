import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { NgClass } from "@angular/common";
import { APP_ROUTES } from "@shared/constants";
import { Episode } from "@episodes/types";
import { EntityType } from "@shared/types/entity";
import { EntityFavouriteToggleComponent } from "@shared/components";

@Component({
  selector: "episode-card",
  standalone: true,
  imports: [RouterLink, EntityFavouriteToggleComponent, NgClass],
  templateUrl: "./episode-card.component.html",
  styleUrl: "./episode-card.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpisodeCardComponent {
  public APP_ROUTES = APP_ROUTES;
  public EntityType = EntityType;

  public episode = input.required<Episode>();
}
