import type { Tables, TablesInsert, TablesUpdate } from "./database.types";

export type Campaign = Tables<"campaigns">;
export type CampaignInsert = TablesInsert<"campaigns">;
export type CampaignUpdate = TablesUpdate<"campaigns">;
