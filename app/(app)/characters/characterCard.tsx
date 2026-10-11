import Card from "@/components/ui/card";
import Eyebrow from "@/components/ui/eyebrow";
import type { Tables } from "@/lib/types/database.types";

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
}) => (
  <Card
    title={character.name}
    imageUrl={character.image_url || "empty"}
    link={`/characters/${character.id}`}
    eyeBrow={[
      <Eyebrow key="level" text={`Level ${character.level}`} color="yellow" />,
      ...(raceName
        ? [<Eyebrow key="race" text={raceName} color="green" />]
        : []),
    ]}
  >
    <p className="text-xs text-dnd-ink/75">
      {classes.join(" · ") || "No classes yet"}
    </p>
  </Card>
);
