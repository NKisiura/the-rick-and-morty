import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from "@angular/core";
import { ErrorMessageComponent, LoaderComponent } from "@shared/components";
import { CharacterCardComponent } from "@characters/ui";
import { FavouriteCharacterListStore } from "./favourite-character-list.store";

@Component({
  standalone: true,
  imports: [CharacterCardComponent, LoaderComponent, ErrorMessageComponent],
  providers: [FavouriteCharacterListStore],
  templateUrl: "./favourite-character-list.component.html",
  styleUrl: "./favourite-character-list.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavouriteCharacterListComponent implements OnInit {
  private readonly favouriteCharacterListStore = inject(
    FavouriteCharacterListStore,
  );

  public readonly favouriteCharacters =
    this.favouriteCharacterListStore.favouriteCharacters;
  public readonly hasFavouriteCharacters =
    this.favouriteCharacterListStore.hasFavouriteCharacters;
  public readonly isLoading = this.favouriteCharacterListStore.isLoading;
  public readonly error = this.favouriteCharacterListStore.error;

  ngOnInit(): void {
    this.favouriteCharacterListStore.favouriteCharactersRequested();
  }
}
