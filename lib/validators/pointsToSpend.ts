export function calculatePointsToSpend(
  level: number,
  totalClassLevels: number,
  //   numberOfPerks: number,
  //   totalBonusAttributes: number,
): number {
  return level - totalClassLevels; // - numberOfPerks - totalBonusAttributes;
}
