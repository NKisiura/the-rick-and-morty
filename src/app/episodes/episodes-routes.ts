import { Routes } from "@angular/router";

export const episodesRoutes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./features/episode-list/episode-list.page.component").then(
        (m) => m.EpisodeListPageComponent,
      ),
  },
  {
    path: ":episodeId",
    loadComponent: () =>
      import("./features/episode-details/episode-details.page.component").then(
        (m) => m.EpisodeDetailsPageComponent,
      ),
  },
];
