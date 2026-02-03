import { Database } from "@/lib/supabase/database.types";

export type Character = Database["public"]["Tables"]["characters"]["Row"];

export type CharacterInsert =
  Database["public"]["Tables"]["characters"]["Insert"];

export type CharacterUpdate =
  Database["public"]["Tables"]["characters"]["Update"];
