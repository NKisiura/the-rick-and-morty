import { LocationLite, LocationLiteDTO } from "@locations/types";
import { extractEntityIdFromUrl } from "@shared/utils/url";

export class LocationLiteAdapter {
  public static fromDTO(dto: LocationLiteDTO): LocationLite {
    return {
      id: dto.url ? extractEntityIdFromUrl(dto.url) : null,
      name: dto.name,
    };
  }
}
