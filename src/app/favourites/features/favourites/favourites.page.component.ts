import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { APP_ROUTES } from "@shared/constants";

@Component({
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: "./favourites.page.component.html",
  styleUrl: "./favourites.page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavouritesPageComponent {
  public readonly APP_ROUTES = APP_ROUTES;
  public readonly tabs = [
    {
      route: APP_ROUTES.CHARACTERS,
      label: APP_ROUTES.CHARACTERS,
    },
    {
      route: APP_ROUTES.EPISODES,
      label: APP_ROUTES.EPISODES,
    },
    {
      route: APP_ROUTES.LOCATIONS,
      label: APP_ROUTES.LOCATIONS,
    },
  ];
}
