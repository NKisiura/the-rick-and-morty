import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  OnInit,
} from "@angular/core";
import { CharacterDetailsStore } from "./character-details.store";

@Component({
  selector: "app-character-details",
  standalone: true,
  imports: [],
  providers: [CharacterDetailsStore],
  templateUrl: "./character-details.page.component.html",
  styleUrl: "./character-details.page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterDetailsPageComponent implements OnInit {
  private readonly characterDetailsStore = inject(CharacterDetailsStore);

  public characterId = input.required<number, string | number>({
    transform: (value: string | number) => +value,
  });

  public character = this.characterDetailsStore.character;
  public characterLoading = this.characterDetailsStore.characterLoading;
  public characterError = this.characterDetailsStore.characterError;

  public characterEpisodes = this.characterDetailsStore.episodes;
  public characterEpisodesLoading = this.characterDetailsStore.episodesLoading;
  public characterEpisodesError = this.characterDetailsStore.episodesError;

  ngOnInit(): void {
    this.characterDetailsStore.getCharacterWithEpisodesById(this.characterId());
  }
}
