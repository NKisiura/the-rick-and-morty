import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
  output,
} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";
import { EpisodesFilter } from "@episodes/types";

@Component({
  selector: "episodes-filter",
  standalone: true,
  imports: [FormsModule, NgSelectModule],
  templateUrl: "./episodes-filter.component.html",
  styleUrl: "./episodes-filter.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpisodesFilterComponent implements OnInit {
  public seasons = ["S01", "S02", "S03", "S04", "S05"];

  public initialFilter = input<EpisodesFilter>({});
  public filterChange = output<EpisodesFilter>();

  public filter: EpisodesFilter = {};

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
