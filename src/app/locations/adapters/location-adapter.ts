import { Location, LocationDTO } from "@locations/types";
import { extractEntityIdFromUrl } from "@shared/utils/url";

export class LocationAdapter {
  public static fromDTO(dto: LocationDTO): Location {
    return {
      id: dto.id,
      name: dto.name,
      type: dto.type,
      dimension: dto.dimension,
      residentIds: dto.residents.map(extractEntityIdFromUrl),
      url: dto.url,
      created: new Date(dto.created),
    };
  }

  public static fromDTOList(dtoList: LocationDTO[]): Location[] {
    return dtoList.map(LocationAdapter.fromDTO);
  }
}
