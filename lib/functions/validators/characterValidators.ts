export function isClassLevelValid(level: number): boolean {
  if (level < 1) return false;
  if (level > 5) return false;
  return true;
}
