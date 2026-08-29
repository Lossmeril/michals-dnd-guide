import type { RacialPerkDetails, RacialPerkDetailsInsert } from "@/types/perks";
import { supabaseBrowser } from "@/lib/supabase/browser";

// -----------------------------------------------------------------------------
// Not a `createCrudRepo` client: `racial_perk_details` is a 1:1 extension of
// `perks` keyed by `perk_id` (no own `id`). `perk_id` is the whole primary key,
// so "change the race" is done as delete + insert by the caller, not update.
// -----------------------------------------------------------------------------

export const racialPerkDetailsRepo = {
  async insert(
    payload: RacialPerkDetailsInsert,
  ): Promise<RacialPerkDetails> {
    const { data, error } = await supabaseBrowser()
      .from("racial_perk_details")
      .insert(payload)
      .select("*")
      .single();

    if (error) throw error;
    return data as RacialPerkDetails;
  },

  async delete(perkId: string): Promise<void> {
    const { error } = await supabaseBrowser()
      .from("racial_perk_details")
      .delete()
      .eq("perk_id", perkId);

    if (error) throw error;
  },
};
