import type { Tables, TablesInsert, TablesUpdate } from "./database.types";

export type Character = Tables<"characters">;
export type CharacterInsert = TablesInsert<"characters">;
export type CharacterUpdate = TablesUpdate<"characters">;
