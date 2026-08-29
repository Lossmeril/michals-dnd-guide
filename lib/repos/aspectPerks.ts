import type { AspectPerk, AspectPerkInsert } from "@/types/perks";
import { supabaseBrowser } from "@/lib/supabase/browser";

export const aspectPerksRepo = {
  async list(aspectId?: string) {
    const supabase = supabaseBrowser();

    let query = supabase.from("aspect_perks").select("*");
    if (aspectId) query = query.eq("aspect_id", aspectId);

    const { data, error } = await query;
    if (error) throw error;
    return data as AspectPerk[];
  },

  async insert(payload: AspectPerkInsert) {
    const supabase = supabaseBrowser();

    const { data, error } = await supabase
      .from("aspect_perks")
      .insert(payload)
      .select("*")
      .single();

    if (error) throw error;
    return data as AspectPerk;
  },

  async delete(aspectId: string, perkId: string) {
    const supabase = supabaseBrowser();

    const { error } = await supabase
      .from("aspect_perks")
      .delete()
      .eq("aspect_id", aspectId)
      .eq("perk_id", perkId);

    if (error) throw error;
  },
};
