import { Character, CharacterResponse } from "@characters/types";
import { LocationLiteAdapter } from "@locations/adapters";
import { extractEntityIdFromUrl } from "@shared/utils/url";

export class CharacterAdapter {
  public static adapt(response: CharacterResponse): Character {
    return {
      id: response.id,
      name: response.name,
      status: response.status,
      species: response.species,
      type: response.type,
      gender: response.gender,
      origin: LocationLiteAdapter.adapt(response.origin),
      location: LocationLiteAdapter.adapt(response.location),
      image: response.image,
      episodeIds: response.episode.map(extractEntityIdFromUrl),
      url: response.url,
      created: new Date(response.created),
    };
  }

  public static adaptArray(response: CharacterResponse[]): Character[] {
    return response.map(CharacterAdapter.adapt);
  }
}
