// Modular armour: pieces add up to Protection and Burden, and each total falls
// into a tier (light, medium, heavy). Protection's tier sets the armour
// rating, Burden's sets the encumbrance (a cost to attempt in Body).
// Pure functions only, shared by the sheet and the rulebook.

import { Constants, type Tables } from "@/lib/types/database.types";

type Piece = Pick<Tables<"items">, "kind" | "slots" | "protection" | "burden" | "harness">;
export type ArmourSlot = (typeof Constants.public.Enums.armour_slot)[number];

export const ARMOUR_SLOTS = Constants.public.Enums.armour_slot;

export const TIERS = ["none", "light", "medium", "heavy"] as const;
export type Tier = (typeof TIERS)[number];

/** 0 none, 1–3 light, 4–6 medium, 7+ heavy */
export const tierOf = (total: number): Tier =>
  total <= 0 ? "none" : total <= 3 ? "light" : total <= 6 ? "medium" : "heavy";

/** The armour rating a Protection tier gives: none 0, light 1, medium 2, heavy 3 */
export const RATING: Record<Tier, number> = { none: 0, light: 1, medium: 2, heavy: 3 };

/** The Body a Burden tier costs to attempt hindered activities */
export const ENCUMBRANCE: Record<Tier, number> = { none: 0, light: 0, medium: 1, heavy: 2 };

/** A complete plate harness, fitted by an armourer, lowers Burden by this much */
export const HARNESS_RELIEF = 3;
const HARNESS_SLOTS: ArmourSlot[] = ["body", "head", "arms", "legs"];

export const isArmourPiece = (item: Piece) =>
  item.kind === "armour" && (item.slots?.length ?? 0) > 0;

export type ArmourTotals = {
  protection: number;
  burden: number;
  rating: number;
  encumbrance: number;
  protectionTier: Tier;
  burdenTier: Tier;
  /** Harness pieces fill body, head, arms and legs */
  fullHarness: boolean;
  /** Slots taken by more than one piece; only one piece per slot counts */
  doubled: ArmourSlot[];
};

/**
 * What a set of worn pieces adds up to. One piece per slot: when two compete
 * for a slot, the better one counts. A full harness is assumed fitted unless
 * told otherwise (second-hand plate needs an armourer first).
 */
export const armourTotals = (
  pieces: Piece[],
  { fitted = true }: { fitted?: boolean } = {},
): ArmourTotals => {
  const worn = pieces
    .filter(isArmourPiece)
    .sort((a, b) => (b.protection ?? 0) - (a.protection ?? 0));
  const taken = new Map<ArmourSlot, Piece>();
  const doubled = new Set<ArmourSlot>();
  for (const piece of worn) {
    const slots = piece.slots!;
    if (slots.some((s) => taken.has(s))) {
      slots.filter((s) => taken.has(s)).forEach((s) => doubled.add(s));
      continue;
    }
    slots.forEach((s) => taken.set(s, piece));
  }
  const counted = [...new Set(taken.values())];
  const protection = counted.reduce((sum, p) => sum + (p.protection ?? 0), 0);
  const fullHarness = HARNESS_SLOTS.every((s) => taken.get(s)?.harness);
  const burden = Math.max(
    0,
    counted.reduce((sum, p) => sum + (p.burden ?? 0), 0) -
      (fullHarness && fitted ? HARNESS_RELIEF : 0),
  );
  const protectionTier = tierOf(protection);
  const burdenTier = tierOf(burden);
  return {
    protection,
    burden,
    rating: RATING[protectionTier],
    encumbrance: ENCUMBRANCE[burdenTier],
    protectionTier,
    burdenTier,
    fullHarness,
    doubled: [...doubled],
  };
};
