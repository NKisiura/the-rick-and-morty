import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-episode-details.page",
  standalone: true,
  imports: [],
  templateUrl: "./episode-details.page.component.html",
  styleUrl: "./episode-details.page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpisodeDetailsPageComponent {}
