import { CharacterStatus } from "./character-status";
import { CharacterGender } from "./character-gender";

export interface Character {
  readonly id: number;
  readonly name: string;
  readonly status: CharacterStatus;
  readonly species: string;
  readonly type: string;
  readonly gender: CharacterGender;
  readonly origin: LocationDTO;
  readonly location: LocationDTO;
  readonly image: string;
  readonly episode: string[];
  readonly url: string;
  readonly created: string;
}

interface LocationDTO {
  readonly name: string;
  readonly url: string;
}
