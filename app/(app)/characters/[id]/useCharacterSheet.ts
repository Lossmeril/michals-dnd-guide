import { requireUser } from "@/lib/auth";
import { fetchCharacterBuild } from "@/lib/endpoints/character_build";
import { fetchProfile } from "@/lib/endpoints/profiles";
import { fetchRulebook } from "@/lib/endpoints/rulebook";
import { useLoad } from "@/lib/hooks/useLoad";
import type { Build, Rulebook } from "@/lib/rules/character";
import type { Tables } from "@/lib/types/database.types";

export type CharacterSheet = {
  rb: Rulebook;
  character: Tables<"characters">;
  build: Build;
  inventory: Tables<"character_items">[];
  ownerName: string;
  isOwner: boolean;
};

// Shared by every sheet subpage: rulebook, the character's build and who owns it
export const useCharacterSheet = (characterId: number) => {
  const { data: sheet, loading } = useLoad(async (): Promise<CharacterSheet | null> => {
    const [rb, found, user] = await Promise.all([
      fetchRulebook(),
      fetchCharacterBuild(characterId),
      requireUser(),
    ]);
    if (!found) return null;
    const owner = await fetchProfile(found.character.owner);
    return {
      rb,
      ...found,
      ownerName: owner?.display_name || "Unknown",
      isOwner: found.character.owner === user.id,
    };
  }, [characterId]);

  return { loading, sheet };
};
