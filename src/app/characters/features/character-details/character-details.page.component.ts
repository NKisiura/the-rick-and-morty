import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  OnInit,
} from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import { RouterLink } from "@angular/router";
import { APP_ROUTES } from "@shared/constants";
import { CharacterDetailsStore } from "./character-details.store";
import { ErrorMessageComponent, LoaderComponent } from "@shared/components";
import { CharacterPropertyWrapperComponent } from "@characters/ui";
import { EpisodeCardComponent } from "@episodes/ui";
import { EntityFavouriteToggleComponent } from "@favourites/features";
import { Title } from "@angular/platform-browser";
import { takeUntilDestroyed, toObservable } from "@angular/core/rxjs-interop";
import { filter, tap } from "rxjs";
import { EntityType } from "@shared/types/entity";

@Component({
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    LoaderComponent,
    ErrorMessageComponent,
    CharacterPropertyWrapperComponent,
    EpisodeCardComponent,
    EntityFavouriteToggleComponent,
  ],
  providers: [CharacterDetailsStore],
  templateUrl: "./character-details.page.component.html",
  styleUrl: "./character-details.page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterDetailsPageComponent implements OnInit {
  private readonly characterDetailsStore = inject(CharacterDetailsStore);
  private readonly title = inject(Title);

  public APP_ROUTES = APP_ROUTES;
  public EntityType = EntityType;

  public characterId = input.required<number, string | number>({
    transform: (value: string | number) => +value,
  });

  public character = this.characterDetailsStore.character;
  public characterLoading = this.characterDetailsStore.characterLoading;
  public characterError = this.characterDetailsStore.characterError;

  public characterEpisodes = this.characterDetailsStore.episodes;
  public characterEpisodesLoading = this.characterDetailsStore.episodesLoading;
  public characterEpisodesError = this.characterDetailsStore.episodesError;

  constructor() {
    toObservable(this.character)
      .pipe(
        filter(Boolean),
        tap(({ name }) => {
          this.title.setTitle(`${name} - Character`);
        }),
        takeUntilDestroyed(),
      )
      .subscribe();
  }

  ngOnInit(): void {
    this.characterDetailsStore.characterWithEpisodesByIdRequested(
      this.characterId(),
    );
  }
}
