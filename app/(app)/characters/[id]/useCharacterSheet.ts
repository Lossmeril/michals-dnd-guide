import { useEffect, useState } from "react";
import { requireUser } from "@/lib/auth";
import { fetchCharacterBuild } from "@/lib/endpoints/character_build";
import { fetchProfile } from "@/lib/endpoints/profiles";
import { fetchRulebook } from "@/lib/endpoints/rulebook";
import type { Build, Rulebook } from "@/lib/rules/character";
import type { Tables } from "@/lib/types/database.types";

export type CharacterSheet = {
  rb: Rulebook;
  character: Tables<"characters">;
  build: Build;
  ownerName: string;
  isOwner: boolean;
};

// Shared by every sheet subpage: rulebook, the character's build and who owns it
export const useCharacterSheet = (characterId: number) => {
  const [loading, setLoading] = useState(true);
  const [sheet, setSheet] = useState<CharacterSheet | null>(null);

  useEffect(() => {
    const loadSheet = async () => {
      try {
        const [rb, found, user] = await Promise.all([
          fetchRulebook(),
          fetchCharacterBuild(characterId),
          requireUser(),
        ]);
        if (!found) return;
        const owner = await fetchProfile(found.character.owner);
        setSheet({
          rb,
          ...found,
          ownerName: owner?.display_name || "Unknown",
          isOwner: found.character.owner === user.id,
        });
      } catch (error) {
        console.error("Error fetching character:", error);
      } finally {
        setLoading(false);
      }
    };
    loadSheet();
  }, [characterId]);

  return { loading, sheet };
};
