import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from "@angular/core";
import { ErrorMessageComponent, LoaderComponent } from "@shared/components";
import { EpisodeCardComponent } from "@episodes/ui";
import { FavouriteEpisodeListStore } from "./favourite-episode-list.store";

@Component({
  standalone: true,
  imports: [LoaderComponent, ErrorMessageComponent, EpisodeCardComponent],
  providers: [FavouriteEpisodeListStore],
  templateUrl: "./favourite-episode-list.component.html",
  styleUrl: "./favourite-episode-list.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavouriteEpisodeListComponent implements OnInit {
  private readonly favouriteEpisodeListStore = inject(
    FavouriteEpisodeListStore,
  );

  public readonly favouriteEpisodes =
    this.favouriteEpisodeListStore.favouriteEpisodes;
  public readonly hasFavouriteEpisodes =
    this.favouriteEpisodeListStore.hasFavouriteEpisodes;
  public readonly isLoading = this.favouriteEpisodeListStore.isLoading;
  public readonly error = this.favouriteEpisodeListStore.error;

  ngOnInit(): void {
    this.favouriteEpisodeListStore.favouriteEpisodesRequested();
  }
}
