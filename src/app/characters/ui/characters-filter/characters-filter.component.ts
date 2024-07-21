import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
  output,
} from "@angular/core";
import {
  CharactersFilter,
  CharacterStatus,
  CharacterGender,
} from "@characters/types";
import { values } from "lodash";
import { FormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";

@Component({
  selector: "characters-filter",
  standalone: true,
  imports: [FormsModule, NgSelectModule],
  templateUrl: "./characters-filter.component.html",
  styleUrl: "./characters-filter.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersFilterComponent implements OnInit {
  public readonly characterStatuses = values(CharacterStatus);
  public readonly characterGenders = values(CharacterGender);

  public initialFilter = input<CharactersFilter>({});
  public filterChange = output<CharactersFilter>();

  public filter: CharactersFilter = {};

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
