import type {
  ClassPrerequisite,
  ClassPrerequisiteInsert,
  ClassPrerequisiteUpdate,
} from "@/types/classPrerequisities";
import { createCrudRepo } from "./createCrudRepo";

// `class_prerequisites` has an `id` column (serial), so the factory fits even
// though rows are conceptually a (for_class, class_required) pairing.
export const classPrerequisitesRepo = createCrudRepo<
  ClassPrerequisite,
  ClassPrerequisiteInsert,
  ClassPrerequisiteUpdate
>("class_prerequisites");
