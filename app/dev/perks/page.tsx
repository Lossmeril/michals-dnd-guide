"use client";

// Every perk in the database, grouped by race and by class, to check the data
// at a glance. Not linked from anywhere.

import { useState } from "react";
import MagicBadge from "@/components/game/magicBadge";
import PerkCard from "@/components/game/perkCard";
import { SkeletonCard } from "@/components/ui/card";
import { Heading } from "@/components/ui/typography";
import { fetchRulebook } from "@/lib/endpoints/rulebook";
import { useLoad } from "@/lib/hooks/useLoad";
import { describeRequirements } from "@/lib/rules/character";

const grid = "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4";

const RANKS = [
  ["basic", "Basic classes"],
  ["advanced", "Advanced classes"],
  ["mighty", "Mighty classes"],
] as const;

const Group: React.FC<{ id: string; title: React.ReactNode; children: React.ReactNode; count: number }> = ({
  id,
  title,
  children,
  count,
}) => (
  <section id={id} className="mb-12 scroll-mt-28">
    <Heading level={3} className="flex flex-wrap items-center gap-x-3 gap-y-1">
      {title}
      <span className="text-sm normal-case font-normal text-dnd-ink/60">{count} {count === 1 ? "perk" : "perks"}</span>
    </Heading>
    {count === 0 ? <p className="text-sm italic text-dnd-ink/60">None yet.</p> : <div className={grid}>{children}</div>}
  </section>
);

const PerksPreview = () => {
  const { data: rb, loading } = useLoad(() => fetchRulebook(), []);
  const [hideAspects, setHideAspects] = useState(false);

  if (loading || !rb) return <SkeletonCard />;

  // A class's perks in their sort order, core spells first
  const perksOf = (classId: string) =>
    rb.classPerks
      .filter((cp) => cp.class_id === classId)
      .sort((a, b) => Number(b.is_core) - Number(a.is_core) || a.sort - b.sort)
      .map((cp) => ({ perk: rb.perks.find((p) => p.id === cp.perk_id)!, core: cp.is_core }))
      .filter(({ perk }) => perk && !(hideAspects && perk.kind === "aspect"));

  const classPerkIds = new Set(rb.classPerks.map((cp) => cp.perk_id));
  const orphans = rb.perks.filter(
    (p) => !p.race_id && !classPerkIds.has(p.id) && !(hideAspects && p.kind === "aspect"),
  );
  const total = rb.perks.filter((p) => !(hideAspects && p.kind === "aspect")).length;

  return (
    <div>
      <Heading level={1}>Perks</Heading>
      <div className="flex flex-wrap items-center gap-4 mb-10">
        <button type="button" onClick={() => setHideAspects(!hideAspects)}>
          {hideAspects ? "Show aspects" : "Ignore aspects"}
        </button>
        <p className="text-sm text-dnd-ink/70">{total} perks in the database</p>
      </div>

      <Heading level={2} className="border-b-2 border-dnd-gold pb-2">Races</Heading>
      {rb.races.map((race) => {
        const perks = rb.perks.filter((p) => p.race_id === race.id);
        return (
          <Group key={race.id} id={`race-${race.id}`} title={race.name} count={perks.length}>
            {perks.map((perk) => (
              <PerkCard key={perk.id} perk={perk} />
            ))}
          </Group>
        );
      })}

      {RANKS.map(([rank, title]) => (
        <div key={rank}>
          <Heading level={2} className="border-b-2 border-dnd-gold pb-2">{title}</Heading>
          {rb.classes
            .filter((c) => c.rank === rank)
            .map((cls) => {
              const perks = perksOf(cls.id);
              return (
                <Group
                  key={cls.id}
                  id={`class-${cls.id}`}
                  title={
                    <>
                      {cls.name} <MagicBadge magic={cls.magic} />
                    </>
                  }
                  count={perks.length}
                >
                  {perks.map(({ perk, core }) => (
                    <PerkCard
                      key={perk.id}
                      perk={perk}
                      core={core}
                      requires={describeRequirements(rb, perk.id) || undefined}
                    />
                  ))}
                </Group>
              );
            })}
        </div>
      ))}

      {orphans.length > 0 && (
        <>
          <Heading level={2} className="border-b-2 border-dnd-gold pb-2">Without a race or class</Heading>
          <Group id="orphans" title="Unassigned" count={orphans.length}>
            {orphans.map((perk) => (
              <PerkCard key={perk.id} perk={perk} />
            ))}
          </Group>
        </>
      )}
    </div>
  );
};

export default PerksPreview;
