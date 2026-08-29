import type {
  Perk,
  PerkInsert,
  PerkUpdate,
  PerkWithDetails,
} from "@/types/perks";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { createCrudRepo } from "./createCrudRepo";

type ListOptions = {
  limit?: number;
  perkType?: Perk["perk_type"];
};

// `insert` / `update` / `delete` / `getById` are the standard id-based ones.
const base = createCrudRepo<Perk, PerkInsert, PerkUpdate>("perks");

export const perksRepo = {
  ...base,

  // Replaces the factory's plain `list`: perks are always loaded with their
  // related rows joined in, and ordered by name.
  async list(opts: ListOptions = {}): Promise<PerkWithDetails[]> {
    const { limit = 200, perkType } = opts;

    let query = supabaseBrowser()
      .from("perks")
      .select(
        // `!perk_prerequisites_for_perk_id_fkey` disambiguates the FK to follow:
        // `perk_prerequisites` references `perks` more than once, so PostgREST
        // needs the constraint name to know we want "prerequisites OF this perk".
        "*, perk_classes(*), spell_details(*), racial_perk_details(*), perk_prerequisites!perk_prerequisites_for_perk_id_fkey(*)",
      )
      .order("name", { ascending: true })
      .limit(limit);

    if (perkType) query = query.eq("perk_type", perkType);

    const { data, error } = await query;
    if (error) throw error;
    // Double cast: the joined shape doesn't line up with any single generated
    // row type, so go through `unknown` to reach `PerkWithDetails`.
    return data as unknown as PerkWithDetails[];
  },
};
