import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from "@angular/core";
import { NgClass, NgTemplateOutlet } from "@angular/common";

@Component({
  selector: "pagination",
  standalone: true,
  imports: [NgTemplateOutlet, NgClass],
  templateUrl: "./pagination.component.html",
  styleUrl: "./pagination.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  public page = input.required<number>();
  public pagesCount = input.required<number>();
  public isDisabled = input<boolean>(false);

  public pageChange = output<number>();

  public goToPage(pageNumber: number): void {
    this.pageChange.emit(pageNumber);
  }
}
