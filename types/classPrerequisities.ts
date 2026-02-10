import { Database } from "@/lib/supabase/database.types";

export type ClassPrerequisite =
  Database["public"]["Tables"]["class_prerequisites"]["Row"];

export type ClassPrerequisiteInsert =
  Database["public"]["Tables"]["class_prerequisites"]["Insert"];

export type ClassPrerequisiteUpdate =
  Database["public"]["Tables"]["class_prerequisites"]["Update"];
