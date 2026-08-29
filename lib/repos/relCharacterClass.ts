import {
  RelCharacterClass,
  RelCharacterClassInsert,
  RelCharacterClassUpdate,
} from "@/types/relCharacterClass";
import { createCrudRepo } from "./createCrudRepo";

// Join table between characters and classes, but it carries its own `id`
// column plus a `level`, so it behaves like any other id-keyed table.
export const relCharacterClassRepo = createCrudRepo<
  RelCharacterClass,
  RelCharacterClassInsert,
  RelCharacterClassUpdate
>("character_class");
