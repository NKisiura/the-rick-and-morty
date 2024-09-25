import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  standalone: true,
  imports: [],
  templateUrl: "./favourite-episode-list.component.html",
  styleUrl: "./favourite-episode-list.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavouriteEpisodeListComponent {}
