export type CampaignCharacter = {
  campaign_id: string;
  character_id: string;
};

export type DB_CampaignCharacter = CampaignCharacter & {
  joined_at: string;
};

export type CampaignCharacterInsert = CampaignCharacter;
export type CampaignCharacterUpdate = Partial<CampaignCharacter>;
