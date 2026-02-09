import { Class } from "@/types/class";
import { Race } from "@/types/races";
import { RelCharacterClass } from "@/types/relCharacterClass";

// -------------------------------------
// Get a class by ID
// -------------------------------------

export function getClassById(classes: Class[], id: number): Class | undefined {
  return classes.find((c) => c.id === id);
}

// -------------------------------------
// Get a race by ID
// -------------------------------------

export function getRaceById(races: Race[], id: number): Race | undefined {
  return races.find((r) => r.id === id);
}

// -------------------------------------
// Get all classes for a character, with levels merged in from the relation table
// -------------------------------------

export function getCharactersClasses(
  classes: Class[],
  characterClassRelations: RelCharacterClass[],
  characterId: number,
): (Class & { level: number })[] {
  const relevantRels = characterClassRelations.filter(
    (rel) => rel.character === characterId && rel.class != null,
  );

  return relevantRels.map((rel) => {
    const foundClass = getClassById(classes, rel.class!);
    if (!foundClass) {
      return { id: rel.class!, name: "Unknown Class", level: rel.level };
    }
    return { ...foundClass, level: rel.level };
  });
}
