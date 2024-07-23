import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { APP_ROUTES } from "@shared/constants";
import { Episode } from "@episodes/types";

@Component({
  selector: "episode-card",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./episode-card.component.html",
  styleUrl: "./episode-card.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpisodeCardComponent {
  public APP_ROUTES = APP_ROUTES;

  public episode = input.required<Episode>();
}
