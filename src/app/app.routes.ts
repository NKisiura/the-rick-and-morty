import { Routes } from "@angular/router";
import { APP_ROUTES } from "@shared/constants";

export const routes: Routes = [
  {
    path: APP_ROUTES.HOME,
    title: "Home",
    loadChildren: () => import("./home/home-routes").then((m) => m.homeRoutes),
  },
  {
    path: APP_ROUTES.CHARACTERS,
    title: "Characters",
    loadChildren: () =>
      import("./characters/characters-routes").then((m) => m.charactersRoutes),
  },
  {
    path: APP_ROUTES.EPISODES,
    title: "Episodes",
    loadChildren: () =>
      import("./episodes/episodes-routes").then((m) => m.episodesRoutes),
  },
  {
    path: APP_ROUTES.LOCATIONS,
    title: "Locations",
    loadChildren: () =>
      import("./locations/locations-routes").then((m) => m.locationsRoutes),
  },
  {
    path: APP_ROUTES.FAVOURITES,
    title: "Favourites",
    loadChildren: () =>
      import("./favourites/favourites-routes").then((m) => m.favouritesRoutes),
  },
  {
    path: "",
    redirectTo: APP_ROUTES.HOME,
    pathMatch: "full",
  },
  {
    path: "**",
    loadComponent: () =>
      import("@core/ui/page-not-found/page-not-found.component").then(
        (m) => m.PageNotFoundComponent,
      ),
  },
];
