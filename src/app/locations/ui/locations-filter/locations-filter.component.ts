import {
  ChangeDetectionStrategy,
  Component,
  Input,
  output,
} from "@angular/core";
import { LocationsFilter } from "@locations/types";
import { debounce } from "lodash";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "locations-filter",
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: "./locations-filter.component.html",
  styleUrl: "./locations-filter.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationsFilterComponent {
  @Input({ required: true }) public filter: LocationsFilter = {};
  @Input() public isDisabled = false;

  public filterChange = output<LocationsFilter>();

  public handleFilterChange(prop: keyof LocationsFilter, value: unknown): void {
    this.filterChange.emit({ ...this.filter, [prop]: value || null });
  }

  public handleFilterChangeWithDebounce = debounce(
    (prop: keyof LocationsFilter, value: unknown) => {
      this.handleFilterChange(prop, value);
    },
    300,
  );

  public clearFilter(): void {
    this.filterChange.emit({});
  }
}
