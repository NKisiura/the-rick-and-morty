import { Routes } from "@angular/router";

export enum AppRoutes {
  HOME = "home",
  CHARACTERS = "characters",
  EPISODES = "episodes",
  LOCATIONS = "locations",
}

export const routes: Routes = [
  {
    path: AppRoutes.HOME,
    loadChildren: () => import("./home/home-routes").then((m) => m.homeRoutes),
  },
  {
    path: AppRoutes.CHARACTERS,
    loadChildren: () =>
      import("./characters/characters-routes").then((m) => m.charactersRoutes),
  },
  {
    path: AppRoutes.EPISODES,
    loadChildren: () =>
      import("./episodes/episodes-routes").then((m) => m.episodesRoutes),
  },
  {
    path: AppRoutes.LOCATIONS,
    loadChildren: () =>
      import("./locations/locations-routes").then((m) => m.locationsRoutes),
  },
  {
    path: "",
    redirectTo: AppRoutes.HOME,
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: AppRoutes.HOME,
  },
];
