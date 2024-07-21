import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from "@angular/core";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { PaginationButtonComponent } from "./pagination-button/pagination-button.component";

@Component({
  selector: "pagination",
  standalone: true,
  imports: [FaIconComponent, PaginationButtonComponent],
  templateUrl: "./pagination.component.html",
  styleUrl: "./pagination.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  public firstPageIcon = faAngleDoubleLeft;
  public prevPageIcon = faChevronLeft;
  public nextPageIcon = faChevronRight;
  public lastPageIcon = faAngleDoubleRight;

  public page = input.required<number>();
  public pagesCount = input.required<number>();
  public isDisabled = input<boolean>(false);

  public pageChange = output<number>();

  public goToPage(pageNumber: number): void {
    this.pageChange.emit(pageNumber);
  }
}
