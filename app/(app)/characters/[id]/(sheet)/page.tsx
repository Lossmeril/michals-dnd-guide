"use client";

import Link from "next/link";
import { use } from "react";
import { SkeletonCard } from "@/components/ui/card";
import Eyebrow from "@/components/ui/eyebrow";
import StatBlock from "@/components/ui/statBlock";
import { Heading } from "@/components/ui/typography";
import { freeLanguages } from "@/lib/rules/character";
import { formatCoins } from "@/lib/rules/format";
import { useCharacterSheet } from "./useCharacterSheet";

const POOLS = ["body", "soul", "charisma"] as const;

const CharacterOverviewPage = ({ params }: PageProps<"/characters/[id]">) => {
  const { loading, sheet } = useCharacterSheet(Number(use(params).id));

  if (loading) return <SkeletonCard />;
  if (!sheet) return <p>Character not found.</p>;

  const { rb, character, build, ownerName, isOwner } = sheet;
  const race = rb.races.find((r) => r.id === build.raceId);
  const classes = rb.classes.filter((c) => build.classes[c.id]);
  const background = rb.backgrounds.find((b) => b.id === build.backgroundId);
  const languages = [...freeLanguages(rb, build), ...build.languages]
    .map((id) => rb.languages.find((l) => l.id === id)?.name)
    .filter(Boolean);
  const traits = rb.traits.filter((t) => build.traitIds.includes(t.id));

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
        <section>
          <Heading level={2}>Background</Heading>
          {background ? (
            <dl className="text-sm flex flex-col gap-2">
              <div>
                <dt className="font-bold libre text-dnd-red">
                  {background.name}
                </dt>
                {background.description && <dd>{background.description}</dd>}
              </div>
              {background.equipment && (
                <div>
                  <dt className="font-bold">Starting gear</dt>
                  <dd>{background.equipment}</dd>
                </div>
              )}
              <div>
                <dt className="font-bold">Starting purse</dt>
                <dd>
                  {formatCoins(background.coins_copper)} · {background.material}{" "}
                  Material
                </dd>
              </div>
              {background.known_settings && (
                <div>
                  <dt className="font-bold">Knows their way around</dt>
                  <dd>{background.known_settings}</dd>
                </div>
              )}
            </dl>
          ) : (
            <p>No background picked yet.</p>
          )}
        </section>

        <section>
          <Heading level={2}>Languages</Heading>
          <p className="text-sm">{languages.join(", ")}</p>
        </section>
      </div>

      {traits.length > 0 && (
        <section className="mb-12">
          <Heading level={2}>Traits</Heading>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {traits.map((t) => (
              <li
                key={t.id}
                className="p-4 bg-dnd-bg border border-dnd-gold rounded-lg text-sm"
              >
                <p className="font-bold libre text-dnd-red">
                  {t.name}
                  {t.is_custom && !t.approved_by && (
                    <span className="ml-2 text-xs font-normal text-dnd-ink/60">
                      awaiting DM approval
                    </span>
                  )}
                </p>
                <p>+ {t.upside}</p>
                <p>− {t.downside}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

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
