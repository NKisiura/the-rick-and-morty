import { LocationLite, LocationLiteResponse } from "@locations/types";
import { extractEntityIdFromUrl } from "@shared/utils/url";

export class LocationLiteAdapter {
  public static adapt(response: LocationLiteResponse): LocationLite {
    return {
      id: extractEntityIdFromUrl(response.url),
      name: response.name,
    };
  }
}