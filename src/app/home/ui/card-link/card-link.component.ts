import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "card-link",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./card-link.component.html",
  styleUrl: "./card-link.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardLinkComponent {
  public link = input.required<string>();
}
