import type { Player, PlayerInsert, PlayerUpdate } from "@/types/players";
import { createCrudRepo } from "./createCrudRepo";

// Plain `id` primary key (the auth user id), no custom queries.
export const playersRepo = createCrudRepo<Player, PlayerInsert, PlayerUpdate>(
  "players",
);
