import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { Character } from "@characters/types";
import { RouterLink } from "@angular/router";

@Component({
  selector: "character-card",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./character-card.component.html",
  styleUrl: "./character-card.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterCardComponent {
  public character = input.required<Character>();
}
