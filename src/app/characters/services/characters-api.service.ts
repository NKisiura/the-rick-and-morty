import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CHARACTERS_URL } from "@shared/constants";
import { Character } from "@characters/types";
import { PaginatedResponseDTO } from "@shared/types";

@Injectable({
  providedIn: "root",
})
export class CharactersApiService {
  private URL = CHARACTERS_URL;
  private httpClient = inject(HttpClient);

  public getSingleCharacter(characterId: number) {
    return this.httpClient.get<Character>(`${this.URL}/${characterId}`);
  }

  public getAllCharacters() {
    return this.httpClient.get<PaginatedResponseDTO<Character>>(this.URL);
  }
}
