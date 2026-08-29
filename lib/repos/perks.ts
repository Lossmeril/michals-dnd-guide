import type {
  Perk,
  PerkInsert,
  PerkUpdate,
  PerkWithDetails,
} from "@/types/perks";
import { supabaseBrowser } from "@/lib/supabase/browser";

type ListOptions = {
  limit?: number;
  perkType?: Perk["perk_type"];
};

export const perksRepo = {
  async list(opts: ListOptions = {}) {
    const supabase = supabaseBrowser();
    const { limit = 200, perkType } = opts;

    let query = supabase
      .from("perks")
      .select(
        "*, perk_classes(*), spell_details(*), racial_perk_details(*), perk_prerequisites!perk_prerequisites_for_perk_id_fkey(*)",
      )
      .order("name", { ascending: true })
      .limit(limit);

    if (perkType) query = query.eq("perk_type", perkType);

    const { data, error } = await query;
    if (error) throw error;
    return data as unknown as PerkWithDetails[];
  },

  async update(id: Perk["id"], patch: PerkUpdate) {
    const supabase = supabaseBrowser();

    const { data, error } = await supabase
      .from("perks")
      .update(patch)
      .eq("id", id)
      .select("*")
      .single();

    if (error) throw error;
    return data as Perk;
  },

  async delete(id: Perk["id"]) {
    const supabase = supabaseBrowser();
    const { error } = await supabase.from("perks").delete().eq("id", id);
    if (error) throw error;
  },

  async insert(payload: PerkInsert) {
    const supabase = supabaseBrowser();

    const { data, error } = await supabase
      .from("perks")
      .insert(payload)
      .select("*")
      .single();

    if (error) throw error;
    return data as Perk;
  },
};
