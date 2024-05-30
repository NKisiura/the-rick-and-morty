import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-character-list",
  standalone: true,
  imports: [],
  templateUrl: "./character-list.page.component.html",
  styleUrl: "./character-list.page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterListPageComponent {}
