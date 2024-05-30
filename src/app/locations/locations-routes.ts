import { Route } from "@angular/router";

export const locationsRoutes: Route[] = [
  {
    path: "",
    loadComponent: () =>
      import("./features/location-list/location-list.page.component").then(
        (m) => m.LocationListPageComponent,
      ),
  },
  {
    path: ":locationId",
    loadComponent: () =>
      import(
        "./features/location-details/location-details.page.component"
      ).then((m) => m.LocationDetailsPageComponent),
  },
];
