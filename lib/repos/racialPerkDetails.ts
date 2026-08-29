import type { RacialPerkDetails, RacialPerkDetailsInsert } from "@/types/perks";
import { supabaseBrowser } from "@/lib/supabase/browser";

export const racialPerkDetailsRepo = {
  async insert(payload: RacialPerkDetailsInsert) {
    const supabase = supabaseBrowser();

    const { data, error } = await supabase
      .from("racial_perk_details")
      .insert(payload)
      .select("*")
      .single();

    if (error) throw error;
    return data as RacialPerkDetails;
  },

  async delete(perkId: string) {
    const supabase = supabaseBrowser();

    const { error } = await supabase
      .from("racial_perk_details")
      .delete()
      .eq("perk_id", perkId);

    if (error) throw error;
  },
};
