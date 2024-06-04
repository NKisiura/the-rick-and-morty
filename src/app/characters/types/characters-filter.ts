import { CharacterStatus } from "@characters/types/character-status";
import { CharacterGender } from "@characters/types/character-gender";

export interface CharactersFilter {
  name?: string | null;
  status?: CharacterStatus | null;
  species?: string | null;
  type?: string | null;
  gender?: CharacterGender | null;
}
