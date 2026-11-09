// The character sheet on A4 paper. Page 1 is the front, laid out to fit one
// sheet: pools to strike through in pencil, skills by resource, a Danger Level
// track for a token, armour, weapons, purse and Scars. Perks and spells flow on from page
// 2 over as many sheets as they need; the gear and the story close it.

import { Fragment } from "react";
import { twMerge } from "tailwind-merge";
import { type Pool, RESOURCE_STYLES } from "@/components/game/resources";
import RitualCharging from "@/components/game/ritualCharging";
import type { Dict } from "@/lib/i18n/dictionaries";
import { armourTotals } from "@/lib/rules/armour";
import {
  aspectsOf,
  chosenIn,
  coreSpells,
  findPerk,
  freeLanguages,
  heldAspects,
  type Build,
  type Rulebook,
} from "@/lib/rules/character";
import { costOf, DURATION_NAMES, formatCoins, RESOURCE_NAMES } from "@/lib/rules/format";
import { itemName } from "@/lib/rules/equipment";
import type { Tables } from "@/lib/types/database.types";

const POOLS: Pool[] = ["body", "soul", "charisma"];
const SCAR_ROWS = 10;
const NOTE_LINES = 10;

type Props = {
  rb: Rulebook;
  character: Tables<"characters">;
  build: Build;
  inventory: Tables<"character_items">[];
  /** The stat blocks' words, for the ritual item card */
  t: Dict["statBlock"];
};

// -----------------------------------------------------------------------------
// Pieces
// -----------------------------------------------------------------------------

/** One A4 sheet on screen; on paper the @page rule sets the size and the browser paginates */
const Page: React.FC<{ children: React.ReactNode; fixed?: boolean; className?: string }> = ({
  children,
  fixed,
  className,
}) => (
  <section
    className={twMerge(
      "sheet-page bg-white text-dnd-ink w-[210mm] p-[10mm] mx-auto mb-8 shadow-[0_0_12px_rgba(0,0,0,0.3)]",
      "min-h-[297mm]",
      // The front fills one sheet; a big build spills onto the next
      fixed && "sheet-front flex flex-col",
      className,
    )}
  >
    {children}
  </section>
);

/** A small-caps label with a gold rule, like the rulebook's headings */
const Label: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <h3
    className={twMerge(
      "libre caps text-[9pt] font-bold uppercase tracking-wider text-dnd-red-dark border-b border-dnd-gold mb-1",
      className,
    )}
  >
    {children}
  </h3>
);

const Box: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div className={twMerge("border border-dnd-gold rounded-sm p-[2mm]", className)}>
    {children}
  </div>
);

/** A labelled empty field to write into */
const WriteIn: React.FC<{ label: string; hint?: string; className?: string }> = ({
  label,
  hint,
  className,
}) => (
  <div className={twMerge("flex flex-col items-center", className)}>
    <div className="w-full h-[9mm] border-2 border-dnd-ink/70 rounded-sm bg-white" />
    <span className="text-[6.5pt] uppercase tracking-wider font-bold mt-0.5">{label}</span>
    {hint && <span className="text-[6pt] italic text-dnd-ink/60 leading-tight text-center">{hint}</span>}
  </div>
);

const Circles: React.FC<{ count: number }> = ({ count }) => (
  <span className="inline-flex gap-[1.5mm] align-middle">
    {Array.from({ length: count }, (_, i) => (
      <span key={i} className="inline-block w-[3.5mm] h-[3.5mm] rounded-full border border-dnd-ink/70" />
    ))}
  </span>
);

const Lines: React.FC<{ count: number }> = ({ count }) => (
  <div>
    {Array.from({ length: count }, (_, i) => (
      <div key={i} className="h-[7mm] border-b border-dnd-ink/30" />
    ))}
  </div>
);

// -----------------------------------------------------------------------------
// Data helpers
// -----------------------------------------------------------------------------

/** The character's skills by resource; a skill several classes share keeps the best level */
const skillsByPool = (rb: Rulebook, build: Build) => {
  const best = new Map<string, { skill: Tables<"skills">; level: number; classes: string[] }>();
  for (const skill of rb.skills) {
    const level = build.classes[skill.class_id];
    if (!level) continue;
    const className = rb.classes.find((c) => c.id === skill.class_id)?.name ?? "";
    const seen = best.get(skill.name);
    if (!seen) best.set(skill.name, { skill, level, classes: [className] });
    else {
      seen.classes.push(className);
      if (level > seen.level) Object.assign(seen, { skill, level });
    }
  }
  const all = [...best.values()].sort((a, b) => b.level - a.level || a.skill.name.localeCompare(b.skill.name));
  return Object.fromEntries(POOLS.map((p) => [p, all.filter((s) => s.skill.resource === p)])) as Record<
    Pool,
    typeof all
  >;
};

const MANOEUVRE_NAMES: Record<string, string> = {
  precise: "Precise",
  mighty: "Mighty",
  cunning: "Cunning",
  quick: "Quick",
  defense: "Defense",
  widespread: "Widespread",
};

/** Danger Level 1–5 at the side of the pools: the player moves a token on it */
const DANGER_FEEL = [
  [5, "The fuck did I stumble into?"],
  [4, "The danger is real"],
  [3, "Time to file a safety report"],
  [2, "Same shit, different day"],
  [1, "Walk in a park"],
] as const;

const DangerTrack = () => (
  <div className="flex flex-col items-center gap-[1.5mm]">
    <span className="text-[6.5pt] uppercase tracking-wider font-bold text-dnd-red-dark text-center leading-tight">
      Danger
    </span>
    {DANGER_FEEL.map(([level, feel]) => (
      <div
        key={level}
        className={twMerge(
          "w-full h-[17mm] border-2 rounded-sm flex flex-col items-center justify-center text-center px-[0.5mm]",
          level === 3 ? "border-dnd-red-dark" : "border-dnd-ink/50",
        )}
      >
        <span className="libre text-[16pt] font-bold leading-none text-dnd-ink/25">
          {level === 5 ? "5+" : level}
        </span>
        <span className="text-[5pt] italic leading-tight text-dnd-ink/60 mt-0.5">{feel}</span>
      </div>
    ))}
    <span className="text-[6pt] italic text-dnd-ink/60 text-center leading-tight">Default 3. Mark it with a token.</span>
  </div>
);

// -----------------------------------------------------------------------------
// Page 1: the front
// -----------------------------------------------------------------------------

const Front: React.FC<Props> = ({ rb, character, build, inventory }) => {
  const race = rb.races.find((r) => r.id === build.raceId);
  const background = rb.backgrounds.find((b) => b.id === build.backgroundId);
  const classes = rb.classes.filter((c) => build.classes[c.id]);
  const skills = skillsByPool(rb, build);
  const carried = inventory.filter((row) => row.carried && !row.broken);
  const carriedItems = carried
    .map((row) => rb.items.find((i) => i.id === row.item_id))
    .filter((i) => i !== undefined);
  const armour = armourTotals(carriedItems);
  const weapons = carriedItems.filter((i) => i.kind === "weapon" || i.kind === "shield");
  const languages = [...freeLanguages(rb, build), ...build.languages]
    .map((id) => rb.languages.find((l) => l.id === id)?.name)
    .filter(Boolean)
    .join(", ");

  return (
    <Page fixed className="gap-[3mm] text-[8pt] leading-snug">
      {/* Header */}
      <header className="flex gap-[4mm]">
        <div className="relative w-[32mm] h-[42mm] shrink-0 border-2 border-dnd-gold bg-dnd-bg">
          {character.image_url && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={character.image_url}
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          )}
        </div>
        <div className="flex-1 min-w-0 flex flex-col">
          <p className="text-[7pt] uppercase tracking-[0.2em] text-dnd-ink/60">Character sheet</p>
          <h1 className="libre caps text-[22pt] font-bold text-dnd-red-dark leading-tight border-b-2 border-dnd-gold pb-1 mb-1">
            {character.name}
          </h1>
          <p className="libre font-bold text-[10pt]">
            {classes.length
              ? classes.map((c, i) => (
                  <Fragment key={c.id}>
                    {i > 0 && " · "}
                    {c.name} {build.classes[c.id]}
                  </Fragment>
                ))
              : "No classes yet"}
          </p>
          <dl className="grid grid-cols-[auto_1fr_auto_1fr] gap-x-[3mm] gap-y-0.5 mt-1">
            <dt className="font-bold text-dnd-red-dark">Race</dt>
            <dd>{race?.name ?? "—"}</dd>
            <dt className="font-bold text-dnd-red-dark">Background</dt>
            <dd>{background?.name ?? "—"}</dd>
            <dt className="font-bold text-dnd-red-dark">Speed</dt>
            <dd className="col-span-3">{race ? `${race.speed} m` : "—"}</dd>
            <dt className="font-bold text-dnd-red-dark">Languages</dt>
            <dd className="col-span-3">{languages || "—"}</dd>
            {background?.known_settings && (
              <>
                <dt className="font-bold text-dnd-red-dark">Known settings</dt>
                <dd className="col-span-3">
                  {background.known_settings}{" "}
                  <span className="italic text-dnd-ink/70">(+1 to Soul and Charisma rolls there)</span>
                </dd>
              </>
            )}
          </dl>
        </div>
        <div className="w-[20mm] shrink-0 self-start flex flex-col items-center border-2 border-dnd-red-dark rounded-sm py-1">
          <span className="libre text-[20pt] font-bold leading-none text-dnd-red-dark">{character.level}</span>
          <span className="text-[6.5pt] uppercase tracking-wider font-bold">Level</span>
        </div>
      </header>

      {/* Pools and their skills, with the Danger Level track at the side */}
      <div className="grid grid-cols-[1fr_1fr_1fr_17mm] gap-[3mm]">
        {POOLS.map((pool) => {
          const style = RESOURCE_STYLES[pool];
          const value = build[pool];
          return (
            <div key={pool} className={twMerge("border-t-[5px] border border-dnd-gold rounded-sm p-[2mm] flex flex-col gap-1", style.border)}>
              <div className="flex items-center justify-between">
                <span className={twMerge("flex items-center gap-1 libre font-bold uppercase tracking-wider text-[10pt]", style.text)}>
                  {style.icon} {RESOURCE_NAMES[pool]}
                </span>
                <span className="libre text-[18pt] font-bold leading-none">{value}</span>
              </div>
              <div className="flex flex-wrap gap-[1.2mm] min-h-[5mm]">
                {Array.from({ length: Math.max(value, 1) }, (_, i) => (
                  <span
                    key={i}
                    className={twMerge(
                      "inline-block w-[5mm] h-[5mm] border-2 bg-white",
                      style.border,
                      value === 0 && "border-dashed opacity-50",
                    )}
                  />
                ))}
              </div>
              <table className="w-full mt-1">
                <tbody>
                  {skills[pool].map(({ skill, level, classes: from }) => (
                    <tr key={skill.name} className="border-b border-dnd-gold/40 last:border-0 align-top">
                      <td className="py-[0.3mm] pr-1">
                        {skill.name}
                        {skill.is_unique && <span title="Unique" className="text-dnd-red"> ★</span>}
                        <span className="block text-[6.5pt] italic text-dnd-ink/60 leading-tight">{from.join(", ")}</span>
                      </td>
                      <td className="py-[0.3mm] text-right font-bold libre w-[7mm]">+{level}</td>
                    </tr>
                  ))}
                  {skills[pool].length === 0 && (
                    <tr>
                      <td className="italic text-dnd-ink/60">No {RESOURCE_NAMES[pool]} skills</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          );
        })}
        <DangerTrack />
      </div>
      <p className="text-[6.5pt] italic text-dnd-ink/70 -mt-[2mm]">
        Strike a box <strong>/</strong> when you exhaust a point, <strong>X</strong> when a Scar blocks it.
        ★ unique: only your class can try it. Any other non-unique skill: roll with no bonus.
      </p>

      {/* Armour, weapons, purse */}
      <div className="grid grid-cols-[38mm_1fr_40mm] gap-[3mm]">
        <Box>
          <Label>Armour</Label>
          <div className="flex items-baseline gap-2">
            <span className="libre text-[18pt] font-bold leading-none">{armour.rating}</span>
            <span>rating <span className="italic text-dnd-ink/70">({armour.protectionTier})</span></span>
          </div>
          <p>
            <strong>Encumbrance:</strong> {armour.encumbrance ? `exhaust ${armour.encumbrance} Body` : "none"}
          </p>
          <p className="text-[6.5pt] text-dnd-ink/70 leading-tight mt-1">
            Protection {armour.protection}, burden {armour.burden}
            {armour.fullHarness && ", fitted harness"}. Scar = damage − rating; averting a hit costs Danger − rating, at least 1.
          </p>
        </Box>
        <Box>
          <Label>Weapons</Label>
          <table className="w-full">
            <thead>
              <tr className="text-left text-[6.5pt] uppercase tracking-wider text-dnd-ink/70">
                <th className="font-bold">Weapon</th>
                <th className="font-bold">Damage</th>
                <th className="font-bold">Free</th>
                <th className="font-bold">Properties</th>
              </tr>
            </thead>
            <tbody>
              {weapons.map((w) => (
                <tr key={w.id} className="border-b border-dnd-gold/40 last:border-0 align-top">
                  <td className="pr-1 font-bold">{w.name}</td>
                  <td className="pr-1 whitespace-nowrap">
                    {w.damage ? `${w.damage} + lvl` : "—"}
                    {w.damage_type && <span className="text-dnd-ink/70"> {w.damage_type}</span>}
                  </td>
                  <td className="pr-1">
                    {w.kind === "shield" ? "Defense / round" : w.free_manoeuvre ? MANOEUVRE_NAMES[w.free_manoeuvre] : "—"}
                  </td>
                  <td className="text-[7pt]">{w.properties ?? ""}</td>
                </tr>
              ))}
              {Array.from({ length: Math.max(0, 3 - weapons.length) }, (_, i) => (
                <tr key={`blank-${i}`} className="border-b border-dnd-gold/40 last:border-0">
                  <td colSpan={4} className="h-[5mm]" />
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
        <Box className="flex flex-col gap-1">
          <Label>Purse</Label>
          <div className="grid grid-cols-3 gap-1">
            <WriteIn label="Gold" />
            <WriteIn label="Silver" />
            <WriteIn label="Copper" />
          </div>
          <WriteIn label="Material" hint="1 Material = 1 silver" />
          {background && (
            <p className="text-[6.5pt] italic text-dnd-ink/60 leading-tight">
              Started with {formatCoins(background.coins_copper)}, {background.material} Material
            </p>
          )}
        </Box>
      </div>

      {/* Scars and dying */}
      <div className="grid grid-cols-[1fr_42mm] gap-[3mm] items-start">
        <Box>
          <Label>Scars</Label>
          <table className="w-full">
            <thead>
              <tr className="text-left text-[6.5pt] uppercase tracking-wider text-dnd-ink/70">
                <th className="font-bold w-[16mm]">Pool</th>
                <th className="font-bold w-[10mm]">Level</th>
                <th className="font-bold">What happened</th>
                <th className="font-bold w-[30mm]">Healing (5 a level)</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: SCAR_ROWS }, (_, i) => (
                <tr key={i} className="border-b border-dnd-ink/25">
                  <td className="h-[6mm]" />
                  <td />
                  <td />
                  <td />
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
        <Box className="flex flex-col gap-2">
          <Label>Dying</Label>
          <p className="text-[6.5pt] leading-tight">
            A Scar bigger than its pool, or one on a fully blocked pool. d20 each turn: 10+ succeeds.
          </p>
          <p className="flex items-center justify-between"><strong>Successes</strong> <Circles count={3} /></p>
          <p className="flex items-center justify-between"><strong>Failures</strong> <Circles count={3} /></p>
          <p className="text-[6.5pt] italic text-dnd-ink/70 leading-tight">
            Body: dying. Soul: madness. Charisma: ruined name.
          </p>
        </Box>
      </div>

    </Page>
  );
};

// -----------------------------------------------------------------------------
// Perks and spells
// -----------------------------------------------------------------------------

const SpellLine: React.FC<{ perk: Tables<"perks"> }> = ({ perk }) => {
  const parts = [
    perk.components?.length && `Components: ${perk.components.map((c) => c[0].toUpperCase()).join(", ")}${perk.material_note ? ` (${perk.material_note})` : ""}`,
    perk.range && `Range: ${perk.range}`,
    perk.area && `Area: ${perk.area}`,
    perk.duration && `Duration: ${DURATION_NAMES[perk.duration] ?? perk.duration}`,
    perk.damage && `Damage: ${perk.damage}${perk.damage_types?.length ? ` ${perk.damage_types.join(", ")}` : ""}`,
  ].filter(Boolean);
  if (!parts.length) return null;
  return <p className="text-[7pt] text-dnd-ink/80">{parts.join(" · ")}</p>;
};

const PerkEntry: React.FC<{ perk: Tables<"perks">; tag?: string }> = ({ perk, tag }) => {
  const cost = perk.kind === "aspect" ? null : costOf(perk);
  return (
    <article className="break-inside-avoid mb-[3mm]">
      <h4 className="flex flex-wrap items-baseline gap-x-2">
        <span className="libre font-bold text-[10pt] text-dnd-red-dark">{perk.name}</span>
        {tag && <span className="text-[6.5pt] uppercase tracking-wider font-bold text-dnd-ink/60">{tag}</span>}
        {cost ? (
          <span
            className={twMerge(
              "text-[7pt] font-semibold rounded-full border px-1.5",
              perk.cost_resource && RESOURCE_STYLES[perk.cost_resource].pill,
            )}
          >
            {cost}
          </span>
        ) : (
          perk.kind !== "aspect" && <span className="text-[7pt] italic text-dnd-ink/60">Passive</span>
        )}
        {perk.cost_resource && <span className="inline-block w-[3mm] h-[3mm] border border-dnd-ink/60" title="Used" />}
      </h4>
      {perk.flavour && <p className="font-bold italic">{perk.flavour}</p>}
      {perk.kind === "spell" && <SpellLine perk={perk} />}
      {perk.description && <p className="whitespace-pre-line">{perk.description}</p>}
    </article>
  );
};

const PerkPages: React.FC<Props> = ({ rb, build }) => {
  const classes = rb.classes.filter((c) => build.classes[c.id]);
  const aspects = new Set(heldAspects(rb, build).map((a) => a.id));
  const racial = build.perks
    .filter((p) => p.classId === null)
    .map((p) => findPerk(rb, p.perkId))
    .filter((p) => p !== undefined);
  const race = rb.races.find((r) => r.id === build.raceId);

  return (
    <Page className="text-[8pt] leading-snug">
      <h2 className="libre caps text-[16pt] font-bold text-dnd-red-dark border-b-2 border-dnd-gold mb-[3mm]">
        Perks and spells
      </h2>
      <div className="columns-2 gap-[6mm]">
        {racial.length > 0 && (
          <>
            <Label className="break-after-avoid">{race?.name ?? "Race"}</Label>
            {racial.map((p) => (
              <PerkEntry key={p.id} perk={p} tag="Racial" />
            ))}
          </>
        )}
        {classes.map((cls) => {
          const held = [
            ...aspectsOf(rb, cls.id).filter((a) => aspects.has(a.id)).map((p) => ({ p, tag: "Aspect" })),
            ...coreSpells(rb, cls.id).map((p) => ({ p, tag: "Core spell" })),
            ...chosenIn(build, cls.id)
              .map((c) => findPerk(rb, c.perkId))
              .filter((p) => p !== undefined)
              .map((p) => ({ p, tag: p.kind === "spell" ? "Spell" : undefined })),
          ];
          return (
            <Fragment key={cls.id}>
              <Label className="break-after-avoid mt-[2mm]">
                {cls.name} {build.classes[cls.id]}
              </Label>
              {held.length === 0 && <p className="italic text-dnd-ink/60 mb-[3mm]">No perks yet.</p>}
              {held.map(({ p, tag }) => (
                <PerkEntry key={p.id} perk={p} tag={tag} />
              ))}
            </Fragment>
          );
        })}
      </div>
    </Page>
  );
};

// -----------------------------------------------------------------------------
// The last page: gear, traits and story
// -----------------------------------------------------------------------------

/** Incantors keep a ritual item: the class with the Ritual items skill */
const hasRitualItem = (rb: Rulebook, build: Build) =>
  rb.skills.some((s) => build.classes[s.class_id] && /ritual items|rituální předměty/i.test(s.name));

const StoryPage: React.FC<Props> = ({ rb, character, build, inventory, t }) => {
  const traits = rb.traits.filter((t) => build.traitIds.includes(t.id));
  const nameOf = (row: Tables<"character_items">) =>
    row.name ?? (row.item_id ? itemName(rb.items, row.item_id) : "Unknown item");
  const groups = [
    { label: "Carried", rows: inventory.filter((i) => i.carried) },
    { label: "Left behind", rows: inventory.filter((i) => !i.carried) },
  ];

  return (
    <Page className="text-[8pt] leading-snug flex flex-col gap-[4mm]">
      <h2 className="libre caps text-[16pt] font-bold text-dnd-red-dark border-b-2 border-dnd-gold">
        Gear and story
      </h2>
      <div className="grid grid-cols-2 gap-[6mm]">
        {groups.map((g) => (
          <div key={g.label}>
            <Label>{g.label}</Label>
            <ul>
              {g.rows.map((row) => (
                <li key={row.id} className="flex gap-1 border-b border-dnd-ink/25 min-h-[5.5mm] items-center">
                  <span className="w-[6mm] text-right font-bold">{row.quantity > 1 ? `${row.quantity}×` : ""}</span>
                  <span className={row.broken ? "line-through text-dnd-ink/60" : ""}>{nameOf(row)}</span>
                  {row.broken && <span className="italic text-dnd-ink/60">(broken)</span>}
                  {row.note && <span className="text-dnd-ink/60">· {row.note}</span>}
                </li>
              ))}
              {Array.from({ length: Math.max(3, 8 - g.rows.length) }, (_, i) => (
                <li key={`blank-${i}`} className="border-b border-dnd-ink/25 h-[5.5mm]" />
              ))}
            </ul>
          </div>
        ))}
      </div>

      {traits.length > 0 && (
        <div>
          <Label>Traits</Label>
          <div className="grid grid-cols-2 gap-x-[6mm] gap-y-[2mm]">
            {traits.map((t) => (
              <div key={t.id} className="break-inside-avoid">
                <p className="libre font-bold text-dnd-red-dark">{t.name}</p>
                {t.flavour && <p className="font-bold italic">{t.flavour}</p>}
                <p><strong>+</strong> {t.upside}</p>
                <p><strong>−</strong> {t.downside}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {hasRitualItem(rb, build) && (
        <div className="break-inside-avoid">
          <Label>{t.kinds["ritual-item"]}</Label>
          <div className="grid grid-cols-[1fr_60mm] gap-[6mm] items-start">
            <RitualCharging t={t.ritual} className="text-[7.5pt]" />
            <div>
              <p className="font-bold">Name and form</p>
              <Lines count={2} />
              <p className="font-bold mt-2">What of you it holds</p>
              <Lines count={1} />
              <ul className="mt-2 list-disc pl-4 text-[7pt] text-dnd-ink/80 flex flex-col gap-0.5">
                <li>{t.rules.ritualUse}</li>
                <li>{t.rules.ritualLost}</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-[6mm]">
        <div>
          <Label>Companions and networks</Label>
          <Lines count={4} />
        </div>
        <div>
          <Label>Organizations and Standing</Label>
          <Lines count={4} />
        </div>
      </div>

      {character.personality && (
        <div className="break-inside-avoid">
          <Label>Personality</Label>
          <p className="libre italic whitespace-pre-line">{character.personality}</p>
        </div>
      )}
      {character.backstory && (
        <div>
          <Label>Backstory</Label>
          <p className="whitespace-pre-line text-justify">{character.backstory}</p>
        </div>
      )}
      <div>
        <Label className="break-after-avoid">Notes</Label>
        <Lines count={hasRitualItem(rb, build) ? 3 : NOTE_LINES} />
      </div>
    </Page>
  );
};

const PrintSheet: React.FC<Props> = (props) => (
  <div className="char-sheet">
    <Front {...props} />
    <PerkPages {...props} />
    <StoryPage {...props} />
  </div>
);

export default PrintSheet;
