import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
  output,
} from "@angular/core";
import { LocationsFilter } from "@locations/types";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "locations-filter",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./locations-filter.component.html",
  styleUrl: "./locations-filter.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationsFilterComponent implements OnInit {
  public initialFilter = input<LocationsFilter>({});
  public filterChange = output<LocationsFilter>();

  public filter: LocationsFilter = {};

  ngOnInit(): void {
    this.filter = this.initialFilter();
  }

  public handleFilterChange(): void {
    this.filterChange.emit({ ...this.filter });
  }

  public clearFilter(): void {
    this.filter = {};
    this.handleFilterChange();
  }
}
