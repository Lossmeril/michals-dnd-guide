"use client";

//  ------------------- React and Next
import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

//  ------------------- UI
import { Container, Grid } from "@/components/layout/gridLayout";
import Button from "@/components/ui/button";

//  ------------------- Types and Hooks
import { Character } from "@/types/character";
import { RelCharacterClass } from "@/types/relCharacterClass";

import { useCharacters } from "@/lib/hooks/useCharacters";
import { useRaces } from "@/lib/hooks/useRaces";
import { useClasses } from "@/lib/hooks/useClasses";
import { useRelCharacterClasses } from "@/lib/hooks/useRelCharacterClasses";

//  ------------------- Utils
import { calculatePointsToSpend } from "@/lib/validators/pointsToSpend";

//  ------------------- Editor sections
import CharacterGeneralSection from "@/components/editors/character/CharacterGeneralSection";
import CharacterClassesSection from "@/components/editors/character/CharacterClassesSection";

interface CharacterPageProps {
  params: Promise<{
    id: string;
  }>;
}

const clampLevel = (n: number) => Math.max(0, Math.min(5, n));

const CharacterPage: React.FC<CharacterPageProps> = ({ params }) => {
  const router = useRouter();
  const { id } = React.use(params);

  const { characters, update: updateCharacters } = useCharacters();
  const { races } = useRaces();

  const { classes } = useClasses();
  const {
    relCharacterClasses,
    create: createRelCharacterClasses,
    update: updateRelCharacterClasses,
    remove: removeRelCharacterClasses,
  } = useRelCharacterClasses();

  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState<Character | undefined>(undefined);

  // local-only edits; saved on button press
  const [classLevels, setClassLevels] = useState<Record<number, number>>({});

  // Load character once
  useEffect(() => {
    if (!characters) return;
    const found = characters.find((c) => c.id.toString() === id);
    setCharacter(found);
    setLoading(false);
  }, [characters, id]);

  // Build a stable lookup of existing relations for this character
  const existingByClass = useMemo(() => {
    if (!character) return new Map<number, RelCharacterClass>();
    const map = new Map<number, RelCharacterClass>();
    for (const rel of relCharacterClasses) {
      if (rel.character === character.id && rel.class != null) {
        map.set(rel.class, rel);
      }
    }
    return map;
  }, [character, relCharacterClasses]);

  // Initialize local classLevels only when the character changes (so edits don't get wiped)
  useEffect(() => {
    if (!character) return;
    if (!classes?.length) return;

    const initial: Record<number, number> = {};
    for (const c of classes) {
      const rel = existingByClass.get(c.id);
      initial[c.id] = rel?.level ?? 0;
    }
    setClassLevels(initial);
    // intentionally NOT depending on relCharacterClasses to avoid resetting unsaved edits
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [character?.id, classes]);

  // Points to spend should reflect *local* edits (not DB state) because you only save on button press
  const pointsToSpend = useMemo(() => {
    if (!character) return 0;
    const spent = Object.values(classLevels).reduce(
      (sum, lvl) => sum + (lvl || 0),
      0,
    );
    return calculatePointsToSpend(character.level || 1, spent);
  }, [classLevels, character]);

  if (loading) {
    return (
      <Container>
        <Grid>
          <div className="col-span-12 col-start-1">Loading...</div>
        </Grid>
      </Container>
    );
  }

  if (!character) {
    return (
      <Container>
        <Grid>
          <div className="col-span-12 col-start-1">Character not found</div>
        </Grid>
      </Container>
    );
  }

  const onSaveChanges = async () => {
    // 1) save character
    await updateCharacters(character.id, character);

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
    router.push("/");
  };

  return (
    <Container>
      <Grid className="items-start pt-10">
        <aside className="col-span-3 col-start-1 border-1 border-dnd-ink/20 rounded-lg p-5 w-full">
          <p>Points to Spend: {pointsToSpend}</p>
          <ul className="flex flex-col gap-10">
            <li>General</li>
            <li>Race</li>
            <li>Classes</li>
            <li>Perks</li>
            <li>Equipment</li>
          </ul>
        </aside>

        <div className="col-span-9 col-start-4 grid grid-cols-9 gap-4">
          <CharacterGeneralSection
            character={character}
            setCharacter={setCharacter}
          />
          <div className="col-span-9 col-start-1 border-1 border-dnd-ink/20 rounded-lg p-5 w-full gap-4">
            <label htmlFor="race-select">Race:</label>
            <select
              id="race-select"
              value={races.find((r) => r.id === character.race)?.id || ""}
              onChange={(event) =>
                setCharacter((prev) => ({
                  ...prev!,
                  race: Number.parseInt(event.target.value, 10),
                }))
              }
            >
              {races.map((race) => (
                <option key={race.id} value={race.id}>
                  {race.name}
                </option>
              ))}
            </select>
          </div>
          <CharacterClassesSection
            classes={classes}
            classLevels={classLevels}
            setClassLevels={setClassLevels}
            noMorePointsToSpend={pointsToSpend <= 0}
          />

          <div className="col-span-9 col-start-1">
            <Button
              label="Save Changes"
              type="button"
              onClick={onSaveChanges}
            />
          </div>
        </div>
      </Grid>
    </Container>
  );
};

export default CharacterPage;
