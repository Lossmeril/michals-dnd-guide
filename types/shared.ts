export function isOneOf<T extends readonly string[]>(
  value: string,
  options: T,
): value is T[number] {
  return options.includes(value);
}
