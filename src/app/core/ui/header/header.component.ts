import { ChangeDetectionStrategy, Component } from "@angular/core";
import {
  IsActiveMatchOptions,
  RouterLink,
  RouterLinkActive,
} from "@angular/router";
import { APP_ROUTES } from "@shared/constants";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgOptimizedImage],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public APP_ROUTES = APP_ROUTES;
  public headerLinks: APP_ROUTES[] = [
    this.APP_ROUTES.CHARACTERS,
    this.APP_ROUTES.EPISODES,
    this.APP_ROUTES.LOCATIONS,
  ];
  public routerLinkActiveOptions: IsActiveMatchOptions = {
    matrixParams: "ignored",
    queryParams: "ignored",
    paths: "exact",
    fragment: "ignored",
  };
}
