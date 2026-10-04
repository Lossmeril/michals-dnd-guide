import { requireUser } from "../auth";
import { fetchCampaign_Players } from "../endpoints/campaign_players";
import { fetchCharacters } from "../endpoints/characters";
import { fetchProfile } from "../endpoints/profiles";
import { fetchCampaignsPlayerIsPartOf } from "./playerCampaigns";

export const fetchCharactersOwnedByPlayer = async (
  playerId: string,
): Promise<import("../types/database.types").Tables<"characters">[] | null> => {
  const characters = await fetchCharacters();

  // If there are no characters, return empty array
  if (!characters) {
    return null;
  }

  // Filter characters where the player is the owner
  const charactersOwnedByPlayer = characters.filter(
    (character) => character.owner === playerId,
  );

  return charactersOwnedByPlayer;
};

export const fetchCharactersPlayerSees = async (): Promise<{
  owned: import("../types/database.types").Tables<"characters">[] | null;
  other: import("../types/database.types").Tables<"characters">[] | null;
}> => {
  const characters = await fetchCharacters();

  const user = await requireUser();
  const player = await fetchProfile(user.id);

  // If there are no characters, return empty array
  if (!characters) {
    return { owned: null, other: null };
  }
  if (!player) {
    return { owned: null, other: null };
  }

  const charactersOwnedByPlayer = characters.filter(
    (character) => character.owner === player.id,
  );

  // If the player is admin, return all characters
  if (player.role === "admin") {
    return {
      owned: charactersOwnedByPlayer,
      other: characters.filter((character) => character.owner !== player.id),
    };
  }

  // If the player is not admin, return only characters owned by the player and in campaigns the player is part of

  const campaingsPlayerIsPartOf = await fetchCampaignsPlayerIsPartOf(player.id);
  if (!campaingsPlayerIsPartOf || campaingsPlayerIsPartOf === null) {
    return { owned: charactersOwnedByPlayer, other: null };
  }

  const campaignsCharacterInvolvement = await fetchCampaign_Players();
  const otherCharacters = characters.filter(
    (character) =>
      character.owner !== player.id &&
      campaignsCharacterInvolvement.some(
        (cp) => cp.character_id === character.id,
      ),
  );

  return { owned: charactersOwnedByPlayer, other: otherCharacters };
};

export const fetchPlayerFromCharacter = async (
  characterId: number,
): Promise<import("../types/database.types").Tables<"profiles"> | null> => {
  const characters = await fetchCharacters();
  const character = characters?.find((c) => c.id === characterId);

  if (!character) {
    return null;
  }

  const player = await fetchProfile(character.owner);
  return player;
};
