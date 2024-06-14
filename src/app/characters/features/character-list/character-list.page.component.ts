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
import { PaginationComponent } from "@shared/components";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-character-list",
  standalone: true,
  imports: [
    CharacterCardComponent,
    CharactersFilterComponent,
    PaginationComponent,
  ],
  providers: [CharacterListStore],
  templateUrl: "./character-list.page.component.html",
  styleUrl: "./character-list.page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterListPageComponent implements OnInit {
  private readonly characterListStore = inject(CharacterListStore);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);

  public characters = this.characterListStore.characters;
  public charactersLoading = this.characterListStore.charactersLoading;
  public error = this.characterListStore.error;

  public charactersFilter = this.characterListStore.charactersFilter;
  public currentPage = this.characterListStore.currentPage;
  public pagesCount = this.characterListStore.pagesCount;

  ngOnInit(): void {
    this.initCharacters();
  }

  private initCharacters(): void {
    const { page, ...params } = this.activatedRoute.snapshot.queryParams;
    this.updateCharacters({ ...params, page: +page || 1 });
  }

  public handlePageChange(pageNumber: number): void {
    this.updateCharacters({ ...this.charactersFilter(), page: pageNumber });
  }

  public handleFilterChange(filter: CharactersFilter): void {
    this.updateCharacters({ ...filter, page: 1 });
  }

  private updateCharacters(filter: CharactersFilter): void {
    this.characterListStore.setFilter(filter);
    this.characterListStore.getCharactersByFilter(this.charactersFilter());
    this.router.navigate([], { queryParams: this.charactersFilter() });
  }
}
