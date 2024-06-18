import {
  ChangeDetectionStrategy,
  Component,
  Input,
  output,
  signal,
} from "@angular/core";
import { EpisodesFilter } from "@episodes/types";
import { debounce } from "lodash";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "episodes-filter",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./episodes-filter.component.html",
  styleUrl: "./episodes-filter.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpisodesFilterComponent {
  public seasons = signal(["S01", "S02", "S03", "S04", "S05"]).asReadonly();

  @Input({ required: true }) public filter: EpisodesFilter = {};
  @Input() public isDisabled = false;

  public filterChange = output<EpisodesFilter>();

  public handleFilterChange(prop: keyof EpisodesFilter, value: unknown): void {
    this.filterChange.emit({ ...this.filter, [prop]: value || null });
  }

  public handleFilterChangeWithDebounce = debounce(
    (prop: keyof EpisodesFilter, value: unknown) => {
      this.handleFilterChange(prop, value);
    },
    300,
  );

  public clearFilter(): void {
    this.filterChange.emit({});
  }
}
