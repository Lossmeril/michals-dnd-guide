"use client";

import Card from "@/components/ui/card";
import Eyebrow from "@/components/ui/eyebrow";
import type { Tables } from "@/lib/types/database.types";
import { useDict } from "@/lib/i18n/client";

interface CharacterCardProps {
  character: Tables<"characters">;
  raceName?: string;
  /** e.g. ["Fighter 3", "Juggler 3", "Warrior 1"] */
  classes: string[];
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  raceName,
  classes,
}) => {
  const t = useDict().lists;
  return (
  <Card
    title={character.name}
    imageUrl={character.image_url}
    link={`/characters/${character.id}`}
    eyebrows={
      <>
        <Eyebrow text={t.level(character.level)} color="yellow" />
        {raceName && <Eyebrow text={raceName} color="green" />}
      </>
    }
  >
    <p className="text-xs text-dnd-ink/75">
      {classes.join(" · ") || t.noClasses}
    </p>
  </Card>
  );
};
