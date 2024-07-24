import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  OnInit,
} from "@angular/core";
import { DatePipe } from "@angular/common";
import { EpisodeDetailsStore } from "@episodes/features/episode-details/episode-details.store";
import { ErrorMessageComponent, LoaderComponent } from "@shared/components";
import { CharacterCardComponent } from "@characters/ui";

@Component({
  selector: "app-episode-details",
  standalone: true,
  imports: [
    DatePipe,
    LoaderComponent,
    ErrorMessageComponent,
    CharacterCardComponent,
  ],
  providers: [EpisodeDetailsStore],
  templateUrl: "./episode-details.page.component.html",
  styleUrl: "./episode-details.page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpisodeDetailsPageComponent implements OnInit {
  private readonly episodeDetailsStore = inject(EpisodeDetailsStore);

  public dateFormat = "MMMM d, y";

  public episodeId = input.required<number, string | number>({
    transform: (value: string | number) => +value,
  });

  public episode = this.episodeDetailsStore.episode;
  public episodeLoading = this.episodeDetailsStore.episodeLoading;
  public episodeError = this.episodeDetailsStore.episodeError;

  public episodeCharacters = this.episodeDetailsStore.characters;
  public episodeCharactersLoading = this.episodeDetailsStore.charactersLoading;
  public episodeCharactersError = this.episodeDetailsStore.charactersError;

  ngOnInit(): void {
    this.episodeDetailsStore.episodeWithCharactersByIdRequested(
      this.episodeId(),
    );
  }
}
