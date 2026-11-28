// The character sheet on A4 paper. Page 1 is the front, laid out to fit one
// sheet: pools to strike through in pencil, skills by resource, a Danger Level
// track for a token, armour, weapons, purse and Scars. Perks and spells flow on from page
// 2 over as many sheets as they need; the gear and the story close it.
//
// The front and the last page each fill exactly one sheet: the Scars on the front and
// the notes on the last page stretch or shrink to take up whatever space is left.

import { Fragment } from "react";
import { twMerge } from "tailwind-merge";
import { type Pool, RESOURCE_STYLES } from "@/components/game/resources";
import RitualCharging from "@/components/game/ritualCharging";
import type { Dict } from "@/lib/i18n/dictionaries";
import { armourTotals } from "@/lib/rules/armour";
import {
  aspectsOf,
  chosenIn,
  backgroundVariant,
  coreSpells,
  findPerk,
  freeLanguages,
  heldAspects,
  type Build,
  type Rulebook,
} from "@/lib/rules/character";
import { useL } from "@/lib/i18n/client";
import {
  componentName,
  costOf,
  damageTypeName,
  durationName,
  formatCoins,
  propertiesText,
  resourceName,
} from "@/lib/rules/format";
import { groupByBundle, itemName } from "@/lib/rules/equipment";
import type { Tables } from "@/lib/types/database.types";

const POOLS: Pool[] = ["body", "soul", "charisma"];
/** Enough rows to fill any leftover space; the box clips what doesn't fit */
const FILL_ROWS = 40;
/** Inventory rows in each column, at least */
const GEAR_ROWS = 12;
/** Columns of the Scars list: pool, level, what happened, healing */
const SCAR_COLS = "grid grid-cols-[16mm_10mm_1fr_30mm]";

type Props = {
  rb: Rulebook;
  character: Tables<"characters">;
  build: Build;
  inventory: Tables<"character_items">[];
  /** The reader's language: the sheet's own words, and the ritual item card's */
  dict: Dict;
};

// -----------------------------------------------------------------------------
// Pieces
// -----------------------------------------------------------------------------

/** One A4 sheet on screen; on paper the @page rule sets the size and the browser paginates */
const Page: React.FC<{ children: React.ReactNode; fill?: boolean; className?: string }> = ({
  children,
  fill,
  className,
}) => (
  <section
    className={twMerge(
      "sheet-page bg-white text-dnd-ink w-[210mm] p-[10mm] mx-auto mb-8 shadow-[0_0_12px_rgba(0,0,0,0.3)]",
      "min-h-[297mm]",
      // Fills one sheet exactly: one section stretches to take the space that's left
      fill && "sheet-fill flex flex-col",
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

const Lines: React.FC<{ count: number; className?: string }> = ({ count, className }) => (
  <div className={className}>
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

/** Danger Level 1–5 at the side of the pools: the player moves a token on it */
const DangerTrack: React.FC<{ p: Dict["print"] }> = ({ p }) => (
  <div className="flex flex-col items-center gap-[1.5mm]">
    <span className="text-[6.5pt] uppercase tracking-wider font-bold text-dnd-red-dark text-center leading-tight">
      {p.danger}
    </span>
    {[5, 4, 3, 2, 1].map((level) => [level, p.feel[level - 1]] as const).map(([level, feel]) => (
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
    <span className="text-[6pt] italic text-dnd-ink/60 text-center leading-tight">{p.dangerHint}</span>
  </div>
);

// -----------------------------------------------------------------------------
// Page 1: the front
// -----------------------------------------------------------------------------

const Front: React.FC<Props> = ({ rb, character, build, inventory, dict }) => {
  const p = dict.print;
  const lang = dict.lang;
  const race = rb.races.find((r) => r.id === build.raceId);
  const background = rb.backgrounds.find((b) => b.id === build.backgroundId);
  const variant = backgroundVariant(rb, build);
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
    <Page fill className="gap-[3mm] text-[8pt] leading-snug">
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
          <p className="text-[7pt] uppercase tracking-[0.2em] text-dnd-ink/60">{p.title}</p>
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
              : dict.sheet.noClasses}
          </p>
          <dl className="grid grid-cols-[auto_1fr_auto_1fr] gap-x-[3mm] gap-y-0.5 mt-1">
            <dt className="font-bold text-dnd-red-dark">{p.race}</dt>
            <dd>{race?.name ?? "—"}</dd>
            <dt className="font-bold text-dnd-red-dark">{p.background}</dt>
            <dd>{background?.name ?? "—"}</dd>
            <dt className="font-bold text-dnd-red-dark">{p.speed}</dt>
            <dd className="col-span-3">{race ? `${race.speed} m` : "—"}</dd>
            <dt className="font-bold text-dnd-red-dark">{p.languages}</dt>
            <dd className="col-span-3">{languages || "—"}</dd>
            {background?.known_settings && (
              <>
                <dt className="font-bold text-dnd-red-dark">{p.knownSettings}</dt>
                <dd className="col-span-3">
                  {background.known_settings}{" "}
                  <span className="italic text-dnd-ink/70">{p.knownHint}</span>
                </dd>
              </>
            )}
          </dl>
        </div>
        <div className="w-[20mm] shrink-0 self-start flex flex-col items-center border-2 border-dnd-red-dark rounded-sm py-1">
          <span className="libre text-[20pt] font-bold leading-none text-dnd-red-dark">{character.level}</span>
          <span className="text-[6.5pt] uppercase tracking-wider font-bold">{p.level}</span>
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
                  {style.icon} {resourceName(pool, lang)}
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
                        {skill.is_unique && <span title={p.unique} className="text-dnd-red"> ★</span>}
                        <span className="block text-[6.5pt] italic text-dnd-ink/60 leading-tight">{from.join(", ")}</span>
                      </td>
                      <td className="py-[0.3mm] text-right font-bold libre w-[7mm]">+{level}</td>
                    </tr>
                  ))}
                  {skills[pool].length === 0 && (
                    <tr>
                      <td className="italic text-dnd-ink/60">{p.noSkills(resourceName(pool, lang))}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          );
        })}
        <DangerTrack p={p} />
      </div>
      <p className="text-[6.5pt] italic text-dnd-ink/70 -mt-[2mm]">
        {p.boxHint}
      </p>

      {/* Armour, weapons, purse */}
      <div className="grid grid-cols-[38mm_1fr_40mm] gap-[3mm]">
        <Box>
          <Label>{p.armour}</Label>
          <div className="flex items-baseline gap-2">
            <span className="libre text-[18pt] font-bold leading-none">{armour.rating}</span>
            <span>{p.rating} <span className="italic text-dnd-ink/70">({dict.sheet.armour.tiers[armour.protectionTier]})</span></span>
          </div>
          <p>
            <strong>{p.encumbrance}</strong> {armour.encumbrance ? p.exhaustBody(armour.encumbrance) : p.none}
          </p>
          <p className="text-[6.5pt] text-dnd-ink/70 leading-tight mt-1">
            {p.armourNote(armour.protection, armour.burden, armour.fullHarness)}
          </p>
        </Box>
        <Box>
          <Label>{p.weapons}</Label>
          <table className="w-full">
            <thead>
              <tr className="text-left text-[6.5pt] uppercase tracking-wider text-dnd-ink/70">
                {p.weaponHead.map((h) => (
                  <th key={h} className="font-bold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {weapons.map((w) => (
                <tr key={w.id} className="border-b border-dnd-gold/40 last:border-0 align-top">
                  <td className="pr-1 font-bold">{w.name}</td>
                  <td className="pr-1 whitespace-nowrap">
                    {w.damage ? `${propertiesText(w.damage, lang)} ${p.plusLevel}` : "—"}
                    {w.damage_type && <span className="text-dnd-ink/70"> {damageTypeName(w.damage_type, lang)}</span>}
                  </td>
                  <td className="pr-1">
                    {w.kind === "shield" ? p.shieldDefense : w.free_manoeuvre ? dict.manoeuvres[w.free_manoeuvre] : "—"}
                  </td>
                  <td className="text-[7pt]">{w.properties ? propertiesText(w.properties, lang) : ""}</td>
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
          <Label>{p.purse}</Label>
          <div className="grid grid-cols-3 gap-1">
            <WriteIn label={p.gold} />
            <WriteIn label={p.silver} />
            <WriteIn label={p.copper} />
          </div>
          <WriteIn label={p.material} hint={p.materialHint} />
          {variant && (
            <p className="text-[6.5pt] italic text-dnd-ink/60 leading-tight">
              {p.startedWith(formatCoins(variant.coins_copper, lang), variant.material)}
            </p>
          )}
        </Box>
      </div>

      {/* Scars and dying: they take what's left of the sheet, but never fewer than five rows */}
      <div className="flex-[1_1_0px] min-h-[42mm] flex gap-[3mm]">
        <Box className="flex-1 min-w-0 flex flex-col">
          <Label>{p.scars}</Label>
          <div className={twMerge(SCAR_COLS, "text-[6.5pt] uppercase tracking-wider text-dnd-ink/70 font-bold")}>
            {p.scarHead.map((h) => (
              <span key={h}>{h}</span>
            ))}
          </div>
          {/* As many rows as fit; the rest are clipped */}
          <div className="flex-[1_1_0px] min-h-0 overflow-hidden">
            {Array.from({ length: FILL_ROWS }, (_, i) => (
              <div key={i} className={twMerge(SCAR_COLS, "h-[6mm] border-b border-dnd-ink/25")} />
            ))}
          </div>
        </Box>
        <Box className="w-[42mm] shrink-0 flex flex-col gap-2 self-start">
          <Label>{p.dying}</Label>
          <p className="text-[6.5pt] leading-tight">
            {p.dyingHint}
          </p>
          <p className="flex items-center justify-between"><strong>{p.successes}</strong> <Circles count={3} /></p>
          <p className="flex items-center justify-between"><strong>{p.failures}</strong> <Circles count={3} /></p>
          <p className="text-[6.5pt] italic text-dnd-ink/70 leading-tight">
            {p.dyingPools}
          </p>
        </Box>
      </div>

    </Page>
  );
};

// -----------------------------------------------------------------------------
// Perks and spells
// -----------------------------------------------------------------------------

const SpellLine: React.FC<{ perk: Tables<"perks">; dict: Dict }> = ({ perk, dict }) => {
  const p = dict.print;
  const lang = dict.lang;
  const parts = [
    perk.components?.length &&
      `${p.components}: ${perk.components.map((c) => componentName(c, lang)[0]).join(", ")}${perk.material_note ? ` (${perk.material_note})` : ""}`,
    perk.range && `${p.range}: ${perk.range}`,
    perk.area && `${p.area}: ${perk.area}`,
    perk.duration && `${p.duration}: ${durationName(perk.duration, lang)}`,
    perk.damage &&
      `${p.damage}: ${perk.damage}${perk.damage_types?.length ? ` ${perk.damage_types.map((d) => damageTypeName(d, lang)).join(", ")}` : ""}`,
  ].filter(Boolean);
  if (!parts.length) return null;
  return <p className="text-[7pt] text-dnd-ink/80">{parts.join(" · ")}</p>;
};

const PerkEntry: React.FC<{ perk: Tables<"perks">; tag?: string; dict: Dict }> = ({ perk, tag, dict }) => {
  const cost = perk.kind === "aspect" ? null : costOf(perk, dict.lang);
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
          perk.kind !== "aspect" && <span className="text-[7pt] italic text-dnd-ink/60">{dict.print.passive}</span>
        )}
        {perk.cost_resource && <span className="inline-block w-[3mm] h-[3mm] border border-dnd-ink/60" title={dict.print.used} />}
      </h4>
      {perk.flavour && <p className="font-bold italic">{perk.flavour}</p>}
      {perk.kind === "spell" && <SpellLine perk={perk} dict={dict} />}
      {perk.description && <p className="whitespace-pre-line">{perk.description}</p>}
    </article>
  );
};

const PerkPages: React.FC<Props> = ({ rb, build, dict }) => {
  const p = dict.print;
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
        {p.perksAndSpells}
      </h2>
      <div className="columns-2 gap-[6mm]">
        {racial.length > 0 && (
          <>
            <Label className="break-after-avoid">{race?.name ?? p.race}</Label>
            {racial.map((perk) => (
              <PerkEntry key={perk.id} perk={perk} tag={p.tags.racial} dict={dict} />
            ))}
          </>
        )}
        {classes.map((cls) => {
          const held = [
            ...aspectsOf(rb, cls.id)
              .filter((a) => aspects.has(a.id))
              .map((perk) => ({ perk, tag: p.tags.aspect })),
            ...coreSpells(rb, cls.id).map((perk) => ({ perk, tag: p.tags.core })),
            ...chosenIn(build, cls.id)
              .map((c) => findPerk(rb, c.perkId))
              .filter((perk) => perk !== undefined)
              .map((perk) => ({ perk, tag: perk.kind === "spell" ? p.tags.spell : undefined })),
          ];
          return (
            <Fragment key={cls.id}>
              <Label className="break-after-avoid mt-[2mm]">
                {cls.name} {build.classes[cls.id]}
              </Label>
              {held.length === 0 && <p className="italic text-dnd-ink/60 mb-[3mm]">{p.noPerks}</p>}
              {held.map(({ perk, tag }) => (
                <PerkEntry key={perk.id} perk={perk} tag={tag} dict={dict} />
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

const StoryPage: React.FC<Props> = ({ rb, character, build, inventory, dict }) => {
  const t = dict.statBlock;
  const p = dict.print;
  const l = useL();
  const traits = rb.traits.filter((trait) => build.traitIds.includes(trait.id));
  const nameOf = (row: Tables<"character_items">) =>
    row.name ?? (row.item_id ? itemName(rb.items, row.item_id) : p.unknownItem);
  const gear = groupByBundle(inventory);
  const gearRows = Math.max(GEAR_ROWS, gear.length + 3);

  return (
    <Page fill className="text-[8pt] leading-snug gap-[4mm]">
      <h2 className="libre caps text-[16pt] font-bold text-dnd-red-dark border-b-2 border-dnd-gold">
        {p.gearAndStory}
      </h2>
      {/* What they own, and an empty column for what they pick up in play */}
      <div className="grid grid-cols-2 gap-[6mm]">
        <div>
          <Label>{p.carried}</Label>
          <ul>
            {gear.map((group) =>
              group.bundle ? (
                <li key={`bundle-${group.rows[0].id}`} className="flex gap-1 border-b border-dnd-ink/25 min-h-[5.5mm] items-baseline py-[0.5mm]">
                  <span className="w-[6mm] shrink-0" />
                  <span>
                    <span className="font-bold">{itemName(rb.items, group.bundle)}:</span>{" "}
                    {group.rows.map((row, i) => (
                      <span key={row.id} className={row.broken ? "line-through text-dnd-ink/60" : ""}>
                        {i > 0 && ", "}
                        {row.quantity > 1 && `${row.quantity}× `}
                        {nameOf(row)}
                      </span>
                    ))}
                  </span>
                </li>
              ) : (
                group.rows.map((row) => (
                  <li key={row.id} className="flex gap-1 border-b border-dnd-ink/25 min-h-[5.5mm] items-center">
                    <span className="w-[6mm] text-right font-bold">{row.quantity > 1 ? `${row.quantity}×` : ""}</span>
                    <span className={row.broken ? "line-through text-dnd-ink/60" : ""}>{nameOf(row)}</span>
                    {row.broken && <span className="italic text-dnd-ink/60">{p.broken}</span>}
                    {!row.carried && <span className="italic text-dnd-ink/60">({p.leftBehind})</span>}
                    {row.note && <span className="text-dnd-ink/60">· {l(row.note)}</span>}
                  </li>
                ))
              ),
            )}
            {Array.from({ length: gearRows - gear.length }, (_, i) => (
              <li key={`blank-${i}`} className="border-b border-dnd-ink/25 h-[5.5mm]" />
            ))}
          </ul>
        </div>
        <div>
          <Label>{p.gathered}</Label>
          <ul>
            {Array.from({ length: gearRows }, (_, i) => (
              <li key={i} className="border-b border-dnd-ink/25 h-[5.5mm]" />
            ))}
          </ul>
        </div>
      </div>

      {traits.length > 0 && (
        <div>
          <Label>{p.traits}</Label>
          <div className="grid grid-cols-2 gap-x-[6mm] gap-y-[2mm]">
            {traits.map((trait) => (
              <div key={trait.id} className="break-inside-avoid">
                <p className="libre font-bold text-dnd-red-dark">{trait.name}</p>
                {trait.flavour && <p className="font-bold italic">{trait.flavour}</p>}
                <p><strong>+</strong> {trait.upside}</p>
                <p><strong>−</strong> {trait.downside}</p>
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
              <p className="font-bold">{p.nameAndForm}</p>
              <Lines count={2} />
              <p className="font-bold mt-2">{p.holds}</p>
              <Lines count={1} />
              <ul className="mt-2 list-disc pl-4 text-[7pt] text-dnd-ink/80 flex flex-col gap-0.5">
                <li>{t.ritual.use}</li>
                <li>{t.ritual.lost}</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-[6mm]">
        <div>
          <Label>{p.companions}</Label>
          <Lines count={4} />
        </div>
        <div>
          <Label>{p.organizations}</Label>
          <Lines count={4} />
        </div>
      </div>

      {character.personality && (
        <div className="break-inside-avoid">
          <Label>{p.personality}</Label>
          <p className="libre italic whitespace-pre-line">{character.personality}</p>
        </div>
      )}
      {character.backstory && (
        <div>
          <Label>{p.backstory}</Label>
          <p className="whitespace-pre-line text-justify">{character.backstory}</p>
        </div>
      )}
      {/* The notes take whatever is left of the sheet, and give way first when it's full */}
      <div className="flex-[1_1_0px] min-h-[14mm] overflow-hidden flex flex-col">
        <Label className="break-after-avoid">{p.notes}</Label>
        <Lines count={FILL_ROWS} className="flex-[1_1_0px] min-h-0 overflow-hidden" />
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
