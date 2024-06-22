import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CHARACTERS_URL } from "@shared/constants";
import { Character, CharacterDTO, CharactersFilter } from "@characters/types";
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
      .get<CharacterDTO>(`${this.URL}/${characterId}`)
      .pipe(map(CharacterAdapter.fromDTO));
  }

  public getCharactersByIdList(characterIdList: number[]) {
    return this.httpClient
      .get<
        CharacterDTO | CharacterDTO[]
      >(`${this.URL}/${characterIdList.join(",")}`)
      .pipe(
        map((response) => {
          return Array.isArray(response)
            ? CharacterAdapter.fromDTOList(response)
            : [CharacterAdapter.fromDTO(response)];
        }),
      );
  }

  public getCharactersByFilter(charactersFilter: CharactersFilter) {
    return this.httpClient
      .get<PaginatedResponseDTO<CharacterDTO>>(this.URL, {
        params: createHttpParamsByFilter(charactersFilter),
      })
      .pipe(
        map((response) => {
          return {
            ...response,
            results: CharacterAdapter.fromDTOList(response.results),
          } as PaginatedResponseDTO<Character>;
        }),
      );
  }
}
