"use client";

import { useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import Modal from "@/components/ui/modal";
import { Overline } from "@/components/ui/typography";
import { useDict } from "@/lib/i18n/client";
import PerkCard from "./perkCard";
import {
  type Build,
  describeRequirements,
  findClass,
  ownLevelNeeded,
  type PerkNode,
  type PerkState,
  perkStateIn,
  perkTree,
  type Rulebook,
  withPerkToggled,
} from "@/lib/rules/character";
import type { Tables } from "@/lib/types/database.types";

/** Present when the view is the editor */
export interface EditProps {
  setBuild: (build: Build) => void;
  /** Level-up points not spent yet */
  remaining: number;
  /** Of those, how many may go into resources or extra perks */
  freePoints: number;
}

export interface SectionProps {
  rb: Rulebook;
  build: Build;
  edit?: EditProps;
}

export const pickButton = "w-full py-1 text-xs";
export const dropButton = twMerge(
  pickButton,
  "bg-transparent text-dnd-red border border-dnd-red hover:bg-dnd-red/10",
);

interface PerkTileProps {
  perk: Tables<"perks">;
  core?: boolean;
  state?: PerkState;
  note?: string | null;
  requires?: string;
  action?: React.ReactNode;
  className?: string;
}

/** A compact perk card that opens the full card in a modal */
export const PerkTile: React.FC<PerkTileProps> = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <PerkCard {...props} compact onOpen={() => setOpen(true)} />
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title={props.perk.name}
        className="w-[min(34rem,calc(100vw-2rem))]"
      >
        <PerkCard {...props} className="shadow-none" />
      </Modal>
    </>
  );
};

interface PerkTreeProps extends SectionProps {
  classId: string;
  /** Show perks the character doesn't hold; the editor always does */
  showAll?: boolean;
  /** Rulebook view: no character, every perk shown with its requirements */
  plain?: boolean;
}

/**
 * Core spells, then general perks by the class level they need, then one
 * row per aspect with the perks that require it in a grid beside it.
 */
const PerkTree: React.FC<PerkTreeProps> = ({
  rb,
  build,
  edit,
  classId,
  plain = false,
  showAll = !!edit || plain,
}) => {
  const t = useDict();
  const tree = useMemo(() => perkTree(rb, classId), [rb, classId]);
  const className = findClass(rb, classId)?.name;
  const stateOf = (
    perkId: string,
  ): { state: PerkState | undefined; note: string | null } => {
    if (plain) {
      const requires = describeRequirements(rb, perkId, t.lang);
      return { state: undefined, note: requires && t.build.requires(requires) };
    }
    return perkStateIn(
      rb,
      build,
      classId,
      perkId,
      edit ? Math.min(edit.remaining, edit.freePoints) : 0,
      t.lang,
    );
  };
  const visible = (node: PerkNode) =>
    showAll || stateOf(node.perk.id).state === "held";

  const actionFor = (perk: Tables<"perks">, state: PerkState | undefined) => {
    if (!edit || perk.kind === "aspect") return undefined;
    const toggle = () =>
      edit.setBuild(withPerkToggled(build, classId, perk.id));
    if (state === "held")
      return (
        <button type="button" onClick={toggle} className={dropButton}>
          {t.build.drop}
        </button>
      );
    if (state === "available")
      return (
        <button type="button" onClick={toggle} className={pickButton}>
          {t.build.pick}
        </button>
      );
  };

  // Plain functions, not components, so tiles keep their modal state across renders
  const tile = (perk: Tables<"perks">) => {
    const { state, note } = stateOf(perk.id);
    return (
      <PerkTile
        key={perk.id}
        perk={perk}
        state={state}
        note={note}
        requires={describeRequirements(rb, perk.id, t.lang)}
        action={actionFor(perk, state)}
      />
    );
  };
  // A node's visible descendants, depth first; their notes name what they need
  const descendants = (node: PerkNode): PerkNode[] =>
    node.children
      .filter(visible)
      .flatMap((child) => [child, ...descendants(child)]);

  const core = tree.core.filter(() => showAll || build.classes[classId]);
  const general = tree.general.filter(visible);
  const aspects = tree.aspects.filter(visible);

  // General perks grouped by the level of this class they need
  const tiers = new Map<number, PerkNode[]>();
  for (const node of general) {
    const level = ownLevelNeeded(rb, node.perk.id, classId);
    tiers.set(level, [...(tiers.get(level) ?? []), node]);
  }

  if (core.length + general.length + aspects.length === 0)
    return (
      <p className="text-sm text-dnd-ink/70">
        {plain ? t.blocks.noneYet : t.build.nonePicked}
      </p>
    );

  return (
    <div className="flex flex-col gap-8">
      {core.length > 0 && (
        <TreeGroup label={t.build.comesWithClass}>
          {core.map((perk) => {
            const { state, note } = stateOf(perk.id);
            return (
              <PerkTile
                key={perk.id}
                perk={perk}
                core
                state={state}
                note={note}
              />
            );
          })}
        </TreeGroup>
      )}

      {[...tiers.entries()].map(([level, nodes]) => (
        <TreeGroup
          key={level}
          label={level > 1 ? t.build.fromLevel(className ?? "", level) : t.build.perks}
        >
          {nodes
            .flatMap((node) => [node, ...descendants(node)])
            .map((node) => tile(node.perk))}
        </TreeGroup>
      ))}

      {aspects.length > 0 && (
        <section>
          <Overline>{t.build.aspects}</Overline>
          <div className="flex flex-col gap-6">
            {aspects.map((node) => {
              const kids = descendants(node);
              return (
                <div
                  key={node.perk.id}
                  className="grid grid-cols-1 md:grid-cols-[13rem_1fr] gap-3 md:gap-4"
                >
                  <div className="md:sticky md:top-4 self-start">
                    {tile(node.perk)}
                  </div>
                  {kids.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-3 pl-4 border-l-2 border-dnd-gold">
                      {kids.map((kid) => tile(kid.perk))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};

const TreeGroup: React.FC<{ label: string; children: React.ReactNode }> = ({
  label,
  children,
}) => (
  <section>
    <Overline>{label}</Overline>
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
      {children}
    </div>
  </section>
);

export default PerkTree;
