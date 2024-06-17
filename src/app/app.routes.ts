import { Routes } from "@angular/router";
import { APP_ROUTES } from "@shared/constants";

export const routes: Routes = [
  {
    path: APP_ROUTES.HOME,
    loadChildren: () => import("./home/home-routes").then((m) => m.homeRoutes),
  },
  {
    path: APP_ROUTES.CHARACTERS,
    loadChildren: () =>
      import("./characters/characters-routes").then((m) => m.charactersRoutes),
  },
  {
    path: APP_ROUTES.EPISODES,
    loadChildren: () =>
      import("./episodes/episodes-routes").then((m) => m.episodesRoutes),
  },
  {
    path: APP_ROUTES.LOCATIONS,
    loadChildren: () =>
      import("./locations/locations-routes").then((m) => m.locationsRoutes),
  },
  {
    path: "",
    redirectTo: APP_ROUTES.HOME,
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: APP_ROUTES.HOME,
  },
];
