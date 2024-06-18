import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { Episode } from "@episodes/types";
import { RouterLink } from "@angular/router";

@Component({
  selector: "episode-card",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./episode-card.component.html",
  styleUrl: "./episode-card.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpisodeCardComponent {
  public episode = input.required<Episode>();
}
