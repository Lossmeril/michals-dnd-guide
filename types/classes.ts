import { Database } from "@/lib/supabase/database.types";

export type Class = Database["public"]["Tables"]["classes"]["Row"];

export type ClassInsert = Database["public"]["Tables"]["classes"]["Insert"];

export type ClassUpdate = Database["public"]["Tables"]["classes"]["Update"];
