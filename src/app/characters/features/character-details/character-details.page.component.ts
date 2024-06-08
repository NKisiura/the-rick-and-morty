import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
  selector: "app-character-details",
  standalone: true,
  imports: [],
  templateUrl: "./character-details.page.component.html",
  styleUrl: "./character-details.page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterDetailsPageComponent {
  public characterId = input.required<number | string, number>({
    transform: (value: number | string) => +value,
  });
}
