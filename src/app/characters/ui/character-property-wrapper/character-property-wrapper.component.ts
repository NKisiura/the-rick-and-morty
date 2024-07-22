import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
  selector: "character-property-wrapper",
  standalone: true,
  imports: [],
  templateUrl: "./character-property-wrapper.component.html",
  styleUrl: "./character-property-wrapper.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterPropertyWrapperComponent {
  public propertyName = input.required<string>();
}
