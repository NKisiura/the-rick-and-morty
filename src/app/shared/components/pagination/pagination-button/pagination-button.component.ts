import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { NgClass } from "@angular/common";

@Component({
  selector: "pagination-button",
  standalone: true,
  imports: [NgClass],
  templateUrl: "./pagination-button.component.html",
  styleUrl: "./pagination-button.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationButtonComponent {
  public isControlButton = input<boolean>(false);

  public disabled = input<boolean>(false);
  public active = input<boolean>(false);
}
