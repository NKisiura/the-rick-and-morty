import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { EPISODES_URL } from "@shared/constants";
import { Episode, EpisodeResponse, EpisodesFilter } from "@episodes/types";
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
      .get<EpisodeResponse>(`${this.URL}/${episodeId}`)
      .pipe(map(EpisodeAdapter.adapt));
  }

  public getEpisodesByIdList(episodeIdList: number[]) {
    return this.httpClient
      .get<EpisodeResponse[]>(`${this.URL}/${episodeIdList.join(",")}`)
      .pipe(map(EpisodeAdapter.adaptArray));
  }

  public getEpisodesByFilter(episodesFilter: EpisodesFilter) {
    return this.httpClient
      .get<PaginatedResponseDTO<EpisodeResponse>>(this.URL, {
        params: createHttpParamsByFilter(episodesFilter),
      })
      .pipe(
        map((response) => {
          return {
            ...response,
            results: response.results.map(EpisodeAdapter.adapt),
          } as PaginatedResponseDTO<Episode>;
        }),
      );
  }
}
