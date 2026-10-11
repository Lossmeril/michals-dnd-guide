"use client";

import { use } from "react";
import { SkeletonCard } from "@/components/ui/card";
import CoverImage from "@/components/ui/coverImage";
import Eyebrow from "@/components/ui/eyebrow";
import PerkCard from "@/components/ui/perkCard";
import { Heading } from "@/components/ui/typography";
import {
  aspectsOf,
  chosenIn,
  coreSpells,
  describeRequirement,
  findClass,
  findPerk,
  heldAspects,
  requirementsOf,
} from "@/lib/rules/character";
import { magicLabel, RESOURCE_NAMES } from "@/lib/rules/format";
import { useCharacterSheet } from "../../useCharacterSheet";

const CharacterClassPage = ({
  params,
}: PageProps<"/characters/[id]/classes/[classId]">) => {
  const { id, classId } = use(params);
  const { loading, sheet } = useCharacterSheet(Number(id));

  if (loading) return <SkeletonCard />;
  if (!sheet) return <p>Character not found.</p>;

  const { rb, build } = sheet;
  const cls = findClass(rb, classId);
  const level = build.classes[classId];
  if (!cls || !level)
    return <p>This character doesn&apos;t have that class.</p>;

  const skills = rb.skills.filter((s) => s.class_id === cls.id);
  const held = heldAspects(rb, build).map((a) => a.id);
  const aspects = aspectsOf(rb, cls.id);
  const core = coreSpells(rb, cls.id);
  const chosen = chosenIn(build, cls.id);

  return (
    <>
      {cls.image_url && <CoverImage src={cls.image_url} alt={cls.name} />}
      <div className="flex flex-wrap gap-2 mb-2">
        <Eyebrow text={cls.rank} />
        {magicLabel(cls.magic) && (
          <Eyebrow text={magicLabel(cls.magic)!} color="purple" />
        )}
      </div>
      <Heading level={1}>
        {cls.name} {level}
      </Heading>
      {cls.description && <p className="mb-10">{cls.description}</p>}

      <Heading level={2}>Skills (+{level})</Heading>
      <ul className="mb-10">
        {skills.map((s) => (
          <li
            key={s.id}
            className="py-3 border-b border-dnd-gold/40 last:border-b-0"
          >
            <div className="flex items-center gap-2">
              <span className="font-bold text-dnd-red libre">{s.name}</span>
              <Eyebrow text={RESOURCE_NAMES[s.resource]} />
              {s.is_unique && <Eyebrow text="unique" color="red" />}
            </div>
            {s.description && <p className="text-sm mt-1">{s.description}</p>}
          </li>
        ))}
      </ul>

      {core.length > 0 && (
        <>
          <Heading level={2}>Core spells</Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-10">
            {core.map((p) => (
              <PerkCard key={p.id} perk={p} tags={["core"]} />
            ))}
          </div>
        </>
      )}

      {aspects.length > 0 && (
        <>
          <Heading level={2}>Aspects</Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-10">
            {aspects.map((a) => (
              <PerkCard
                key={a.id}
                perk={a}
                tags={[
                  "aspect",
                  held.includes(a.id)
                    ? "unlocked"
                    : `needs ${requirementsOf(rb, a.id)
                        .map((r) => describeRequirement(rb, r))
                        .join(", ")}`,
                ]}
              />
            ))}
          </div>
        </>
      )}

      <Heading level={2}>
        Perks{" "}
        <span className="text-sm normal-case font-normal text-dnd-ink/60">
          {chosen.length} of {level}
        </span>
      </Heading>
      {chosen.length === 0 ? (
        <p>No perks picked yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {chosen.map((p) => {
            const perk = findPerk(rb, p.perkId);
            return perk && <PerkCard key={p.perkId} perk={perk} />;
          })}
        </div>
      )}
    </>
  );
};

export default CharacterClassPage;
