import type {
  Character,
  CharacterInsert,
  CharacterUpdate,
} from "@/types/characters";
import { createCrudRepo } from "./createCrudRepo";

// `characters.id` is a number; `createCrudRepo` picks that up via `IdOf<Row>`,
// so `getById` / `update` / `delete` all take a `number` here.
export const charactersRepo = createCrudRepo<
  Character,
  CharacterInsert,
  CharacterUpdate
>("characters");
