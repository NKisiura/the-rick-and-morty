import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from "@angular/core";
import { LocationListStore } from "@locations/features/location-list/location-list.store";
import { ActivatedRoute, Router } from "@angular/router";
import { LocationCardComponent, LocationsFilterComponent } from "@locations/ui";
import { LocationsFilter } from "@locations/types";
import { PaginationComponent } from "@shared/components";

@Component({
  selector: "app-location-list",
  standalone: true,
  imports: [
    LocationCardComponent,
    LocationsFilterComponent,
    PaginationComponent,
  ],
  providers: [LocationListStore],
  templateUrl: "./location-list.page.component.html",
  styleUrl: "./location-list.page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationListPageComponent implements OnInit {
  private readonly locationListStore = inject(LocationListStore);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);

  public locations = this.locationListStore.locations;
  public locationsLoading = this.locationListStore.locationsLoading;
  public error = this.locationListStore.error;

  public locationsFilter = this.locationListStore.locationsFilter;
  public currentPage = this.locationListStore.currentPage;
  public pagesCount = this.locationListStore.pagesCount;

  ngOnInit(): void {
    this.initLocations();
  }

  private initLocations(): void {
    const { page, ...params } = this.activatedRoute.snapshot.queryParams;
    this.updateCharacters({ ...params, page: +page || 1 });
  }

  public handlePageChange(pageNumber: number): void {
    this.updateCharacters({ ...this.locationsFilter(), page: pageNumber });
  }

  public handleFilterChange(filter: LocationsFilter): void {
    this.updateCharacters({ ...filter, page: 1 });
  }

  private updateCharacters(filter: LocationsFilter): void {
    this.locationListStore.setFilter(filter);
    this.locationListStore.getLocationByFilter(this.locationsFilter());
    this.router.navigate([], { queryParams: this.locationsFilter() });
  }
}
