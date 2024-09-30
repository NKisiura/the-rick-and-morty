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
import { EntityFavouriteToggleComponent } from "@favourites/features";
import { Title } from "@angular/platform-browser";
import { takeUntilDestroyed, toObservable } from "@angular/core/rxjs-interop";
import { filter, tap } from "rxjs";
import { EntityType } from "@shared/types/entity";

@Component({
  standalone: true,
  imports: [
    DatePipe,
    LoaderComponent,
    ErrorMessageComponent,
    CharacterCardComponent,
    EntityFavouriteToggleComponent,
  ],
  providers: [EpisodeDetailsStore],
  templateUrl: "./episode-details.page.component.html",
  styleUrl: "./episode-details.page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpisodeDetailsPageComponent implements OnInit {
  private readonly episodeDetailsStore = inject(EpisodeDetailsStore);
  private readonly title = inject(Title);

  public EntityType = EntityType;
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

  constructor() {
    toObservable(this.episode)
      .pipe(
        filter(Boolean),
        tap(({ name }) => {
          this.title.setTitle(`${name} - Episode`);
        }),
        takeUntilDestroyed(),
      )
      .subscribe();
  }

  ngOnInit(): void {
    this.episodeDetailsStore.episodeWithCharactersByIdRequested(
      this.episodeId(),
    );
  }
}
