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

@Component({
  selector: "app-location-details",
  standalone: true,
  imports: [CharacterCardComponent, ErrorMessageComponent, LoaderComponent],
  providers: [LocationDetailsStore],
  templateUrl: "./location-details.page.component.html",
  styleUrl: "./location-details.page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationDetailsPageComponent implements OnInit {
  private readonly locationDetailsStore = inject(LocationDetailsStore);

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

  ngOnInit(): void {
    this.locationDetailsStore.locationWithCharactersByIdRequested(
      this.locationId(),
    );
  }
}
