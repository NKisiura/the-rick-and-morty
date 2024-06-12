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

@Component({
  selector: "characters-filter",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./characters-filter.component.html",
  styleUrl: "./characters-filter.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersFilterComponent {
  public characterStatuses = signal(values(CharacterStatus)).asReadonly();
  public characterGenders = signal(values(CharacterGender)).asReadonly();

  @Input({ required: true }) public filter: CharactersFilter = {};
  @Input() public isDisabled = false;

  public filterChange = output<CharactersFilter>();

  public handleFilterChange(
    prop: keyof CharactersFilter,
    value: unknown,
  ): void {
    this.filterChange.emit({ ...this.filter, [prop]: value || null });
  }

  public handleFilterChangeWithDebounce = debounce(
    (prop: keyof CharactersFilter, value: unknown) => {
      this.handleFilterChange(prop, value);
    },
    300,
  );

  public clearFilter(): void {
    this.filterChange.emit({});
  }
}
