import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from "@angular/core";
import { LocationListStore } from "@locations/features/location-list/location-list.store";
import { LocationCardComponent, LocationsFilterComponent } from "@locations/ui";
import { LocationsFilter } from "@locations/types";
import {
  ErrorMessageComponent,
  LoaderComponent,
  LoadMoreButtonComponent,
  PaginationComponent,
} from "@shared/components";

@Component({
  selector: "app-location-list",
  standalone: true,
  imports: [
    LocationCardComponent,
    LocationsFilterComponent,
    PaginationComponent,
    LoadMoreButtonComponent,
    ErrorMessageComponent,
    LoaderComponent,
  ],
  providers: [LocationListStore],
  templateUrl: "./location-list.page.component.html",
  styleUrl: "./location-list.page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationListPageComponent implements OnInit {
  private readonly locationListStore = inject(LocationListStore);

  public locations = this.locationListStore.locations;
  public locationsLoading = this.locationListStore.locationsLoading;
  public hasLoadedLocations = this.locationListStore.hasLoadedLocations;
  public error = this.locationListStore.error;

  public initialFilter = this.locationListStore.initialFilter;

  public currentPage = this.locationListStore.currentPage;
  public pagesCount = this.locationListStore.pagesCount;
  public isLastPage = this.locationListStore.isLastPage;

  ngOnInit(): void {
    this.handleFilterChange(this.initialFilter());
  }

  public handleShowMore(): void {
    this.locationListStore.nextPageRequested();
  }

  public handlePageChange(pageNumber: number): void {
    this.locationListStore.pageChanged(pageNumber);
  }

  public handleFilterChange(filter: LocationsFilter): void {
    this.locationListStore.filterUpdated(filter);
  }
}
