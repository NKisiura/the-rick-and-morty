import { ChangeDetectionStrategy, Component } from "@angular/core";
import {
  IsActiveMatchOptions,
  RouterLink,
  RouterLinkActive,
} from "@angular/router";
import { APP_ROUTES } from "@shared/constants";
import { NgOptimizedImage } from "@angular/common";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgOptimizedImage, FaIconComponent],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public githubLink = "https://github.com/NKisiura";

  public githubIcon = faGithub;
  public barsIcon = faBars;

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
