import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  OnInit,
} from "@angular/core";
import { LocationDetailsStore } from "@locations/features/location-details/location-details.store";
import { CharacterCardComponent } from "@characters/ui";
import { ErrorMessageComponent, LoaderComponent } from "@shared/components";
import { EntityFavouriteToggleComponent } from "@favourites/features";
import { Title } from "@angular/platform-browser";
import { takeUntilDestroyed, toObservable } from "@angular/core/rxjs-interop";
import { filter, tap } from "rxjs";
import { EntityType } from "@shared/types/entity";

@Component({
  standalone: true,
  imports: [
    CharacterCardComponent,
    ErrorMessageComponent,
    LoaderComponent,
    EntityFavouriteToggleComponent,
  ],
  providers: [LocationDetailsStore],
  templateUrl: "./location-details.page.component.html",
  styleUrl: "./location-details.page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationDetailsPageComponent implements OnInit {
  private readonly locationDetailsStore = inject(LocationDetailsStore);
  private readonly title = inject(Title);

  public EntityType = EntityType;

  public locationId = input.required<number, string | number>({
    transform: (value: string | number) => +value,
  });

  public location = this.locationDetailsStore.location;
  public locationLoading = this.locationDetailsStore.locationLoading;
  public locationError = this.locationDetailsStore.locationError;

  public locationCharacters = this.locationDetailsStore.characters;
  public locationCharactersLoading =
    this.locationDetailsStore.charactersLoading;
  public locationCharactersError = this.locationDetailsStore.charactersError;

  constructor() {
    toObservable(this.location)
      .pipe(
        filter(Boolean),
        tap(({ name }) => {
          this.title.setTitle(`${name} - Location`);
        }),
        takeUntilDestroyed(),
      )
      .subscribe();
  }

  ngOnInit(): void {
    this.locationDetailsStore.locationWithCharactersByIdRequested(
      this.locationId(),
    );
  }
}
