import { Database } from "@/lib/supabase/database.types";

export type Race = Database["public"]["Tables"]["races"]["Row"];

export type RaceInsert = Database["public"]["Tables"]["races"]["Insert"];

export type RaceUpdate = Database["public"]["Tables"]["races"]["Update"];
