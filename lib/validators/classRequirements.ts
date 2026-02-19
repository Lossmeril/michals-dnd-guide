import { Class } from "@/types/class";
import { ClassPrerequisite } from "@/types/classPrerequisities";

export const CLASS_PREREQUISITE_TOTAL_LEVELS = 6;

export function doesMeetClassPrerequisitesFromLevels(
  queryClass: Class,
  classLevels: Record<string, number>,
  classPrerequisites: ClassPrerequisite[],
) {
  const prerequisites = classPrerequisites.filter(
    (p) => p.for_class === queryClass.id,
  );

  if (prerequisites.length === 0) return true;

  let totalLevels = 0;

  for (const p of prerequisites) {
    totalLevels += classLevels[p.class_required] ?? 0;
  }

  return totalLevels >= CLASS_PREREQUISITE_TOTAL_LEVELS;
}
