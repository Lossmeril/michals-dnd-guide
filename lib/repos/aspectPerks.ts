import type { AspectPerk, AspectPerkInsert } from "@/types/perks";
import { supabaseBrowser } from "@/lib/supabase/browser";

// -----------------------------------------------------------------------------
// Not a `createCrudRepo` client: `aspect_perks` is a join table keyed by
// (aspect_id, perk_id), no `id` column — the factory doesn't fit.
// -----------------------------------------------------------------------------

export const aspectPerksRepo = {
  // `aspectId` optional: passing it filters to one aspect, omitting it returns
  // every aspect/perk link.
  async list(aspectId?: string): Promise<AspectPerk[]> {
    let query = supabaseBrowser().from("aspect_perks").select("*");
    if (aspectId) query = query.eq("aspect_id", aspectId);

    const { data, error } = await query;
    if (error) throw error;
    return data as AspectPerk[];
  },

  async insert(payload: AspectPerkInsert): Promise<AspectPerk> {
    const { data, error } = await supabaseBrowser()
      .from("aspect_perks")
      .insert(payload)
      .select("*")
      .single();

    if (error) throw error;
    return data as AspectPerk;
  },

  // Composite key, so both parts are needed to identify the row.
  async delete(aspectId: string, perkId: string): Promise<void> {
    const { error } = await supabaseBrowser()
      .from("aspect_perks")
      .delete()
      .eq("aspect_id", aspectId)
      .eq("perk_id", perkId);

    if (error) throw error;
  },
};
