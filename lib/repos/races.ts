import type { Race, RaceInsert, RaceUpdate } from "@/types/races";
import { createCrudRepo } from "./createCrudRepo";

// `races` has a plain `id` primary key and needs no custom queries, so the
// whole repo is the shared factory. Adds `list`, `getById`, `insert`,
// `update`, `delete` — identical behaviour to the old hand-written version.
export const racesRepo = createCrudRepo<Race, RaceInsert, RaceUpdate>("races");
