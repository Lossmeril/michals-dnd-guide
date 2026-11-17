"use client";

import Card from "@/components/ui/card";
import Eyebrow from "@/components/ui/eyebrow";
import { GrantLevelButton } from "@/components/game/levelGrant";
import type { LevelInfo } from "@/lib/endpoints/level_grants";
import type { Tables } from "@/lib/types/database.types";
import { useDict } from "@/lib/i18n/client";

interface CharacterCardProps {
  character: Tables<"characters">;
  raceName?: string;
  /** e.g. ["Fighter 3", "Juggler 3", "Warrior 1"] */
  classes: string[];
  /** Lets a DM grant a level right from the card */
  levelInfo?: LevelInfo;
  onLevelChange?: () => void;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  raceName,
  classes,
  levelInfo,
  onLevelChange,
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
    {levelInfo && (
      <GrantLevelButton
        characterId={character.id}
        characterName={character.name}
        level={character.level}
        info={levelInfo}
        onChange={() => onLevelChange?.()}
        className="button-secondary text-xs px-3 py-1 mt-3"
      />
    )}
  </Card>
  );
};
