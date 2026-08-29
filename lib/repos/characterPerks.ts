import type { CharacterPerk, CharacterPerkInsert } from "@/types/perks";
import { supabaseBrowser } from "@/lib/supabase/browser";

type ListOptions = {
  characterId?: number;
};

export const characterPerksRepo = {
  async list(opts: ListOptions = {}) {
    const supabase = supabaseBrowser();

    let query = supabase.from("character_perks").select("*");
    if (opts.characterId !== undefined) query = query.eq("character_id", opts.characterId);

    const { data, error } = await query;
    if (error) throw error;
    return data as CharacterPerk[];
  },

  async insert(payload: CharacterPerkInsert) {
    const supabase = supabaseBrowser();

    const { data, error } = await supabase
      .from("character_perks")
      .insert(payload)
      .select("*")
      .single();

    if (error) throw error;
    return data as CharacterPerk;
  },

  async delete(id: CharacterPerk["id"]) {
    const supabase = supabaseBrowser();
    const { error } = await supabase.from("character_perks").delete().eq("id", id);
    if (error) throw error;
  },
};