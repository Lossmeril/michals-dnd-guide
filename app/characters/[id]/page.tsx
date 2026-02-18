"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import {
  Container,
  Grid,
  GridContent,
} from "@/components/layout/layoutPrimitives";
import Button from "@/components/ui/button";

import type { Character } from "@/types/character";
import type { RelCharacterClass } from "@/types/relCharacterClass";

import { useCharacters } from "@/lib/hooks/useCharacters";
import { useRaces } from "@/lib/hooks/useRaces";
import { useClasses } from "@/lib/hooks/useClasses";
import { useRelCharacterClasses } from "@/lib/hooks/useRelCharacterClasses";

import { calculatePointsToSpend } from "@/lib/validators/pointsToSpend";

import CharacterGeneralSection from "@/components/editors/character/CharacterGeneralSection";
import CharacterClassesSection from "@/components/editors/character/CharacterClassesSection";
import RaceCard from "@/components/editors/character/RaceCard";
import { toast } from "@/components/ui/toast";
import { TbConfetti } from "react-icons/tb";

interface CharacterPageProps {
  params: Promise<{ id: string }>;
}

// -------------------------------------
// Helpers
// -------------------------------------

const clampLevel = (n: number) => Math.max(0, Math.min(5, n));

function buildExistingRelationsByClass(
  rels: RelCharacterClass[],
  characterId: number,
) {
  const map = new Map<string, RelCharacterClass>();
  for (const rel of rels) {
    if (rel.character === characterId && rel.class != null) {
      map.set(rel.class, rel);
    }
  }
  return map;
}

function buildInitialClassLevels(
  classIds: string[],
  existingByClass: Map<string, RelCharacterClass>,
) {
  const initial: Record<string, number> = {};
  for (const id of classIds) {
    initial[id] = existingByClass.get(id)?.level ?? 0;
  }
  return initial;
}

function sumLevels(levels: Record<string, number>) {
  return Object.values(levels).reduce((sum, lvl) => sum + (lvl || 0), 0);
}

function getPointsToSpend(
  characterLevel: number,
  classLevels: Record<string, number>,
) {
  const spent = sumLevels(classLevels);
  return calculatePointsToSpend(characterLevel || 1, spent);
}

const PageMessage = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Grid className="pt-10">
        <GridContent>
          <div className="rounded-lg border-1 border-dnd-ink/20 p-5">
            {children}
          </div>
        </GridContent>
      </Grid>
    </Container>
  );
};

// -------------------------------------
// Component
// -------------------------------------

const CharacterPage: React.FC<CharacterPageProps> = ({ params }) => {
  console.clear();

  const router = useRouter();
  const { id } = React.use(params);

  const { characters, update: updateCharacter } = useCharacters();
  const { races } = useRaces();
  const { classes } = useClasses();
  const {
    relCharacterClasses,
    create: createRelCharacterClasses,
    update: updateRelCharacterClasses,
    remove: removeRelCharacterClasses,
  } = useRelCharacterClasses();

  // -------------------------------------
  // Local state
  // -------------------------------------

  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState<Character | undefined>(undefined);

  // local-only edits; saved on button press
  const [classLevels, setClassLevels] = useState<Record<string, number>>({});

  // -------------------------------------
  // Data lookups
  // -------------------------------------

  useEffect(() => {
    const found = characters.find((c) => c.id.toString() === id);
    setCharacter(found);
    setLoading(false);
  }, [characters, id]);

  const existingByClass = useMemo(() => {
    if (!character) return new Map<string, RelCharacterClass>();
    return buildExistingRelationsByClass(relCharacterClasses, character.id);
  }, [character, relCharacterClasses]);

  useEffect(() => {
    if (!character) return;
    if (!classes?.length) return;

    const classIds = classes.map((c) => c.id);
    setClassLevels(buildInitialClassLevels(classIds, existingByClass));

    // intentionally NOT depending on relCharacterClasses to avoid resetting unsaved edits
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [character?.id, classes]);

  const pointsToSpend = useMemo(() => {
    if (!character) return 0;
    return getPointsToSpend(character.level || 1, classLevels);
  }, [classLevels, character]);

  // -------------------------------------
  // Loading / not found
  // -------------------------------------

  if (loading) return <PageMessage>Loading…</PageMessage>;
  if (!character) return <PageMessage>Character not found.</PageMessage>;

  // -------------------------------------
  // Actions
  // -------------------------------------

  const onSaveChanges = async () => {
    // if (!classes?.length) return;

    // 1) save character
    await updateCharacter(character.id, character);

    // 2) save class relations (diff against existingByClass)
    const ops: Promise<unknown>[] = [];

    for (const c of classes) {
      const newLevel = clampLevel(classLevels[c.id] ?? 0);
      const existing = existingByClass.get(c.id);

      if (newLevel === 0) {
        if (existing) ops.push(removeRelCharacterClasses(existing.id));
        continue;
      }

      if (existing) {
        if (existing.level !== newLevel) {
          ops.push(updateRelCharacterClasses(existing.id, { level: newLevel }));
        }
        continue;
      }

      ops.push(
        createRelCharacterClasses({
          character: character.id,
          class: c.id,
          level: newLevel,
        }),
      );
    }

    await Promise.all(ops);
    toast({
      description: "Changes to your character have been saved successfully!",
      title: "Saved!",
      mode: "success",
      icon: <TbConfetti />,
    });
    router.refresh();
  };

  // -------------------------------------
  // Render
  // -------------------------------------

  return (
    <Container>
      <Grid className="pt-10">
        <GridContent>
          <div className="grid grid-cols-12 gap-4 items-start">
            <aside className="col-span-12 xl:col-span-3 rounded-lg border-1 border-dnd-ink/20 p-5 w-full">
              <p>Points to Spend: {pointsToSpend}</p>
              <ul className="mt-4 flex flex-col gap-4">
                <li>General</li>
                <li>Race</li>
                <li>Classes</li>
                <li>Perks</li>
                <li>Equipment</li>
              </ul>
            </aside>

            {/* Main content */}
            <section className="col-span-12 xl:col-span-9">
              <div className="flex flex-col gap-4">
                <CharacterGeneralSection
                  character={character}
                  setCharacter={setCharacter}
                />

                <div className="rounded-lg border-1 border-dnd-ink/20 p-5 w-full">
                  <label htmlFor="race-select">Race:</label>

                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {races.map((r) => (
                      <RaceCard
                        key={r.id}
                        r={r}
                        onChangeClass={(raceId) => {
                          setCharacter((prev) =>
                            prev ? { ...prev, race: raceId } : prev,
                          );
                        }}
                        selected={character.race === r.id}
                      />
                    ))}
                  </div>
                </div>

                <CharacterClassesSection
                  classes={classes}
                  classLevels={classLevels}
                  setClassLevels={setClassLevels}
                  noMorePointsToSpend={pointsToSpend <= 0}
                />

                <div>
                  <Button
                    label="Save Changes"
                    type="button"
                    onClick={onSaveChanges}
                  />
                </div>
              </div>
            </section>
          </div>
        </GridContent>
      </Grid>
    </Container>
  );
};

export default CharacterPage;
