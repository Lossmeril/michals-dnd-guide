// =============================================================================
// react-query key registry
// -----------------------------------------------------------------------------
// Every cached query names its data through one of these. Keeping them in a
// single file means:
//   - no stringly-typed typos scattered across hooks,
//   - invalidation is predictable: keys are arrays, and react-query matches by
//     prefix, so invalidating ["perks"] also refreshes ["perks", id] and
//     ["perks", { perkType }].
// =============================================================================

export const queryKeys = {
  characters: ["characters"] as const,
  character: (id: string | number) => ["characters", String(id)] as const,

  classes: ["classes"] as const,
  class: (id: string) => ["classes", id] as const,

  races: ["races"] as const,
  race: (id: string) => ["races", id] as const,

  players: ["players"] as const,

  classPrerequisites: ["class_prerequisites"] as const,

  relCharacterClasses: ["character_class"] as const,

  // Collection of perks, optionally filtered by type. The unfiltered key is a
  // prefix of the filtered one, so invalidating `perks()` clears both.
  perks: (perkType?: string) =>
    perkType ? (["perks", { perkType }] as const) : (["perks"] as const),
  perk: (id: string) => ["perks", id] as const,

  characterPerks: (characterId: number) =>
    ["character_perks", characterId] as const,
  perkClasses: (perkId: string) => ["perk_classes", perkId] as const,
  perkPrerequisites: (perkId: string) =>
    ["perk_prerequisites", perkId] as const,
  aspectPerks: (aspectId?: string) =>
    aspectId
      ? (["aspect_perks", aspectId] as const)
      : (["aspect_perks"] as const),
} as const;
