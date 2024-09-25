import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from "@angular/core";
import { ErrorMessageComponent, LoaderComponent } from "@shared/components";
import { LocationCardComponent } from "@locations/ui";
import { FavouriteLocationListStore } from "./favourite-location-list.store";

@Component({
  standalone: true,
  imports: [LoaderComponent, ErrorMessageComponent, LocationCardComponent],
  providers: [FavouriteLocationListStore],
  templateUrl: "./favourite-location-list.component.html",
  styleUrl: "./favourite-location-list.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavouriteLocationListComponent implements OnInit {
  private readonly favouriteLocationListStore = inject(
    FavouriteLocationListStore,
  );

  public readonly favouriteLocations =
    this.favouriteLocationListStore.favouriteLocations;
  public readonly hasFavouriteLocations =
    this.favouriteLocationListStore.hasFavouriteLocations;
  public readonly isLoading = this.favouriteLocationListStore.isLoading;
  public readonly error = this.favouriteLocationListStore.error;

  ngOnInit(): void {
    this.favouriteLocationListStore.favouriteLocationsRequested();
  }
}
