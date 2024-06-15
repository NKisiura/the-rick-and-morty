import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CHARACTERS_URL } from "@shared/constants";
import {
  Character,
  CharacterResponse,
  CharactersFilter,
} from "@characters/types";
import { PaginatedResponseDTO } from "@shared/types/http";
import { createHttpParamsByFilter } from "@shared/utils/http";
import { map } from "rxjs";
import { CharacterAdapter } from "@characters/adapters";

@Injectable({ providedIn: "root" })
export class CharactersApiService {
  private httpClient = inject(HttpClient);
  private URL = CHARACTERS_URL;

  public getCharacterById(characterId: number) {
    return this.httpClient
      .get<CharacterResponse>(`${this.URL}/${characterId}`)
      .pipe(map(CharacterAdapter.adapt));
  }

  public getCharactersByIdList(characterIdList: number[]) {
    return this.httpClient
      .get<CharacterResponse[]>(`${this.URL}/${characterIdList.join(",")}`)
      .pipe(map(CharacterAdapter.adaptArray));
  }

  public getCharactersByFilter(charactersFilter: CharactersFilter) {
    return this.httpClient
      .get<PaginatedResponseDTO<CharacterResponse>>(this.URL, {
        params: createHttpParamsByFilter(charactersFilter),
      })
      .pipe(
        map((response) => {
          return {
            ...response,
            results: response.results.map(CharacterAdapter.adapt),
          } as PaginatedResponseDTO<Character>;
        }),
      );
  }
}
