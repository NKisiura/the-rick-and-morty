import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from "@angular/core";
import { CharacterListStore } from "./character-list.store";
import { CharactersFilter } from "@characters/types";
import {
  CharacterCardComponent,
  CharactersFilterComponent,
} from "@characters/ui";
import {
  ErrorMessageComponent,
  LoaderComponent,
  LoadMoreButtonComponent,
  PaginationComponent,
} from "@shared/components";

@Component({
  selector: "app-character-list",
  standalone: true,
  imports: [
    CharacterCardComponent,
    CharactersFilterComponent,
    PaginationComponent,
    LoadMoreButtonComponent,
    LoaderComponent,
    ErrorMessageComponent,
  ],
  providers: [CharacterListStore],
  templateUrl: "./character-list.page.component.html",
  styleUrl: "./character-list.page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterListPageComponent implements OnInit {
  private readonly characterListStore = inject(CharacterListStore);

  public characters = this.characterListStore.characters;
  public charactersLoading = this.characterListStore.charactersLoading;
  public hasLoadedCharacters = this.characterListStore.hasLoadedCharacters;
  public error = this.characterListStore.error;

  public initialFilter = this.characterListStore.initialFilter;

  public currentPage = this.characterListStore.currentPage;
  public pagesCount = this.characterListStore.pagesCount;
  public isLastPage = this.characterListStore.isLastPage;

  ngOnInit(): void {
    this.characterListStore.initialCharactersRequested();
  }

  public handleShowMore(): void {
    this.characterListStore.nextPageRequested();
  }

  public handlePageChange(pageNumber: number): void {
    this.characterListStore.pageChanged(pageNumber);
  }

  public handleFilterChange(filter: CharactersFilter): void {
    this.characterListStore.filterChanged(filter);
  }
}
