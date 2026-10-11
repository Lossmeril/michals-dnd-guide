"use client";

import { use } from "react";
import Card, { SkeletonCard } from "@/components/ui/card";
import Eyebrow from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/typography";
import { magicLabel } from "@/lib/rules/format";
import { useCharacterSheet } from "../useCharacterSheet";

const CharacterClassesPage = ({
  params,
}: PageProps<"/characters/[id]/classes">) => {
  const characterId = Number(use(params).id);
  const { loading, sheet } = useCharacterSheet(characterId);

  if (loading) return <SkeletonCard />;
  if (!sheet) return <p>Character not found.</p>;

  const { rb, build } = sheet;
  const classes = rb.classes.filter((c) => build.classes[c.id]);

  return (
    <>
      <Heading level={1}>Classes</Heading>
      {classes.length === 0 && <p>No classes yet.</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {classes.map((cls) => (
          <Card
            key={cls.id}
            title={`${cls.name} ${build.classes[cls.id]}`}
            imageUrl={cls.image_url || "empty"}
            link={`/characters/${characterId}/classes/${cls.id}`}
            eyeBrow={[
              <Eyebrow key="rank" text={cls.rank} />,
              ...(magicLabel(cls.magic)
                ? [
                    <Eyebrow
                      key="magic"
                      text={magicLabel(cls.magic)!}
                      color="purple"
                    />,
                  ]
                : []),
            ]}
          >
            <p className="text-xs text-dnd-ink/75 line-clamp-3">
              {cls.description}
            </p>
          </Card>
        ))}
      </div>
    </>
  );
};

export default CharacterClassesPage;
