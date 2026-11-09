"use client";

import { useState } from "react";
import ClassPortraitCard from "@/components/game/classPortraitCard";
import MagicBadge from "@/components/game/magicBadge";
import Eyebrow from "@/components/ui/eyebrow";
import MediaObject from "@/components/ui/mediaObject";
import Modal from "@/components/ui/modal";
import NumberStepper from "@/components/ui/numberStepper";
import PortraitCard, { type PortraitState } from "@/components/ui/portraitCard";
import { Heading } from "@/components/ui/typography";
import {
  findClass,
  isClassUnlocked,
  MAX_CLASS_LEVEL,
  parentLevels,
  parentNames,
  racialPerks,
  UNLOCK_LEVELS,
  withClassLevel,
  withRace,
  withRacialPerk,
} from "@/lib/rules/character";
import { RESOURCE_NAMES } from "@/lib/rules/format";
import PerkTree, {
  dropButton,
  pickButton,
  PerkTile,
  type SectionProps,
} from "@/components/game/perkTree";

// ----- Classes -----

/** Parent names, plus progress towards the unlock while it's locked */
const unlockLine = (props: ClassProps) => {
  const { rb, build, classId } = props;
  const names = parentNames(rb, classId);
  if (!names) return null;
  return isClassUnlocked(rb, build, classId)
    ? names
    : `${names} · ${parentLevels(rb, build, classId)}/${UNLOCK_LEVELS}`;
};

type ClassProps = SectionProps & { classId: string };

const ClassLevelStepper: React.FC<ClassProps> = ({
  rb,
  build,
  edit,
  classId,
}) => {
  if (!edit) return null;
  const level = build.classes[classId] ?? 0;
  const unlocked = isClassUnlocked(rb, build, classId);
  return (
    <>
      <span className="text-xs uppercase tracking-wider text-dnd-ink/60">
        Level
      </span>
      <NumberStepper
        label={findClass(rb, classId)?.name}
        value={level}
        max={MAX_CLASS_LEVEL}
        canIncrease={edit.remaining > 0 && (level > 0 || unlocked)}
        onChange={(l) => edit.setBuild(withClassLevel(build, classId, l))}
      />
    </>
  );
};

export const ClassCard: React.FC<ClassProps> = (props) => {
  const { rb, build, classId } = props;
  const [open, setOpen] = useState(false);
  const cls = findClass(rb, classId)!;
  const level = build.classes[classId] ?? 0;

  const state: PortraitState =
    level > 0
      ? "selected"
      : !isClassUnlocked(rb, build, classId)
        ? "locked"
        : "open";

  return (
    <>
      <ClassPortraitCard
        cls={cls}
        state={state}
        counter={level}
        subtitle={unlockLine(props)}
        onOpen={() => setOpen(true)}
        footer={props.edit && <ClassLevelStepper {...props} />}
      />
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title={level ? `${cls.name} ${level}` : cls.name}
      >
        <ClassDetails {...props} />
      </Modal>
    </>
  );
};

const ClassDetails: React.FC<ClassProps> = (props) => {
  const { rb, build, edit, classId } = props;
  const cls = findClass(rb, classId)!;
  const level = build.classes[classId] ?? 0;
  const skills = rb.skills.filter((s) => s.class_id === classId);
  const parents = parentNames(rb, classId);

  return (
    <>
      <MediaObject image={cls.image_url} className="mb-10">
        <div className="flex flex-wrap gap-2 mb-3">
          <Eyebrow text={cls.rank} />
          <MagicBadge magic={cls.magic} />
        </div>
        {parents && (
          <p className="text-xs text-dnd-ink/70 mb-3">
            Unlocks when {parents} total {UNLOCK_LEVELS} levels
            {!isClassUnlocked(rb, build, classId) &&
              ` (now ${parentLevels(rb, build, classId)})`}
          </p>
        )}
        {cls.description && (
          <p className="whitespace-pre-line mb-6">{cls.description}</p>
        )}
        {edit && (
          <div className="flex items-center gap-3 mb-6">
            <ClassLevelStepper {...props} />
          </div>
        )}

        <Heading level={4} className="mb-2">
          Skills{level > 0 && ` (+${level})`}
        </Heading>
        <ul>
          {skills.map((s) => (
            <li
              key={s.id}
              className="py-2 border-b border-dnd-gold/40 last:border-b-0"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-bold text-dnd-red libre">
                  {s.name}
                </span>
                <Eyebrow text={RESOURCE_NAMES[s.resource]} />
                {s.is_unique && <Eyebrow text="unique" color="red" />}
              </div>
              {s.description && (
                <p className="text-xs mt-1">{s.description}</p>
              )}
            </li>
          ))}
        </ul>
      </MediaObject>

      <Heading level={3}>Perks</Heading>
      <PerkTree {...props} showAll />
    </>
  );
};

// ----- Races -----

type RaceProps = SectionProps & { raceId: string };

const RaceChooseButton: React.FC<RaceProps> = ({ build, edit, raceId }) => {
  if (!edit) return null;
  const chosen = build.raceId === raceId;
  return (
    <button
      type="button"
      disabled={chosen}
      onClick={() => edit.setBuild(withRace(build, raceId))}
      className={chosen ? `${dropButton} cursor-default` : pickButton}
    >
      {chosen ? "Chosen" : "Choose"}
    </button>
  );
};

export const RaceCard: React.FC<RaceProps> = (props) => {
  const { rb, build, raceId } = props;
  const [open, setOpen] = useState(false);
  const race = rb.races.find((r) => r.id === raceId)!;
  const state: PortraitState =
    build.raceId === raceId ? "selected" : build.raceId ? "dimmed" : "open";

  return (
    <>
      <PortraitCard
        title={race.name}
        imageUrl={race.image_url}
        state={props.edit ? state : "open"}
        subtitle={race.blurb}
        onOpen={() => setOpen(true)}
        footer={props.edit && <RaceChooseButton {...props} />}
      />
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title={race.plural ?? race.name}
      >
        <RaceDetails {...props} />
      </Modal>
    </>
  );
};

const RaceDetails: React.FC<RaceProps> = (props) => {
  const { rb, edit, raceId } = props;
  const race = rb.races.find((r) => r.id === raceId)!;

  return (
    <>
      <MediaObject image={race.image_url} className="mb-10">
        {race.blurb && <p className="font-bold libre mb-3">{race.blurb}</p>}
        {race.description && (
          <p className="whitespace-pre-line mb-6">{race.description}</p>
        )}
        {edit && (
          <div className="w-40">
            <RaceChooseButton {...props} />
          </div>
        )}
      </MediaObject>

      <Heading level={3}>Racial perks (pick one)</Heading>
      <RacialPerks {...props} />
    </>
  );
};

/** The race's perk options; the editor can pick one, which also picks the race */
export const RacialPerks: React.FC<RaceProps & { onlyHeld?: boolean }> = ({
  rb,
  build,
  edit,
  raceId,
  onlyHeld = false,
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 items-start">
    {racialPerks(rb, raceId)
      .map((perk) => ({
        perk,
        held: build.perks.some((p) => p.perkId === perk.id),
      }))
      .filter(({ held }) => held || !onlyHeld)
      .map(({ perk, held }) => (
        <PerkTile
          key={perk.id}
          perk={perk}
          state={held ? "held" : edit ? "available" : undefined}
          note={held ? "Picked" : null}
          action={
            edit &&
            !held && (
              <button
                type="button"
                className={pickButton}
                onClick={() =>
                  edit.setBuild(
                    withRacialPerk(
                      build.raceId === raceId ? build : withRace(build, raceId),
                      perk.id,
                    ),
                  )
                }
              >
                Pick
              </button>
            )
          }
        />
      ))}
  </div>
);
