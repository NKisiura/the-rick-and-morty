import { Routes } from "@angular/router";

export const charactersRoutes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./features/character-list/character-list.page.component").then(
        (m) => m.CharacterListPageComponent,
      ),
  },
  {
    path: ":characterId",
    loadComponent: () =>
      import(
        "./features/character-details/character-details.page.component"
      ).then((m) => m.CharacterDetailsPageComponent),
  },
];
