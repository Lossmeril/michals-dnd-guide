import { Character } from "@/types/characters";

type ValidationResult = {
  valid: boolean;
  errors: string[];
};

export default function validatePlayableCharacter(
  character: Character,
): ValidationResult {
  const errors: string[] = [];

  if (!character.name) {
    errors.push("Name is required.");
  }

  if (!character.race) {
    errors.push("Race is required.");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
