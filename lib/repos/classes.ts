import type { Class, ClassInsert, ClassUpdate } from "@/types/classes";
import { createCrudRepo } from "./createCrudRepo";

// Plain `id` primary key, no custom queries — the whole repo is the factory.
export const classesRepo = createCrudRepo<Class, ClassInsert, ClassUpdate>(
  "classes",
);
