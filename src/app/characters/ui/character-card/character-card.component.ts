import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { Character, CharacterStatus } from "@characters/types";
import { RouterLink } from "@angular/router";
import { NgClass, NgOptimizedImage } from "@angular/common";
import { APP_ROUTES } from "@shared/constants";

@Component({
  selector: "character-card",
  standalone: true,
  imports: [RouterLink, NgOptimizedImage, NgClass],
  templateUrl: "./character-card.component.html",
  styleUrl: "./character-card.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterCardComponent {
  public APP_ROUTES = APP_ROUTES;
  public characterStatus = CharacterStatus;

  public character = input.required<Character>();
}
