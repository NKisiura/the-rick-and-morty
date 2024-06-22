import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { EPISODES_URL } from "@shared/constants";
import { Episode, EpisodeDTO, EpisodesFilter } from "@episodes/types";
import { PaginatedResponseDTO } from "@shared/types/http";
import { createHttpParamsByFilter } from "@shared/utils/http";
import { map } from "rxjs";
import { EpisodeAdapter } from "@episodes/adapters";

@Injectable({ providedIn: "root" })
export class EpisodesApiService {
  private httpClient = inject(HttpClient);
  private URL = EPISODES_URL;

  public getEpisodeById(episodeId: number) {
    return this.httpClient
      .get<EpisodeDTO>(`${this.URL}/${episodeId}`)
      .pipe(map(EpisodeAdapter.fromDTO));
  }

  public getEpisodesByIdList(episodeIdList: number[]) {
    return this.httpClient
      .get<EpisodeDTO | EpisodeDTO[]>(`${this.URL}/${episodeIdList.join(",")}`)
      .pipe(
        map((response) => {
          return Array.isArray(response)
            ? EpisodeAdapter.fromDTOList(response)
            : [EpisodeAdapter.fromDTO(response)];
        }),
      );
  }

  public getEpisodesByFilter(episodesFilter: EpisodesFilter) {
    return this.httpClient
      .get<PaginatedResponseDTO<EpisodeDTO>>(this.URL, {
        params: createHttpParamsByFilter(episodesFilter),
      })
      .pipe(
        map((response) => {
          return {
            ...response,
            results: EpisodeAdapter.fromDTOList(response.results),
          } as PaginatedResponseDTO<Episode>;
        }),
      );
  }
}
