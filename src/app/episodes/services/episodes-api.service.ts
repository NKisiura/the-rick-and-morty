import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { EPISODES_URL } from "@shared/constants";
import { Episode, EpisodesFilter } from "../types";
import { PaginatedResponseDTO } from "@shared/types/http";
import { createHttpParamsByFilter } from "@shared/utils/http";

@Injectable({ providedIn: "root" })
export class EpisodesApiService {
  private httpClient = inject(HttpClient);
  private URL = EPISODES_URL;

  public getEpisodeById(episodeId: number) {
    return this.httpClient.get<Episode>(`${this.URL}/${episodeId}`);
  }

  public getEpisodesByIdList(episodeIdList: number[]) {
    return this.httpClient.get<Episode[]>(
      `${this.URL}/${episodeIdList.join(",")}`,
    );
  }

  public getEpisodesByFilter(episodesFilter: EpisodesFilter) {
    return this.httpClient.get<PaginatedResponseDTO<Episode>>(this.URL, {
      params: createHttpParamsByFilter(episodesFilter),
    });
  }
}
