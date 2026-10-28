// Character-building rules from docs/ruleset-overview.md.
// Pure functions only, so the editor and the server share one source of truth.

import type { Tables } from "@/lib/types/database.types";
import {
  type EquipmentPick,
  equipmentErrors,
  equipmentOf,
} from "./equipment";

export const MAX_CLASS_LEVEL = 5;
// Parent classes' levels must total this to unlock an advanced or mighty class
export const UNLOCK_LEVELS = 6;
export const BASE_RESOURCES = 15;
// Pools below this get a warning: no minimum, but they don't last
export const LOW_POOL = 2;

export const STARTS = [
  { name: "Rags to Riches", level: 3 },
  { name: "Seasoned", level: 7 },
  { name: "Veteran", level: 9 },
] as const;

export type Requirement = Tables<"perk_requirements"> & { class_ids: string[] };

export type Rulebook = {
  races: Tables<"races">[];
  backgrounds: Tables<"backgrounds">[];
  items: Tables<"items">[];
  languages: Tables<"languages">[];
  /** Pairs of related languages (dialects, mixes); a link goes both ways */
  languageRelations: Tables<"language_relations">[];
  /** Premade traits, approved custom ones, and the viewer's own */
  traits: Tables<"traits">[];
  classes: Tables<"classes">[];
  skills: Tables<"skills">[];
  classParents: Tables<"class_parents">[];
  perks: Tables<"perks">[];
  classPerks: Tables<"class_perks">[];
  requirements: Requirement[];
};

export type ChosenPerk = { perkId: string; classId: string | null };

export type Build = {
  raceId: string | null;
  backgroundId: string | null;
  /** What the player took from the background's equipment, one pick per group */
  equipment: EquipmentPick[];
  /** Extra languages the player picked; Common and the racial language are free */
  languages: string[];
  traitIds: number[];
  /** Class id -> level (1–5); classes not taken are absent */
  classes: Record<string, number>;
  /** Perks the player picked; classId is null for the racial perk */
  perks: ChosenPerk[];
  body: number;
  soul: number;
  charisma: number;
};

export const emptyBuild = (): Build => ({
  raceId: null,
  backgroundId: null,
  equipment: [],
  languages: [],
  traitIds: [],
  classes: {},
  perks: [],
  body: 5,
  soul: 5,
  charisma: 5,
});

const levelIn = (build: Build, classId: string) => build.classes[classId] ?? 0;

export const findClass = (rb: Rulebook, id: string) =>
  rb.classes.find((c) => c.id === id);

export const findPerk = (rb: Rulebook, id: string) =>
  rb.perks.find((p) => p.id === id);

// ----- Languages -----

export const COMMON_LANGUAGE = "common";

/** Ids of the languages linked to this one, in either direction */
export const relatedLanguageIds = (rb: Rulebook, languageId: string) =>
  rb.languageRelations.flatMap((r) =>
    r.language_id === languageId
      ? [r.related_id]
      : r.related_id === languageId
        ? [r.language_id]
        : [],
  );

/** "Elven, Old tongues", in the languages' own order */
export const relatedLanguageNames = (rb: Rulebook, languageId: string) => {
  const ids = relatedLanguageIds(rb, languageId);
  return rb.languages
    .filter((l) => ids.includes(l.id))
    .map((l) => l.name)
    .join(", ");
};

/** Languages every character of this race speaks without picking them */
export const freeLanguages = (rb: Rulebook, build: Build) => {
  const race = rb.races.find((r) => r.id === build.raceId);
  return [COMMON_LANGUAGE, ...(race?.language_id ? [race.language_id] : [])];
};

/** Races without their own language pick one extra; backgrounds add more */
export const languageSlots = (rb: Rulebook, build: Build) => {
  const race = rb.races.find((r) => r.id === build.raceId);
  const background = rb.backgrounds.find((b) => b.id === build.backgroundId);
  return (
    (race && !race.language_id ? 1 : 0) + (background?.extra_languages ?? 0)
  );
};

// ----- Background equipment -----

/** The equipment groups of the build's background */
export const backgroundEquipment = (rb: Rulebook, build: Build) =>
  equipmentOf(
    rb.items,
    rb.backgrounds.find((b) => b.id === build.backgroundId)?.equipment,
  );

// ----- Classes -----

export const parentsOf = (rb: Rulebook, classId: string) =>
  rb.classParents.filter((p) => p.class_id === classId).map((p) => p.parent_id);

/** "Fighter + Juggler"; empty for basic classes */
export const parentNames = (rb: Rulebook, classId: string) =>
  parentsOf(rb, classId)
    .map((id) => findClass(rb, id)?.name)
    .join(" + ");

export const parentLevels = (rb: Rulebook, build: Build, classId: string) =>
  parentsOf(rb, classId).reduce((sum, id) => sum + levelIn(build, id), 0);

/** Basic classes are always open; others need their parents to total 6 levels */
export const isClassUnlocked = (rb: Rulebook, build: Build, classId: string) =>
  parentsOf(rb, classId).length === 0 ||
  parentLevels(rb, build, classId) >= UNLOCK_LEVELS;

// ----- Perks -----

const linksOf = (rb: Rulebook, classId: string) =>
  rb.classPerks
    .filter((cp) => cp.class_id === classId)
    .sort((a, b) => a.sort - b.sort);

/** Perks a player can pick in this class (not core spells, not aspects) */
export const choosablePerks = (rb: Rulebook, classId: string) =>
  linksOf(rb, classId)
    .filter((cp) => !cp.is_core && findPerk(rb, cp.perk_id)?.kind !== "aspect")
    .map((cp) => findPerk(rb, cp.perk_id)!);

/** Core spells come free with the class */
export const coreSpells = (rb: Rulebook, classId: string) =>
  linksOf(rb, classId)
    .filter((cp) => cp.is_core)
    .map((cp) => findPerk(rb, cp.perk_id)!);

export const aspectsOf = (rb: Rulebook, classId: string) =>
  linksOf(rb, classId)
    .map((cp) => findPerk(rb, cp.perk_id)!)
    .filter((p) => p.kind === "aspect");

export const racialPerks = (rb: Rulebook, raceId: string) =>
  rb.perks.filter((p) => p.race_id === raceId);

export const requirementsOf = (rb: Rulebook, perkId: string) =>
  rb.requirements.filter((r) => r.perk_id === perkId);

const requirementMet = (req: Requirement, build: Build, held: Set<string>) => {
  const levels = req.class_ids.map((id) => levelIn(build, id));
  switch (req.kind) {
    case "class_level":
    case "class_levels_all":
      return levels.length > 0 && levels.every((l) => l >= req.level!);
    case "class_levels_sum":
      return levels.reduce((a, b) => a + b, 0) >= req.level!;
    case "has_perk":
    case "has_aspect":
      return held.has(req.required_perk_id!);
  }
};

export const requirementsMet = (
  rb: Rulebook,
  build: Build,
  perkId: string,
  held = heldPerkIds(rb, build),
) => requirementsOf(rb, perkId).every((r) => requirementMet(r, build, held));

/** Aspects unlock by themselves, but only inside a class the character has */
export const heldAspects = (rb: Rulebook, build: Build) =>
  Object.keys(build.classes).flatMap((classId) =>
    aspectsOf(rb, classId).filter((a) =>
      requirementsOf(rb, a.id).every((r) =>
        requirementMet(r, build, new Set()),
      ),
    ),
  );

/** Everything the character holds: chosen perks, core spells and aspects */
export const heldPerkIds = (rb: Rulebook, build: Build) =>
  new Set([
    ...build.perks.map((p) => p.perkId),
    ...Object.keys(build.classes).flatMap((id) =>
      coreSpells(rb, id).map((p) => p.id),
    ),
    ...heldAspects(rb, build).map((a) => a.id),
  ]);

export const describeRequirement = (rb: Rulebook, req: Requirement) => {
  const names = req.class_ids.map((id) => findClass(rb, id)?.name ?? id);
  switch (req.kind) {
    case "class_level":
    case "class_levels_all":
      return names.map((n) => `${n} ${req.level}`).join(" + ");
    case "class_levels_sum":
      return `${names.join(" + ")} total ${req.level}`;
    case "has_perk":
      return findPerk(rb, req.required_perk_id!)?.name ?? req.required_perk_id!;
    case "has_aspect":
      return `${findPerk(rb, req.required_perk_id!)?.name ?? req.required_perk_id!} aspect`;
  }
};

/** e.g. "Fighter 5, Brute aspect"; empty when the perk has no requirements */
export const describeRequirements = (rb: Rulebook, perkId: string) =>
  requirementsOf(rb, perkId)
    .map((r) => describeRequirement(rb, r))
    .join(", ");

const unmetRequirements = (rb: Rulebook, build: Build, perkId: string) => {
  const held = heldPerkIds(rb, build);
  return requirementsOf(rb, perkId)
    .filter((r) => !requirementMet(r, build, held))
    .map((r) => describeRequirement(rb, r))
    .join(", ");
};

export const chosenIn = (build: Build, classId: string) =>
  build.perks.filter((p) => p.classId === classId);

// ----- Perk states and trees -----

/**
 * held: the character has it (picked, core spell or unlocked aspect)
 * available: can be picked now
 * full: requirements met, but no perk slot or level-up point is free
 * elsewhere: already picked through another class
 * locked: requirements not met, or the character doesn't have the class
 */
export type PerkState = "held" | "available" | "full" | "elsewhere" | "locked";

export const perkStateIn = (
  rb: Rulebook,
  build: Build,
  classId: string,
  perkId: string,
  /** Level-up points that may still buy an extra perk */
  extraPoints: number,
): { state: PerkState; note: string | null } => {
  const perk = findPerk(rb, perkId);
  const level = levelIn(build, classId);
  const className = findClass(rb, classId)?.name ?? classId;

  if (perk?.kind === "aspect") {
    return heldAspects(rb, build).some((a) => a.id === perkId)
      ? { state: "held", note: "Unlocked" }
      : {
          state: "locked",
          note: level
            ? `Unlocks at ${describeRequirements(rb, perkId)}`
            : `Needs ${className} 1 and ${describeRequirements(rb, perkId)}`,
        };
  }
  if (coreSpells(rb, classId).some((p) => p.id === perkId)) {
    return level
      ? { state: "held", note: "Comes with the class" }
      : { state: "locked", note: `Comes with ${className}` };
  }
  if (chosenIn(build, classId).some((p) => p.perkId === perkId)) {
    return { state: "held", note: "Picked" };
  }
  const elsewhere = build.perks.find((p) => p.perkId === perkId);
  if (elsewhere) {
    const other = elsewhere.classId && findClass(rb, elsewhere.classId)?.name;
    return { state: "elsewhere", note: `Picked as a ${other} perk` };
  }
  if (!level) return { state: "locked", note: `Needs ${className} 1` };
  const unmet = unmetRequirements(rb, build, perkId);
  if (unmet) return { state: "locked", note: `Needs ${unmet}` };

  const slotsFull = chosenIn(build, classId).length >= level;
  if (!slotsFull) return { state: "available", note: null };
  // At level 5, extra perks cost a level-up point each
  return level === MAX_CLASS_LEVEL && extraPoints > 0
    ? { state: "available", note: "Extra perk: costs 1 level-up point" }
    : {
        state: "full",
        note:
          level === MAX_CLASS_LEVEL
            ? "No level-up points left for extra perks"
            : `All ${level} ${className} perk slots are used`,
      };
};

/** The level of this class a perk needs; 1 when it only needs the class */
export const ownLevelNeeded = (rb: Rulebook, perkId: string, classId: string) =>
  Math.max(
    1,
    ...requirementsOf(rb, perkId)
      .filter(
        (r) =>
          (r.kind === "class_level" || r.kind === "class_levels_all") &&
          r.class_ids.includes(classId),
      )
      .map((r) => r.level ?? 1),
  );

export type PerkNode = { perk: Tables<"perks">; children: PerkNode[] };

/**
 * A class's perks as a tree. Aspects are roots; a perk hangs under the
 * aspect or perk of this class it requires. Perks needing neither are
 * "general" roots, sorted by the class level they need.
 */
export const perkTree = (rb: Rulebook, classId: string) => {
  const choosable = choosablePerks(rb, classId);
  const aspects = aspectsOf(rb, classId);
  const inClass = new Set([...choosable, ...aspects].map((p) => p.id));

  const parentOf = (perkId: string) =>
    requirementsOf(rb, perkId).find(
      (r) =>
        (r.kind === "has_perk" || r.kind === "has_aspect") &&
        inClass.has(r.required_perk_id!),
    )?.required_perk_id ?? null;

  // seen guards against requirement cycles in the data
  const seen = new Set<string>();
  const childrenOf = (id: string | null): PerkNode[] =>
    choosable
      .filter((p) => parentOf(p.id) === id && !seen.has(p.id))
      .map((p) => {
        seen.add(p.id);
        return { perk: p, children: childrenOf(p.id) };
      });

  const general = childrenOf(null).sort(
    (a, b) =>
      ownLevelNeeded(rb, a.perk.id, classId) -
      ownLevelNeeded(rb, b.perk.id, classId),
  );
  return {
    core: coreSpells(rb, classId),
    general,
    aspects: aspects.map((a) => ({ perk: a, children: childrenOf(a.id) })),
  };
};

/** Picks or drops a class perk */
export const withPerkToggled = (
  build: Build,
  classId: string,
  perkId: string,
): Build => ({
  ...build,
  perks: build.perks.some((p) => p.perkId === perkId && p.classId === classId)
    ? build.perks.filter((p) => !(p.perkId === perkId && p.classId === classId))
    : [...build.perks, { perkId, classId }],
});

/** A new race clears the old racial perk */
export const withRace = (build: Build, raceId: string): Build => ({
  ...build,
  raceId,
  perks: build.perks.filter((p) => p.classId !== null),
});

export const withRacialPerk = (build: Build, perkId: string): Build => ({
  ...build,
  perks: [
    ...build.perks.filter((p) => p.classId !== null),
    { perkId, classId: null },
  ],
});

/** Sets a class level; drops the class at 0 and any perks it no longer has slots for */
export const withClassLevel = (
  build: Build,
  classId: string,
  level: number,
): Build => {
  const classes = { ...build.classes };
  if (level <= 0) delete classes[classId];
  else classes[classId] = level;

  const keep = level >= MAX_CLASS_LEVEL ? Infinity : Math.max(level, 0);
  let kept = 0;
  const perks = build.perks.filter(
    (p) => p.classId !== classId || kept++ < keep,
  );
  return { ...build, classes, perks };
};

// ----- Level -----

export const resourcePoints = (build: Build) =>
  build.body + build.soul + build.charisma - BASE_RESOURCES;

/** Perks beyond one per class level; only a level-5 class can have them */
export const extraPerks = (build: Build) =>
  Object.entries(build.classes).reduce(
    (sum, [id, level]) => sum + Math.max(0, chosenIn(build, id).length - level),
    0,
  );

/**
 * Points still free for resources or extra perks. The starting levels all go
 * into classes, so only levels gained after creation can buy these.
 */
export const freePointsLeft = (
  build: Build,
  level: number,
  startLevel: number,
) =>
  level -
  startLevel -
  Math.max(0, resourcePoints(build)) -
  extraPerks(build);

/**
 * level = chosen class perks + resource points above 15.
 * A class level whose perk slot is still empty counts too, so the total
 * doesn't drop while the player is mid-way through picking perks.
 */
export const characterLevel = (build: Build) =>
  Object.entries(build.classes).reduce(
    (sum, [id, level]) => sum + Math.max(level, chosenIn(build, id).length),
    0,
  ) + resourcePoints(build);

// ----- Validation -----

export const validateBuild = (
  rb: Rulebook,
  build: Build,
  level: number,
  /** Defaults to `level`: a new character, all of whose levels are starting ones */
  startLevel = level,
) => {
  const errors: string[] = [];
  const warnings: string[] = [];
  const held = heldPerkIds(rb, build);

  if (!build.raceId) errors.push("Pick a race.");
  if (!build.backgroundId) errors.push("Pick a background.");
  errors.push(...equipmentErrors(backgroundEquipment(rb, build), build.equipment));

  const slots = languageSlots(rb, build);
  const free = freeLanguages(rb, build);
  if (build.languages.some((l) => free.includes(l))) {
    errors.push("You already speak that language for free.");
  }
  if (build.languages.length < slots) {
    errors.push(`Pick ${slots - build.languages.length} more language(s).`);
  } else if (build.languages.length > slots) {
    errors.push(`You can only pick ${slots} extra language(s).`);
  }
  for (const id of build.traitIds) {
    if (!rb.traits.some((t) => t.id === id)) errors.push("Unknown trait.");
  }
  const racial = build.perks.filter((p) => p.classId === null);
  if (build.raceId && racial.length !== 1) errors.push("Pick one racial perk.");
  for (const p of racial) {
    if (findPerk(rb, p.perkId)?.race_id !== build.raceId) {
      errors.push(
        `${findPerk(rb, p.perkId)?.name ?? p.perkId} isn't a perk of your race.`,
      );
    }
  }

  for (const [classId, classLevel] of Object.entries(build.classes)) {
    const cls = findClass(rb, classId);
    if (!cls) {
      errors.push(`Unknown class ${classId}.`);
      continue;
    }
    if (classLevel < 1 || classLevel > MAX_CLASS_LEVEL) {
      errors.push(`${cls.name} must be level 1–${MAX_CLASS_LEVEL}.`);
    }
    if (!isClassUnlocked(rb, build, classId)) {
      const parents = parentsOf(rb, classId).map(
        (id) => findClass(rb, id)?.name,
      );
      errors.push(
        `${cls.name} needs ${parents.join(" + ")} to total ${UNLOCK_LEVELS} levels.`,
      );
    }

    const chosen = chosenIn(build, classId).length;
    const options = choosablePerks(rb, classId).length;
    if (chosen > classLevel && classLevel < MAX_CLASS_LEVEL) {
      errors.push(
        `${cls.name} ${classLevel} can only have ${classLevel} perks.`,
      );
    } else if (chosen < classLevel) {
      if (options > chosen) {
        errors.push(`Pick ${classLevel - chosen} more ${cls.name} perk(s).`);
      } else {
        warnings.push(
          `${cls.name} has no more perks to pick yet; ${classLevel - chosen} slot(s) stay empty.`,
        );
      }
    }
  }

  for (const p of build.perks.filter((p) => p.classId !== null)) {
    const perk = findPerk(rb, p.perkId);
    const allowed = choosablePerks(rb, p.classId!).some(
      (c) => c.id === p.perkId,
    );
    if (!perk || !allowed) {
      errors.push(
        `${perk?.name ?? p.perkId} can't be picked as a ${findClass(rb, p.classId!)?.name} perk.`,
      );
    } else if (!requirementsMet(rb, build, p.perkId, held)) {
      errors.push(
        `${perk.name} needs ${requirementsOf(rb, p.perkId)
          .map((r) => describeRequirement(rb, r))
          .join(", ")}.`,
      );
    }
  }

  if ([build.body, build.soul, build.charisma].some((v) => v < 0)) {
    errors.push("Resources can't go below 0.");
  }
  if (resourcePoints(build) < 0) {
    errors.push(`Spread all ${BASE_RESOURCES} starting resource points.`);
  }
  // Allowed, but a pool this small overflows on its first Scar
  for (const [name, value] of [
    ["Body", build.body],
    ["Soul", build.soul],
    ["Charisma", build.charisma],
  ] as const) {
    if (value >= 0 && value < LOW_POOL) {
      warnings.push(
        `${name} ${value} is very low: a single ${name} Scar can leave the character dying.`,
      );
    }
  }

  if (freePointsLeft(build, level, startLevel) < 0) {
    errors.push(
      level === startLevel
        ? `Starting levels all go into classes: spread exactly ${BASE_RESOURCES} resource points and take one perk per class level.`
        : `Only the ${level - startLevel} level(s) gained after creation can go into resources or extra perks.`,
    );
  }

  const diff = level - characterLevel(build);
  if (diff > 0) errors.push(`${diff} level-up point(s) left to spend.`);
  if (diff < 0) errors.push(`${-diff} point(s) over level ${level}.`);

  return { errors, warnings };
};
