import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from "@angular/core";
import { LocationListStore } from "@locations/features/location-list/location-list.store";

@Component({
  selector: "app-location-list",
  standalone: true,
  imports: [],
  providers: [LocationListStore],
  templateUrl: "./location-list.page.component.html",
  styleUrl: "./location-list.page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationListPageComponent implements OnInit {
  private readonly locationListStore = inject(LocationListStore);

  ngOnInit(): void {
    this.initLocations();
  }

  private initLocations(): void {
    this.locationListStore.getLocationByFilter({});
  }
}
