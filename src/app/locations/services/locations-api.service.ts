import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LOCATIONS_URL } from "@shared/constants";
import { Location, LocationDTO, LocationsFilter } from "@locations/types";
import { PaginatedResponseDTO } from "@shared/types/http";
import { createHttpParamsByFilter } from "@shared/utils/http";
import { map } from "rxjs";
import { LocationAdapter } from "@locations/adapters";

@Injectable({ providedIn: "root" })
export class LocationsApiService {
  private httpClient = inject(HttpClient);
  private URL = LOCATIONS_URL;

  public getLocationById(locationId: number) {
    return this.httpClient
      .get<LocationDTO>(`${this.URL}/${locationId}`)
      .pipe(map(LocationAdapter.fromDTO));
  }

  public getLocationsByFilter(locationsFilter: LocationsFilter) {
    return this.httpClient
      .get<PaginatedResponseDTO<LocationDTO>>(this.URL, {
        params: createHttpParamsByFilter(locationsFilter),
      })
      .pipe(
        map((response) => {
          return {
            ...response,
            results: LocationAdapter.fromDTOList(response.results),
          } as PaginatedResponseDTO<Location>;
        }),
      );
  }
}
