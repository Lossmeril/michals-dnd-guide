import type { Tables, TablesInsert, TablesUpdate } from "./database.types";

export type Campaign_Update = Tables<"campaign_updates">;
export type Campaign_UpdateInsert = TablesInsert<"campaign_updates">;
export type Campaign_UpdateUpdate = TablesUpdate<"campaign_updates">;
