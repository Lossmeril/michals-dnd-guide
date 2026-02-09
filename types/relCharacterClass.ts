import { Database } from "@/lib/supabase/database.types";

export type RelCharacterClass =
  Database["public"]["Tables"]["character_class"]["Row"];

export type RelCharacterClassInsert =
  Database["public"]["Tables"]["character_class"]["Insert"];

export type RelCharacterClassUpdate =
  Database["public"]["Tables"]["character_class"]["Update"];
