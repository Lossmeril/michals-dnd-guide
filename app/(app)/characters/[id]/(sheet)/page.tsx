"use client";

import Link from "next/link";
import { use } from "react";
import { SkeletonCard } from "@/components/ui/card";
import Eyebrow from "@/components/ui/eyebrow";
import StatBlock from "@/components/ui/statBlock";
import { Heading } from "@/components/ui/typography";
import { useCharacterSheet } from "./useCharacterSheet";

const POOLS = ["body", "soul", "charisma"] as const;

const CharacterOverviewPage = ({ params }: PageProps<"/characters/[id]">) => {
  const { loading, sheet } = useCharacterSheet(Number(use(params).id));

  if (loading) return <SkeletonCard />;
  if (!sheet) return <p>Character not found.</p>;

  const { rb, character, build, ownerName, isOwner } = sheet;
  const race = rb.races.find((r) => r.id === build.raceId);
  const classes = rb.classes.filter((c) => build.classes[c.id]);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-6 bg-dnd-bg border border-dnd-red-dark rounded-lg shadow-md overflow-hidden mb-10">
        {character.image_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={character.image_url}
            alt={character.name}
            className="w-full sm:w-56 h-56 sm:h-auto object-cover"
          />
        ) : (
          <div className="w-full sm:w-56 min-h-56 bg-gray-200 flex items-center justify-center text-gray-500">
            No portrait
          </div>
        )}
        <div className="flex-1 p-6 flex flex-col gap-3">
          <div className="flex flex-wrap gap-2">
            <Eyebrow text={`Level ${character.level}`} color="yellow" />
            {race && <Eyebrow text={race.name} color="green" />}
          </div>
          <Heading level={1} className="mb-0 border-b-0 pb-0">
            {character.name}
          </Heading>
          <p className="text-xs text-dnd-ink/75">Played by {ownerName}</p>
          <p className="text-sm">
            {classes
              .map((c) => `${c.name} ${build.classes[c.id]}`)
              .join(" · ") || "No classes yet"}
          </p>
          {/* Perk bonuses, exhaustion and scars aren't tracked yet */}
          <div className="flex flex-col gap-2 mt-2">
            {POOLS.map((pool) => (
              <StatBlock key={pool} resource={pool} base={build[pool]} />
            ))}
          </div>
          {isOwner && (
            <Link
              href={`/characters/${character.id}/editor`}
              className="button self-start mt-2"
            >
              Edit character
            </Link>
          )}
        </div>
      </div>

      {character.backstory && (
        <section className="mb-12">
          <Heading level={2}>Backstory</Heading>
          <p className="whitespace-pre-line">{character.backstory}</p>
        </section>
      )}
    </>
  );
};

export default CharacterOverviewPage;
