"use client";

// Sections shared by the character sheet and the editor. Each one reads the
// build; given `edit`, it also shows the controls that change it.

import { useState } from "react";
import { toast } from "sonner";
import MagicBadge from "@/components/game/magicBadge";
import { SquareImage } from "@/components/game/perkCard";
import PerkTree, { type SectionProps } from "@/components/game/perkTree";
import StatBlock from "@/components/game/statBlock";
import { TraitList } from "@/components/game/traitCard";
import TraitText from "@/components/game/traitText";
import EquipmentList from "@/components/game/equipmentList";
import EquipmentPicker from "@/components/game/equipmentPicker";
import ItemIcon from "@/components/game/itemIcon";
import { ChoiceCard } from "@/components/ui/choiceCard";
import Eyebrow from "@/components/ui/eyebrow";
import FileButton from "@/components/ui/fileButton";
import NumberStepper from "@/components/ui/numberStepper";
import { Heading, Overline } from "@/components/ui/typography";
import {
  backgroundEquipment,
  BASE_RESOURCES,
  chosenIn,
  characterLevel,
  freeLanguages,
  languageSlots,
  relatedLanguageNames,
  STARTS,
} from "@/lib/rules/character";
import { armourTotals } from "@/lib/rules/armour";
import { defaultPicks, equipmentOf, groupByBundle, itemName } from "@/lib/rules/equipment";
import { useDict, useL } from "@/lib/i18n/client";
import { formatCoins, resourceName } from "@/lib/rules/format";
import type { Tables } from "@/lib/types/database.types";
import { createCustomTrait } from "./actions";
import { ClassCard, RaceCard, RacialPerks } from "./details";

const grid = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4";
const POOLS = ["body", "soul", "charisma"] as const;

/** A titled block with an anchor for the editor's section links */
export const Section: React.FC<{
  id: string;
  title: React.ReactNode;
  children: React.ReactNode;
}> = ({ id, title, children }) => (
  <section id={id} className="mb-16 scroll-mt-28">
    <Heading level={2} className="border-b-2 border-dnd-gold pb-2">
      {title}
    </Heading>
    {children}
  </section>
);

// ----- Header: portrait, name, classes and resources -----

interface HeaderProps extends SectionProps {
  name: string;
  imageUrl: string | null;
  level: number;
  ownerName?: string;
  /** Extra buttons, e.g. "Edit character" */
  actions?: React.ReactNode;
  onNameChange?: (name: string) => void;
  onPortraitChange?: (file: File) => void;
}

export const CharacterHeader: React.FC<HeaderProps> = ({
  rb,
  build,
  edit,
  name,
  imageUrl,
  level,
  ownerName,
  actions,
  onNameChange,
  onPortraitChange,
}) => {
  const t = useDict();
  const s = t.sheet;
  const race = rb.races.find((r) => r.id === build.raceId);
  const classes = rb.classes.filter((c) => build.classes[c.id]);
  const total = build.body + build.soul + build.charisma;

  return (
    <div className="flex flex-col md:flex-row bg-dnd-bg border border-dnd-red-dark rounded-lg shadow-md overflow-hidden mb-16">
      <div className="relative w-full md:w-64 aspect-[3/4] md:aspect-auto md:min-h-80 shrink-0 bg-skeleton">
        {imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageUrl}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-dnd-ink/60">
            {s.noPortrait}
          </div>
        )}
        {onPortraitChange && (
          <FileButton
            onFile={onPortraitChange}
            className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs shadow"
          >
            {imageUrl ? s.changePortrait : s.addPortrait}
          </FileButton>
        )}
      </div>

      <div className="flex-1 p-6 flex flex-col gap-3 min-w-0">
        <div className="flex flex-wrap gap-2">
          <Eyebrow
            text={
              edit ? s.levelOf(characterLevel(build), level) : s.level(level)
            }
            color="yellow"
          />
          {race && <Eyebrow text={race.name} color="green" />}
        </div>
        {onNameChange ? (
          <input
            aria-label={s.name}
            placeholder={s.namePlaceholder}
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            className="libre text-2xl font-bold text-dnd-red-dark"
          />
        ) : (
          <Heading level={1} className="mb-0 border-b-0 pb-0">
            {name}
          </Heading>
        )}
        {ownerName && (
          <p className="text-xs text-dnd-ink/75">{s.playedBy(ownerName)}</p>
        )}
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
          {classes.length === 0
            ? s.noClasses
            : classes.map((c) => (
                <span key={c.id} className="font-bold libre">
                  {c.name} {build.classes[c.id]} <MagicBadge magic={c.magic} />
                </span>
              ))}
        </p>

        {/* Perk bonuses, exhaustion and scars aren't tracked yet */}
        <div className="flex flex-col gap-2 mt-2">
          {POOLS.map((pool) => (
            <div key={pool} className="flex items-center gap-4">
              {edit && (
                <NumberStepper
                  label={resourceName(pool, t.lang)}
                  value={build[pool]}
                  canIncrease={
                    total < BASE_RESOURCES ||
                    (edit.remaining > 0 && edit.freePoints > 0)
                  }
                  onChange={(v) => edit.setBuild({ ...build, [pool]: v })}
                />
              )}
              <StatBlock resource={pool} base={build[pool]} />
            </div>
          ))}
        </div>
        {edit && (
          <p className="text-xs text-dnd-ink/70">
            {s.spread(BASE_RESOURCES, total, total - BASE_RESOURCES)}
          </p>
        )}
        {actions && <div className="flex gap-2 mt-2">{actions}</div>}
      </div>
    </div>
  );
};

// ----- Starting level (new characters only) -----

export const StartSection: React.FC<{
  level: number;
  onChange: (level: number) => void;
}> = ({ level, onChange }) => {
  const t = useDict();
  return (
    <Section id="start" title={t.sheet.startingLevel}>
      <div className={grid}>
        {STARTS.map((start, i) => (
          <ChoiceCard
            key={start.level}
            title={t.build.starts[i]}
            note={t.sheet.level(start.level)}
            checked={level === start.level}
            onSelect={() => onChange(start.level)}
          />
        ))}
      </div>
    </Section>
  );
};

// ----- Race -----

export const RaceSection: React.FC<SectionProps> = (props) => {
  const { rb, build, edit } = props;
  const s = useDict().sheet;

  if (!edit) {
    if (!build.raceId)
      return (
        <Section id="race" title={s.race}>
          <p>{s.noRace}</p>
        </Section>
      );
    return (
      <Section id="race" title={s.race}>
        <div className="grid grid-cols-1 sm:grid-cols-[13rem_1fr] gap-6 items-start">
          <RaceCard {...props} raceId={build.raceId} />
          <div>
            <Overline>{s.racialPerk}</Overline>
            <RacialPerks {...props} raceId={build.raceId} onlyHeld />
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section id="race" title={s.race}>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
        {rb.races.map((race) => (
          <RaceCard key={race.id} {...props} raceId={race.id} />
        ))}
      </div>
      {build.raceId && (
        <>
          <Heading level={3}>{s.racialPerkPick}</Heading>
          <RacialPerks {...props} raceId={build.raceId} />
        </>
      )}
    </Section>
  );
};

// ----- Classes -----

const RANKS = ["basic", "advanced", "mighty"] as const;

const classGrid = "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4";

export const ClassesSection: React.FC<SectionProps> = (props) => {
  const { rb, build, edit } = props;
  const t = useDict();
  const s = t.sheet;

  if (!edit) {
    const taken = rb.classes.filter((c) => build.classes[c.id]);
    return (
      <Section id="classes" title={s.classes}>
        {taken.length === 0 ? (
          <p>{s.noClassesYet}</p>
        ) : (
          <div className={classGrid}>
            {taken.map((c) => (
              <ClassCard key={c.id} {...props} classId={c.id} />
            ))}
          </div>
        )}
      </Section>
    );
  }

  return (
    <Section id="classes" title={s.classes}>
      <p className="text-sm mb-8">
        {s.classesHelp}
      </p>
      {RANKS.map((rank) => (
        <div key={rank} className="mb-10">
          <Heading level={3}>{t.classPage.rankPages[rank]}</Heading>
          <div className={classGrid}>
            {rb.classes
              .filter((c) => c.rank === rank)
              .map((c) => (
                <ClassCard key={c.id} {...props} classId={c.id} />
              ))}
          </div>
        </div>
      ))}
    </Section>
  );
};

// ----- Perks -----

export const PerksSection: React.FC<SectionProps> = (props) => {
  const { rb, build, edit } = props;
  const s = useDict().sheet;
  const [showAll, setShowAll] = useState(false);
  const taken = rb.classes.filter((c) => build.classes[c.id]);

  return (
    <Section
      id="perks"
      title={
        <span className="flex flex-wrap items-center justify-between gap-4">
          {s.perks}
          {!edit && taken.length > 0 && (
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="text-xs normal-case font-normal py-1"
            >
              {showAll ? s.onlyHeld : s.showEvery}
            </button>
          )}
        </span>
      }
    >
      {taken.length === 0 && <p>{s.classesFirst}</p>}
      {taken.map((cls) => {
        const level = build.classes[cls.id];
        const chosen = chosenIn(build, cls.id).length;
        return (
          <div key={cls.id} className="mb-12">
            <Heading
              level={3}
              className="flex flex-wrap items-center gap-x-3 gap-y-1"
            >
              {cls.name} {level} <MagicBadge magic={cls.magic} />
              <span
                className={`text-sm normal-case font-normal ${edit && chosen < level ? "text-dnd-red font-bold" : "text-dnd-ink/60"}`}
              >
                {s.perksPicked(chosen, level)}
              </span>
            </Heading>
            <PerkTree {...props} classId={cls.id} showAll={!!edit || showAll} />
          </div>
        );
      })}
    </Section>
  );
};

// ----- Background and languages -----

export const BackgroundSection: React.FC<SectionProps> = ({
  rb,
  build,
  edit,
}) => {
  const t = useDict();
  const s = t.sheet;
  const background = rb.backgrounds.find((b) => b.id === build.backgroundId);
  const free = freeLanguages(rb, build);
  const slots = languageSlots(rb, build);
  const languageName = (id: string) =>
    rb.languages.find((l) => l.id === id)?.name;

  if (!edit) {
    return (
      <Section id="background" title={s.background}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {background ? (
            <dl className="text-sm flex flex-col gap-2">
              <div>
                <dt className="font-bold libre text-dnd-red">
                  {background.name}
                </dt>
                {background.description && <dd>{background.description}</dd>}
              </div>
              <div>
                <dt className="font-bold">{s.purse}</dt>
                <dd>
                  {formatCoins(background.coins_copper, t.lang)} · {s.material(background.material)}
                </dd>
              </div>
              {background.known_settings && (
                <div>
                  <dt className="font-bold">{s.knownSettings}</dt>
                  <dd>{background.known_settings}</dd>
                </div>
              )}
            </dl>
          ) : (
            <p>{s.noBackground}</p>
          )}
          <div>
            <Heading level={4} className="mb-2">
              {s.languages}
            </Heading>
            <p className="text-sm">
              {[...free, ...build.languages].map(languageName).join(", ")}
            </p>
          </div>
        </div>
      </Section>
    );
  }

  const full = build.languages.length >= slots;
  return (
    <Section id="background" title={s.background}>
      <div className={`${grid} mb-10`}>
        {rb.backgrounds.map((bg) => (
          <ChoiceCard
            key={bg.id}
            title={bg.name}
            note={`${formatCoins(bg.coins_copper, t.lang)} · ${s.material(bg.material)} · ${s.extraLanguages(bg.extra_languages)}`}
            description={
              <>
                <EquipmentList items={rb.items} equipment={bg.equipment} className="mb-1" lang={t.lang} />
                {bg.known_settings && s.knownIn(bg.known_settings)}
              </>
            }
            checked={build.backgroundId === bg.id}
            // Fewer language slots may leave too many picked, and the gear
            // differs; start both over
            onSelect={() =>
              build.backgroundId !== bg.id &&
              edit.setBuild({
                ...build,
                backgroundId: bg.id,
                languages: [],
                equipment: defaultPicks(equipmentOf(rb.items, bg.equipment)),
              })
            }
          />
        ))}
      </div>

      {background && (
        <>
          <Heading level={3}>{s.gear}</Heading>
          <div className="mb-10">
            <EquipmentPicker
              items={rb.items}
              groups={backgroundEquipment(rb, build)}
              picks={build.equipment}
              onChange={(equipment) => edit.setBuild({ ...build, equipment })}
            />
          </div>
        </>
      )}

      <Heading level={3}>
        {s.languages}{" "}
        <span className="text-sm normal-case font-normal text-dnd-ink/60">
          {s.extraPicked(build.languages.length, slots)}
        </span>
      </Heading>
      <p className="text-sm mb-4">
        {s.youSpeak(free.map(languageName).join(s.and))}
      </p>
      <div className={grid}>
        {rb.languages
          .filter((l) => l.learnable && !free.includes(l.id))
          .map((lang) => {
            const checked = build.languages.includes(lang.id);
            return (
              <ChoiceCard
                key={lang.id}
                type="checkbox"
                title={lang.name}
                note={
                  relatedLanguageNames(rb, lang.id) &&
                  s.relatedTo(relatedLanguageNames(rb, lang.id))
                }
                description={lang.description}
                checked={checked}
                disabled={!checked && full}
                onSelect={() =>
                  edit.setBuild({
                    ...build,
                    languages: checked
                      ? build.languages.filter((l) => l !== lang.id)
                      : [...build.languages, lang.id],
                  })
                }
              />
            );
          })}
      </div>
    </Section>
  );
};

// ----- Inventory -----

/** What the character owns; shared by every campaign they're in */
export const InventorySection: React.FC<{
  items: Tables<"items">[];
  inventory: Tables<"character_items">[];
}> = ({ items, inventory }) => {
  const s = useDict().sheet;
  const l = useL();
  const nameOf = (row: Tables<"character_items">) =>
    row.name ?? (row.item_id ? itemName(items, row.item_id) : s.unknownItem);
  // Carried, unbroken armour pieces count as worn
  const armour = armourTotals(
    inventory
      .filter((row) => row.carried && !row.broken)
      .map((row) => items.find((i) => i.id === row.item_id))
      .filter((i) => i !== undefined),
  );
  const groups = [
    { label: s.carried, rows: inventory.filter((i) => i.carried) },
    { label: s.leftBehind, rows: inventory.filter((i) => !i.carried) },
  ].filter((g) => g.rows.length > 0);

  return (
    <Section id="inventory" title={s.inventory}>
      {groups.length === 0 && <p className="text-sm">{s.nothingYet}</p>}
      {armour.protection > 0 && (
        <p className="text-sm mb-6">
          <strong>{s.armour.label}</strong>{" "}
          {s.armour.line({
            rating: armour.rating,
            protection: armour.protection,
            protectionTier: s.armour.tiers[armour.protectionTier],
            encumbrance: armour.encumbrance,
            burden: armour.burden,
            burdenTier: s.armour.tiers[armour.burdenTier],
            harness: armour.fullHarness,
          })}
          {armour.doubled.length > 0 && s.armour.onePiece(armour.doubled.join(", "))}
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {groups.map((g) => (
          <div key={g.label}>
            <Overline>{g.label}</Overline>
            <ul className="text-sm flex flex-col gap-2">
              {groupByBundle(g.rows).map((group) =>
                group.bundle ? (
                  // A bundle: its name, then what's in it, each piece breakable on its own
                  <li key={`bundle-${group.rows[0].id}`} className="flex gap-2">
                    <ItemIcon item={items.find((i) => i.id === group.bundle)} />
                    <div className="min-w-0">
                      <p>{itemName(items, group.bundle)}</p>
                      <p className="text-xs text-dnd-ink/70">
                        {group.rows.map((row, i) => (
                          <span key={row.id}>
                            {i > 0 && ", "}
                            <span className={row.broken ? "line-through text-dnd-ink/50" : ""}>
                              {row.quantity > 1 && `${row.quantity}× `}
                              {nameOf(row)}
                            </span>
                            {row.broken && s.broken}
                          </span>
                        ))}
                      </p>
                    </div>
                  </li>
                ) : (
                  group.rows.map((row) => (
                    <li
                      key={row.id}
                      className={`flex items-center gap-2 ${row.broken ? "text-dnd-ink/60" : ""}`}
                    >
                      <ItemIcon
                        item={items.find((i) => i.id === row.item_id)}
                        className={row.broken ? "grayscale opacity-60" : ""}
                      />
                      {row.quantity > 1 && `${row.quantity}× `}
                      <span className={row.broken ? "line-through" : ""}>{nameOf(row)}</span>
                      {row.broken && s.broken}
                      {row.note && <span className="text-dnd-ink/60"> · {l(row.note)}</span>}
                    </li>
                  ))
                ),
              )}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

// ----- Traits -----

// Players writing their own traits is switched off for now; flip to bring it back
const CUSTOM_TRAITS_ENABLED = false;

const EMPTY_TRAIT = {
  name: "",
  flavour: "",
  description: "",
  upside: "",
  downside: "",
};

const TRAIT_FIELDS = [
  { field: "name", required: true },
  { field: "flavour", required: false },
  { field: "description", required: false },
  { field: "upside", required: true },
  { field: "downside", required: true },
] as const;

export const TraitsSection: React.FC<
  SectionProps & { onTraitCreated?: (trait: Tables<"traits">) => void }
> = ({ rb, build, edit, onTraitCreated }) => {
  const dict = useDict();
  const s = dict.sheet;
  const ct = dict.customTrait;
  const [draft, setDraft] = useState(EMPTY_TRAIT);
  const [saving, setSaving] = useState(false);

  if (!edit) {
    const traits = rb.traits.filter((t) => build.traitIds.includes(t.id));
    if (traits.length === 0) return null;
    return (
      <Section id="traits" title={s.traits}>
        <TraitList traits={traits} showApproval />
      </Section>
    );
  }

  const toggle = (id: number) =>
    edit.setBuild({
      ...build,
      traitIds: build.traitIds.includes(id)
        ? build.traitIds.filter((t) => t !== id)
        : [...build.traitIds, id],
    });

  const addCustom = async () => {
    setSaving(true);
    const { data, error } = await createCustomTrait(draft);
    setSaving(false);
    if (error !== null) return toast.error(error);
    onTraitCreated?.(data);
    edit.setBuild({ ...build, traitIds: [...build.traitIds, data.id] });
    setDraft(EMPTY_TRAIT);
  };

  return (
    <Section id="traits" title={s.traits}>
      <p className="mb-6">
        {s.traitsHelp}
      </p>
      <div className={`${grid} mb-10`}>
        {rb.traits.map((trait) => (
          <ChoiceCard
            key={trait.id}
            type="checkbox"
            title={trait.name}
            note={
              trait.is_custom && !trait.approved_by
                ? s.awaiting
                : trait.is_custom
                  ? s.custom
                  : null
            }
            image={<SquareImage src={trait.image_url} className="w-14" />}
            description={<TraitText trait={trait} />}
            checked={build.traitIds.includes(trait.id)}
            onSelect={() => toggle(trait.id)}
          />
        ))}
      </div>

      {CUSTOM_TRAITS_ENABLED && (
        <>
          <Heading level={3}>{ct.heading}</Heading>
          <div className="flex flex-col gap-3 max-w-xl">
            {TRAIT_FIELDS.map(({ field, required }) => (
              <input
                key={field}
                aria-label={field}
                placeholder={required ? ct[field] : ct.optional(ct[field])}
                value={draft[field]}
                onChange={(e) =>
                  setDraft({ ...draft, [field]: e.target.value })
                }
              />
            ))}
            <button
              type="button"
              onClick={addCustom}
              disabled={
                saving ||
                !draft.name.trim() ||
                !draft.upside.trim() ||
                !draft.downside.trim()
              }
              className="self-start"
            >
              {saving ? ct.adding : ct.add}
            </button>
          </div>
        </>
      )}
    </Section>
  );
};

// ----- Personality -----

export const PersonalitySection: React.FC<{
  personality: string;
  onChange?: (personality: string) => void;
}> = ({ personality, onChange }) => {
  const s = useDict().sheet;
  if (!onChange && !personality) return null;
  return (
    <Section id="personality" title={s.personality}>
      {onChange ? (
        <>
          <p className="text-sm mb-3">
            {s.personalityHelp}
          </p>
          <textarea
            rows={3}
            maxLength={500}
            placeholder={s.personalityPlaceholder}
            value={personality}
            onChange={(e) => onChange(e.target.value)}
            className="w-full"
          />
        </>
      ) : (
        <p className="whitespace-pre-line libre italic">{personality}</p>
      )}
    </Section>
  );
};

// ----- Backstory -----

export const BackstorySection: React.FC<{
  backstory: string;
  onChange?: (backstory: string) => void;
}> = ({ backstory, onChange }) => {
  const s = useDict().sheet;
  if (!onChange && !backstory) return null;
  return (
    <Section id="backstory" title={s.backstory}>
      {onChange ? (
        <textarea
          rows={8}
          placeholder={s.backstoryPlaceholder}
          value={backstory}
          onChange={(e) => onChange(e.target.value)}
          className="w-full"
        />
      ) : (
        <p className="whitespace-pre-line">{backstory}</p>
      )}
    </Section>
  );
};
