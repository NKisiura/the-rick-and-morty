import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CHARACTERS_URL } from "@shared/constants";
import { Character, CharactersFilter } from "@characters/types";
import { PaginatedResponseDTO } from "@shared/types/http";
import { createHttpParamsByFilter } from "@shared/utils/http";

@Injectable({
  providedIn: "root",
})
export class CharactersApiService {
  private URL = CHARACTERS_URL;
  private httpClient = inject(HttpClient);

  public getSingleCharacter(characterId: number) {
    return this.httpClient.get<Character>(`${this.URL}/${characterId}`);
  }

  public getAllCharacters(charactersFilter: CharactersFilter) {
    return this.httpClient.get<PaginatedResponseDTO<Character>>(this.URL, {
      params: createHttpParamsByFilter(charactersFilter),
    });
  }
}
