import { Episode, EpisodeResponse } from "@episodes/types";
import { extractEntityIdFromUrl } from "@shared/utils/url";

export class EpisodeAdapter {
  public static adapt(response: EpisodeResponse): Episode {
    return {
      id: response.id,
      name: response.name,
      airDate: new Date(response.air_date),
      episode: response.episode,
      characterIds: response.characters.map(extractEntityIdFromUrl),
      url: response.url,
      created: new Date(response.created),
    };
  }

  public static adaptArray(response: EpisodeResponse[]): Episode[] {
    return response.map(EpisodeAdapter.adapt);
  }
}
