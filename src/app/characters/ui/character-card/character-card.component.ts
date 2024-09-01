import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { Character, CharacterStatus } from "@characters/types";
import { RouterLink } from "@angular/router";
import { NgClass, NgOptimizedImage } from "@angular/common";
import { APP_ROUTES } from "@shared/constants";
import { EntityFavouriteToggleComponent } from "@favourites/features";
import { EntityType } from "@shared/types/entity";

@Component({
  selector: "character-card",
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage,
    NgClass,
    EntityFavouriteToggleComponent,
  ],
  templateUrl: "./character-card.component.html",
  styleUrl: "./character-card.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterCardComponent {
  public APP_ROUTES = APP_ROUTES;
  public EntityType = EntityType;
  public characterStatus = CharacterStatus;

  public character = input.required<Character>();
}
