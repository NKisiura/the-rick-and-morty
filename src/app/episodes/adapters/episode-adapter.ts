import { Episode, EpisodeDTO } from "@episodes/types";
import { extractEntityIdFromUrl } from "@shared/utils/url";

export class EpisodeAdapter {
  public static fromDTO(dto: EpisodeDTO): Episode {
    return {
      id: dto.id,
      name: dto.name,
      airDate: new Date(dto.air_date),
      episode: dto.episode,
      characterIds: dto.characters.map(extractEntityIdFromUrl),
      url: dto.url,
      created: new Date(dto.created),
    };
  }

  public static fromDTOList(dtoList: EpisodeDTO[]): Episode[] {
    return dtoList.map(EpisodeAdapter.fromDTO);
  }
}
