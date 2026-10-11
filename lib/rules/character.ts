// Character-building rules from docs/ruleset-overview.md.
// Pure functions only, so the editor and the server share one source of truth.

import type { Tables } from "@/lib/types/database.types";

export const MAX_CLASS_LEVEL = 5;
// Parent classes' levels must total this to unlock an advanced or mighty class
export const UNLOCK_LEVELS = 6;
export const BASE_RESOURCES = 15;

export const STARTS = [
  { name: "Rags to Riches", level: 3 },
  { name: "Seasoned", level: 7 },
  { name: "Veteran", level: 9 },
] as const;

export type Requirement = Tables<"perk_requirements"> & { class_ids: string[] };

export type Rulebook = {
  races: Tables<"races">[];
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

// ----- Classes -----

export const parentsOf = (rb: Rulebook, classId: string) =>
  rb.classParents.filter((p) => p.class_id === classId).map((p) => p.parent_id);

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
      return names.map((n) => `${n} ${req.level}`).join(" and ");
    case "class_levels_sum":
      return `${names.join(" + ")} total ${req.level}`;
    case "has_perk":
    case "has_aspect":
      return findPerk(rb, req.required_perk_id!)?.name ?? req.required_perk_id!;
  }
};

export const chosenIn = (build: Build, classId: string) =>
  build.perks.filter((p) => p.classId === classId);

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

export const validateBuild = (rb: Rulebook, build: Build, level: number) => {
  const errors: string[] = [];
  const warnings: string[] = [];
  const held = heldPerkIds(rb, build);

  if (!build.raceId) errors.push("Pick a race.");
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

  const diff = level - characterLevel(build);
  if (diff > 0) errors.push(`${diff} level-up point(s) left to spend.`);
  if (diff < 0) errors.push(`${-diff} point(s) over level ${level}.`);

  return { errors, warnings };
};
