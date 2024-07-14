import {
  ChangeDetectionStrategy,
  Component,
  Input,
  output,
  signal,
} from "@angular/core";
import {
  CharactersFilter,
  CharacterStatus,
  CharacterGender,
} from "@characters/types";
import { debounce, values } from "lodash";
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
export class CharactersFilterComponent {
  public characterStatuses = signal(values(CharacterStatus)).asReadonly();
  public characterGenders = signal(values(CharacterGender)).asReadonly();

  @Input() public filter: CharactersFilter = {};
  public filterChange = output<CharactersFilter>();

  public handleFilterChange(): void {
    this.filterChange.emit({ ...this.filter });
  }

  public handleFilterChangeWithDebounce = debounce(() => {
    this.handleFilterChange();
  }, 300);

  public clearFilter(): void {
    this.filter = {};
    this.handleFilterChange();
  }
}
