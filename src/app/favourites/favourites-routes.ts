import { Routes } from "@angular/router";
import { APP_ROUTES } from "@shared/constants";
import { FavouritesPageComponent } from "./features/favourites/favourites.page.component";

export const favouritesRoutes: Routes = [
  {
    path: "",
    component: FavouritesPageComponent,
    children: [
      {
        path: APP_ROUTES.CHARACTERS,
        loadComponent: () =>
          import(
            "./features/favourites/components/favourite-character-list/favourite-character-list.component"
          ).then((m) => m.FavouriteCharacterListComponent),
      },
      {
        path: APP_ROUTES.EPISODES,
        loadComponent: () =>
          import(
            "./features/favourites/components/favourite-episode-list/favourite-episode-list.component"
          ).then((m) => m.FavouriteEpisodeListComponent),
      },
      {
        path: APP_ROUTES.LOCATIONS,
        loadComponent: () =>
          import(
            "./features/favourites/components/favourite-location-list/favourite-location-list.component"
          ).then((m) => m.FavouriteLocationListComponent),
      },
      {
        path: "",
        redirectTo: APP_ROUTES.CHARACTERS,
        pathMatch: "full",
      },
    ],
  },
];
