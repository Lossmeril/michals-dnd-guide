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

// The join used for every "perk with details" read (list and getById).
// `!perk_prerequisites_for_perk_id_fkey` disambiguates the FK to follow:
// `perk_prerequisites` references `perks` more than once, so PostgREST needs
// the constraint name to know we want "prerequisites OF this perk".
const PERK_DETAILS_SELECT =
  "*, perk_classes(*), spell_details(*), racial_perk_details(*), perk_prerequisites!perk_prerequisites_for_perk_id_fkey(*)";

// `insert` / `update` / `delete` are the standard id-based ones from the
// factory. `list` and `getById` are overridden below to pull the joined rows.
const base = createCrudRepo<Perk, PerkInsert, PerkUpdate>("perks");

export const perksRepo = {
  ...base,

  async list(opts: ListOptions = {}): Promise<PerkWithDetails[]> {
    const { limit = 200, perkType } = opts;

    let query = supabaseBrowser()
      .from("perks")
      .select(PERK_DETAILS_SELECT)
      .order("name", { ascending: true })
      .limit(limit);

    if (perkType) query = query.eq("perk_type", perkType);

    const { data, error } = await query;
    if (error) throw error;
    // Double cast: the joined shape doesn't line up with any single generated
    // row type, so go through `unknown` to reach `PerkWithDetails`.
    return data as unknown as PerkWithDetails[];
  },

  // Overrides the factory `getById` so a single perk also arrives with its
  // joined detail rows (the editor page needs them).
  async getById(id: string): Promise<PerkWithDetails | null> {
    const { data, error } = await supabaseBrowser()
      .from("perks")
      .select(PERK_DETAILS_SELECT)
      .eq("id", id)
      .maybeSingle();

    if (error) throw error;
    return (data as unknown as PerkWithDetails | null) ?? null;
  },
};
