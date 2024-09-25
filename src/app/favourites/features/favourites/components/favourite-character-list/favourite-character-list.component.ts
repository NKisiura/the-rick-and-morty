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

  public favouriteCharacters =
    this.favouriteCharacterListStore.favouriteCharacters;
  public hasFavouriteCharacters =
    this.favouriteCharacterListStore.hasFavouriteCharacters;
  public isLoading = this.favouriteCharacterListStore.isLoading;
  public error = this.favouriteCharacterListStore.error;

  ngOnInit(): void {
    this.favouriteCharacterListStore.favouriteCharactersRequested();
  }
}
