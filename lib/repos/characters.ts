import type { Character, CharacterUpdate } from "@/types/character";
import { supabaseBrowser } from "@/lib/supabase/browser";

type ListOptions = {
  limit?: number;
  orderBy?: keyof Character;
  ascending?: boolean;
};

export const charactersRepo = {
  async list(opts: ListOptions = {}) {
    const supabase = supabaseBrowser();
    const { limit = 100, orderBy = "id", ascending = true } = opts;

    const { data, error } = await supabase
      .from("characters")
      .select("*")
      .order(String(orderBy), { ascending })
      .limit(limit);

    if (error) throw error;
    return data as Character[];
  },

  async update(id: Character["id"], patch: CharacterUpdate) {
    const supabase = supabaseBrowser();

    const { data, error } = await supabase
      .from("characters")
      .update(patch)
      .eq("id", id)
      .select("*")
      .single();

    if (error) throw error;
    return data as Character;
  },

  async delete(id: Character["id"]) {
    const supabase = supabaseBrowser();

    const { error } = await supabase.from("characters").delete().eq("id", id);

    if (error) throw error;
  },
};
