import type { SpellDetails, SpellDetailsInsert, SpellDetailsUpdate } from "@/types/perks";
import { supabaseBrowser } from "@/lib/supabase/browser";

export const spellDetailsRepo = {
  async upsert(payload: SpellDetailsInsert) {
    const supabase = supabaseBrowser();

    const { data, error } = await supabase
      .from("spell_details")
      .upsert(payload)
      .select("*")
      .single();

    if (error) throw error;
    return data as SpellDetails;
  },

  async update(perkId: string, patch: SpellDetailsUpdate) {
    const supabase = supabaseBrowser();

    const { data, error } = await supabase
      .from("spell_details")
      .update(patch)
      .eq("perk_id", perkId)
      .select("*")
      .single();

    if (error) throw error;
    return data as SpellDetails;
  },

  async delete(perkId: string) {
    const supabase = supabaseBrowser();

    const { error } = await supabase
      .from("spell_details")
      .delete()
      .eq("perk_id", perkId);

    if (error) throw error;
  },
};
