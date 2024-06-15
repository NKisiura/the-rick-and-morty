import { Location, LocationResponse } from "@locations/types";
import { extractEntityIdFromUrl } from "@shared/utils/url";

export class LocationAdapter {
  public static adapt(response: LocationResponse): Location {
    return {
      id: response.id,
      name: response.name,
      type: response.type,
      dimension: response.dimension,
      residentIds: response.residents.map(extractEntityIdFromUrl),
      url: response.url,
      created: new Date(response.created),
    };
  }

  public static adaptArray(response: LocationResponse[]): Location[] {
    return response.map(LocationAdapter.adapt);
  }
}
