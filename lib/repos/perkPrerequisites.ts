import type { PerkPrerequisite, PerkPrerequisiteInsert } from "@/types/perks";
import { supabaseBrowser } from "@/lib/supabase/browser";

export const perkPrerequisitesRepo = {
  async list(forPerkId: string) {
    const supabase = supabaseBrowser();

    const { data, error } = await supabase
      .from("perk_prerequisites")
      .select("*")
      .eq("for_perk_id", forPerkId);

    if (error) throw error;
    return data as PerkPrerequisite[];
  },

  async insert(payload: PerkPrerequisiteInsert) {
    const supabase = supabaseBrowser();

    const { data, error } = await supabase
      .from("perk_prerequisites")
      .insert(payload)
      .select("*")
      .single();

    if (error) throw error;
    return data as PerkPrerequisite;
  },

  async delete(id: PerkPrerequisite["id"]) {
    const supabase = supabaseBrowser();

    const { error } = await supabase
      .from("perk_prerequisites")
      .delete()
      .eq("id", id);

    if (error) throw error;
  },
};
