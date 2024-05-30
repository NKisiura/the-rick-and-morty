import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "home",
    loadChildren: () => import("./home/home-routes").then((m) => m.homeRoutes),
  },
  {
    path: "characters",
    loadChildren: () =>
      import("./characters/characters-routes").then((m) => m.charactersRoutes),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: "home",
  },
];
