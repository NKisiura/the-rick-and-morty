import { ChangeDetectionStrategy, Component } from "@angular/core";
import { GreetingSectionComponent, PageLinkCardComponent } from "@home/ui";
import { PageLinkCard } from "@home/types";
import { APP_ROUTES } from "@shared/constants";

@Component({
  standalone: true,
  imports: [GreetingSectionComponent, PageLinkCardComponent],
  templateUrl: "./home.page.component.html",
  styleUrl: "./home.page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  public pageLinkCards: PageLinkCard[] = [
    {
      cardName: "Characters",
      imageSrc: "assets/home-characters-card-bg.png",
      link: APP_ROUTES.CHARACTERS,
    },
    {
      cardName: "Episodes",
      imageSrc: "assets/home-episodes-card-bg.png",
      link: APP_ROUTES.EPISODES,
    },
    {
      cardName: "Locations",
      imageSrc: "assets/home-locations-card-bg.png",
      link: APP_ROUTES.LOCATIONS,
    },
    {
      cardName: "Favourites",
      imageSrc: "assets/home-favourites-card-bg.png",
      link: APP_ROUTES.FAVOURITES,
    },
  ];
}
