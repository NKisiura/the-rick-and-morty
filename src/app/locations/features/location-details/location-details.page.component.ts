import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  input,
  OnInit,
} from "@angular/core";
import { LocationDetailsStore } from "@locations/features/location-details/location-details.store";
import { CharacterCardComponent } from "@characters/ui";
import {
  EntityFavouriteToggleComponent,
  ErrorMessageComponent,
  LoaderComponent,
} from "@shared/components";
import { Title } from "@angular/platform-browser";
import { takeUntilDestroyed, toObservable } from "@angular/core/rxjs-interop";
import { filter } from "rxjs";
import { EntityType } from "@shared/types/entity";

@Component({
  selector: "app-location-details",
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
  private readonly destroyRef = inject(DestroyRef);
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
      .pipe(filter(Boolean), takeUntilDestroyed(this.destroyRef))
      .subscribe(({ name }) => {
        this.title.setTitle(`${name} - Location`);
      });
  }

  ngOnInit(): void {
    this.locationDetailsStore.locationWithCharactersByIdRequested(
      this.locationId(),
    );
  }
}
