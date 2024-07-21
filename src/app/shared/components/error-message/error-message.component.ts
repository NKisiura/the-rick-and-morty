import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: "error-message",
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: "./error-message.component.html",
  styleUrl: "./error-message.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorMessageComponent {
  public errorMessage = input.required<string>();
}
