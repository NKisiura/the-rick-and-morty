import { CharacterStatus } from "@characters/types/character-status";
import { CharacterGender } from "@characters/types/character-gender";
import { LocationLite, LocationLiteDTO } from "@locations/types";

export interface Character {
  readonly id: number;
  readonly name: string;
  readonly status: CharacterStatus;
  readonly species: string;
  readonly type: string;
  readonly gender: CharacterGender;
  readonly origin: LocationLite;
  readonly location: LocationLite;
  readonly image: string;
  readonly episodeIds: number[];
  readonly url: string;
  readonly created: Date;
}

export interface CharacterDTO {
  readonly id: number;
  readonly name: string;
  readonly status: CharacterStatus;
  readonly species: string;
  readonly type: string;
  readonly gender: CharacterGender;
  readonly origin: LocationLiteDTO;
  readonly location: LocationLiteDTO;
  readonly image: string;
  readonly episode: string[];
  readonly url: string;
  readonly created: string;
}
