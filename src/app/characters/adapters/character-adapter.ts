import { Character, CharacterDTO } from "@characters/types";
import { LocationLiteAdapter } from "@locations/adapters";
import { extractEntityIdFromUrl } from "@shared/utils/url";

export class CharacterAdapter {
  public static fromDTO(dto: CharacterDTO): Character {
    return {
      id: dto.id,
      name: dto.name,
      status: dto.status,
      species: dto.species,
      type: dto.type,
      gender: dto.gender,
      origin: LocationLiteAdapter.fromDTO(dto.origin),
      location: LocationLiteAdapter.fromDTO(dto.location),
      image: dto.image,
      episodeIds: dto.episode.map(extractEntityIdFromUrl),
      url: dto.url,
      created: new Date(dto.created),
    };
  }

  public static fromDTOList(dtoList: CharacterDTO[]): Character[] {
    return dtoList.map(CharacterAdapter.fromDTO);
  }
}
