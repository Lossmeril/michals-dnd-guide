export type Campaign = {
  owner_user_id: string;
  title: string;
};

export type DB_Campaign = Campaign & {
  id: string;
  created_at: string;
};

export type CampaignInsert = Campaign;
export type CampaignUpdate = Partial<Campaign>;
