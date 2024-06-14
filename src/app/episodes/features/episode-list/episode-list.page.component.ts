import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-episode-list.page",
  standalone: true,
  imports: [],
  templateUrl: "./episode-list.page.component.html",
  styleUrl: "./episode-list.page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpisodeListPageComponent {}
