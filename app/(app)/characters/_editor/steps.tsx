"use client";

import { useState } from "react";
import { toast } from "sonner";
import MagicBadge from "@/components/ui/magicBadge";
import NumberStepper from "@/components/ui/numberStepper";
import StatBlock from "@/components/ui/statBlock";
import { Heading } from "@/components/ui/typography";
import {
  aspectsOf,
  BASE_RESOURCES,
  type Build,
  chosenIn,
  choosablePerks,
  coreSpells,
  describeRequirement,
  findClass,
  freeLanguages,
  languageSlots,
  heldAspects,
  heldPerkIds,
  isClassUnlocked,
  MAX_CLASS_LEVEL,
  parentLevels,
  parentsOf,
  racialPerks,
  requirementsMet,
  requirementsOf,
  type Rulebook,
  STARTS,
  UNLOCK_LEVELS,
  withClassLevel,
} from "@/lib/rules/character";
import { costOf, formatCoins, RESOURCE_NAMES } from "@/lib/rules/format";
import type { Tables } from "@/lib/types/database.types";
import { createCustomTrait } from "./actions";
import { PerkImage } from "@/components/ui/perkCard";
import { ChoiceCard, Thumb } from "./choiceCard";

export interface StepProps {
  rb: Rulebook;
  build: Build;
  setBuild: (build: Build) => void;
  /** Level-up points not spent yet */
  remaining: number;
}

const grid = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4";

// ----- Start -----

export const StartStep: React.FC<{
  level: number;
  onChange: (level: number) => void;
}> = ({ level, onChange }) => (
  <div className={grid}>
    {STARTS.map((start) => (
      <ChoiceCard
        key={start.level}
        title={start.name}
        note={`Level ${start.level}`}
        checked={level === start.level}
        onSelect={() => onChange(start.level)}
      />
    ))}
  </div>
);

// ----- Race -----

export const RaceStep: React.FC<StepProps> = ({ rb, build, setBuild }) => {
  const classPerks = build.perks.filter((p) => p.classId !== null);

  return (
    <>
      <div className={`${grid} mb-10`}>
        {rb.races.map((race) => (
          <ChoiceCard
            key={race.id}
            image={<Thumb src={race.image_url} />}
            title={race.name}
            description={race.blurb}
            checked={build.raceId === race.id}
            // A new race clears the old racial perk
            onSelect={() =>
              setBuild({ ...build, raceId: race.id, perks: classPerks })
            }
          />
        ))}
      </div>

      {build.raceId && (
        <>
          <Heading level={3}>Racial perk (pick one)</Heading>
          <div className={grid}>
            {racialPerks(rb, build.raceId).map((perk) => (
              <ChoiceCard
                key={perk.id}
                image={<PerkImage perk={perk} className="w-16" />}
                title={perk.name}
                note={costOf(perk)}
                description={perk.description}
                checked={build.perks.some((p) => p.perkId === perk.id)}
                onSelect={() =>
                  setBuild({
                    ...build,
                    perks: [...classPerks, { perkId: perk.id, classId: null }],
                  })
                }
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

// ----- Classes -----

const RANKS = [
  ["basic", "Basic classes"],
  ["advanced", "Advanced classes"],
  ["mighty", "Mighty classes"],
] as const;

export const ClassesStep: React.FC<StepProps> = ({
  rb,
  build,
  setBuild,
  remaining,
}) => (
  <>
    {RANKS.map(([rank, title]) => (
      <section key={rank} className="mb-10">
        <Heading level={3}>{title}</Heading>
        <ul className="flex flex-col gap-3">
          {rb.classes
            .filter((c) => c.rank === rank)
            .map((cls) => {
              const level = build.classes[cls.id] ?? 0;
              const unlocked = isClassUnlocked(rb, build, cls.id);
              const parents = parentsOf(rb, cls.id).map(
                (id) => findClass(rb, id)?.name,
              );
              const lockNote = `Needs ${parents.join(" + ")} to total ${UNLOCK_LEVELS} (now ${parentLevels(rb, build, cls.id)})`;

              return (
                <li
                  key={cls.id}
                  className="flex items-center justify-between gap-4 border-b border-dnd-gold/50 pb-3"
                >
                  <Thumb src={cls.image_url} />
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-dnd-red libre">
                      {cls.name} <MagicBadge magic={cls.magic} />
                    </p>
                    {!unlocked && (
                      <p
                        className={`text-xs ${level > 0 ? "text-dnd-red" : "text-dnd-ink/60"}`}
                      >
                        {lockNote}
                      </p>
                    )}
                    <p className="text-xs text-dnd-ink/75 line-clamp-2">
                      {cls.description}
                    </p>
                  </div>
                  <NumberStepper
                    label={cls.name}
                    value={level}
                    max={MAX_CLASS_LEVEL}
                    canIncrease={remaining > 0 && (level > 0 || unlocked)}
                    onChange={(l) => setBuild(withClassLevel(build, cls.id, l))}
                  />
                </li>
              );
            })}
        </ul>
      </section>
    ))}
  </>
);

// ----- Perks -----

export const PerksStep: React.FC<StepProps> = ({
  rb,
  build,
  setBuild,
  remaining,
}) => {
  const taken = rb.classes.filter((c) => build.classes[c.id]);
  const held = heldPerkIds(rb, build);
  const aspects = heldAspects(rb, build).map((a) => a.id);

  if (taken.length === 0) return <p>Pick some classes first.</p>;

  return (
    <>
      {taken.map((cls) => {
        const level = build.classes[cls.id];
        const chosen = chosenIn(build, cls.id);
        const core = coreSpells(rb, cls.id);
        const classAspects = aspectsOf(rb, cls.id);
        const slotsFull = chosen.length >= level;
        // At level 5, extra perks cost a level-up point each
        const canTakeExtra = level === MAX_CLASS_LEVEL && remaining > 0;

        return (
          <section key={cls.id} className="mb-12">
            <Heading level={3}>
              {cls.name} {level} <MagicBadge magic={cls.magic} />{" "}
              <span className="text-sm normal-case font-normal text-dnd-ink/60">
                {chosen.length} of {level} perks picked
              </span>
            </Heading>

            {core.length > 0 && (
              <p className="text-sm mb-2">
                <span className="font-bold">Comes with the class:</span>{" "}
                {core.map((p) => p.name).join(", ")}
              </p>
            )}
            {classAspects.length > 0 && (
              <p className="text-sm mb-4">
                <span className="font-bold">Aspects:</span>{" "}
                {classAspects
                  .map((a) =>
                    aspects.includes(a.id)
                      ? `${a.name} ✓`
                      : `${a.name} (needs ${requirementsOf(rb, a.id)
                          .map((r) => describeRequirement(rb, r))
                          .join(", ")})`,
                  )
                  .join(" · ")}
              </p>
            )}

            <div className={grid}>
              {choosablePerks(rb, cls.id).map((perk) => {
                const checked = chosen.some((p) => p.perkId === perk.id);
                const elsewhere = build.perks.find(
                  (p) => p.perkId === perk.id && p.classId !== cls.id,
                );
                const met = requirementsMet(rb, build, perk.id, held);
                const note = elsewhere
                  ? `Already picked as a ${findClass(rb, elsewhere.classId!)?.name} perk`
                  : !met
                    ? `Needs ${requirementsOf(rb, perk.id)
                        .map((r) => describeRequirement(rb, r))
                        .join(", ")}`
                    : !checked && slotsFull && canTakeExtra
                      ? "Extra perk: costs 1 level-up point"
                      : costOf(perk);

                return (
                  <ChoiceCard
                    key={perk.id}
                    image={<PerkImage perk={perk} className="w-16" />}
                    type="checkbox"
                    title={perk.name}
                    note={note}
                    description={perk.description}
                    checked={checked}
                    disabled={
                      !checked &&
                      (!!elsewhere || !met || (slotsFull && !canTakeExtra))
                    }
                    onSelect={() =>
                      setBuild({
                        ...build,
                        perks: checked
                          ? build.perks.filter(
                              (p) =>
                                !(p.perkId === perk.id && p.classId === cls.id),
                            )
                          : [
                              ...build.perks,
                              { perkId: perk.id, classId: cls.id },
                            ],
                      })
                    }
                  />
                );
              })}
            </div>
          </section>
        );
      })}
    </>
  );
};

// ----- Resources -----

const POOLS = ["body", "soul", "charisma"] as const;

export const ResourcesStep: React.FC<StepProps> = ({
  build,
  setBuild,
  remaining,
}) => {
  const total = build.body + build.soul + build.charisma;

  return (
    <>
      <p className="mb-6">
        Spread {BASE_RESOURCES} points between the three pools. Every point
        above {BASE_RESOURCES} uses a level-up point. ({total} spent,{" "}
        {Math.max(0, total - BASE_RESOURCES)} from level-ups.)
      </p>
      <ul className="flex flex-col gap-4">
        {POOLS.map((pool) => (
          <li key={pool} className="flex items-center justify-between gap-4">
            <StatBlock resource={pool} base={build[pool]} />
            <NumberStepper
              label={RESOURCE_NAMES[pool]}
              value={build[pool]}
              canIncrease={total < BASE_RESOURCES || remaining > 0}
              onChange={(v) => setBuild({ ...build, [pool]: v })}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

// ----- Background and languages -----

export const BackgroundStep: React.FC<StepProps> = ({
  rb,
  build,
  setBuild,
}) => {
  const free = freeLanguages(rb, build);
  const slots = languageSlots(rb, build);
  const full = build.languages.length >= slots;

  return (
    <>
      <div className={`${grid} mb-10`}>
        {rb.backgrounds.map((bg) => (
          <ChoiceCard
            key={bg.id}
            title={bg.name}
            note={`${formatCoins(bg.coins_copper)} · ${bg.material} Material · ${bg.extra_languages} extra language(s)`}
            description={[
              bg.equipment,
              bg.known_settings && `Knows: ${bg.known_settings}`,
            ]
              .filter(Boolean)
              .join(". ")}
            checked={build.backgroundId === bg.id}
            // Fewer language slots may leave too many picked; start the list over
            onSelect={() =>
              setBuild({ ...build, backgroundId: bg.id, languages: [] })
            }
          />
        ))}
      </div>

      <Heading level={3}>
        Languages{" "}
        <span className="text-sm normal-case font-normal text-dnd-ink/60">
          {build.languages.length} of {slots} extra picked
        </span>
      </Heading>
      <p className="text-sm mb-4">
        You speak{" "}
        {free
          .map((id) => rb.languages.find((l) => l.id === id)?.name)
          .join(" and ")}{" "}
        already.
      </p>
      <div className={grid}>
        {rb.languages
          .filter((l) => !free.includes(l.id))
          .map((lang) => {
            const checked = build.languages.includes(lang.id);
            return (
              <ChoiceCard
                key={lang.id}
                type="checkbox"
                title={lang.name}
                description={lang.description}
                checked={checked}
                disabled={!checked && full}
                onSelect={() =>
                  setBuild({
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
    </>
  );
};

// ----- Traits -----

export const TraitsStep: React.FC<
  StepProps & { onTraitCreated: (trait: Tables<"traits">) => void }
> = ({ rb, build, setBuild, onTraitCreated }) => {
  const [draft, setDraft] = useState({ name: "", upside: "", downside: "" });
  const [saving, setSaving] = useState(false);

  const toggle = (id: number) =>
    setBuild({
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
    onTraitCreated(data);
    setBuild({ ...build, traitIds: [...build.traitIds, data.id] });
    setDraft({ name: "", upside: "", downside: "" });
  };

  return (
    <>
      <p className="mb-6">
        Traits are optional challenges with an upside and a downside. Take as
        many as you like.
      </p>
      <div className={`${grid} mb-10`}>
        {rb.traits.map((trait) => (
          <ChoiceCard
            key={trait.id}
            type="checkbox"
            title={trait.name}
            note={
              trait.is_custom && !trait.approved_by
                ? "Custom · awaiting DM approval"
                : trait.is_custom
                  ? "Custom"
                  : null
            }
            description={`+ ${trait.upside}  − ${trait.downside}`}
            checked={build.traitIds.includes(trait.id)}
            onSelect={() => toggle(trait.id)}
          />
        ))}
      </div>

      <Heading level={3}>Write your own</Heading>
      <div className="flex flex-col gap-3 max-w-xl">
        <input
          placeholder="Name"
          value={draft.name}
          onChange={(e) => setDraft({ ...draft, name: e.target.value })}
        />
        <input
          placeholder="Upside"
          value={draft.upside}
          onChange={(e) => setDraft({ ...draft, upside: e.target.value })}
        />
        <input
          placeholder="Downside"
          value={draft.downside}
          onChange={(e) => setDraft({ ...draft, downside: e.target.value })}
        />
        <button
          type="button"
          onClick={addCustom}
          disabled={
            saving ||
            !draft.name.trim() ||
            !draft.upside.trim() ||
            !draft.downside.trim()
          }
          className="self-start disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {saving ? "Adding…" : "Add trait"}
        </button>
      </div>
    </>
  );
};
