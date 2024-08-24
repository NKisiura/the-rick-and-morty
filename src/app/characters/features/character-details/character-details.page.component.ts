import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  input,
  OnInit,
} from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import { RouterLink } from "@angular/router";
import { APP_ROUTES } from "@shared/constants";
import { CharacterDetailsStore } from "./character-details.store";
import {
  EntityFavouriteToggleComponent,
  ErrorMessageComponent,
  LoaderComponent,
} from "@shared/components";
import { CharacterPropertyWrapperComponent } from "@characters/ui";
import { EpisodeCardComponent } from "@episodes/ui";
import { Title } from "@angular/platform-browser";
import { takeUntilDestroyed, toObservable } from "@angular/core/rxjs-interop";
import { filter } from "rxjs";
import { EntityType } from "@shared/types/entity";

@Component({
  selector: "app-character-details",
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
  private readonly destroyRef = inject(DestroyRef);
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
      .pipe(filter(Boolean), takeUntilDestroyed(this.destroyRef))
      .subscribe(({ name }) => {
        this.title.setTitle(`${name} - Character`);
      });
  }

  ngOnInit(): void {
    this.characterDetailsStore.characterWithEpisodesByIdRequested(
      this.characterId(),
    );
  }
}
