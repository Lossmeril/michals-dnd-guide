import { supabaseBrowser } from "@/lib/supabase/browser";
import {
  RelCharacterClass,
  RelCharacterClassInsert,
  RelCharacterClassUpdate,
} from "@/types/relCharacterClass";

type ListOptions = {
  limit?: number;
  orderBy?: keyof RelCharacterClass;
  ascending?: boolean;
};

export const relCharacterClassRepo = {
  async list(opts: ListOptions = {}) {
    const supabase = supabaseBrowser();
    const { limit = 100, orderBy = "id", ascending = true } = opts;

    const { data, error } = await supabase
      .from("character_class")
      .select("*")
      .order(String(orderBy), { ascending })
      .limit(limit);

    if (error) throw error;
    return data as RelCharacterClass[];
  },

  async update(id: RelCharacterClass["id"], patch: RelCharacterClassUpdate) {
    const supabase = supabaseBrowser();

    const { data, error } = await supabase
      .from("character_class")
      .update(patch)
      .eq("id", id)
      .select("*")
      .single();

    if (error) throw error;
    return data as RelCharacterClass;
  },

  async delete(id: RelCharacterClass["id"]) {
    const supabase = supabaseBrowser();

    const { error } = await supabase
      .from("character_class")
      .delete()
      .eq("id", id);

    if (error) throw error;
  },

  async insert(payload: RelCharacterClassInsert) {
    const supabase = supabaseBrowser();

    const { data, error } = await supabase
      .from("character_class")
      .insert(payload)
      .select("*")
      .single();

    if (error) throw error;
    return data as RelCharacterClass;
  },
};
