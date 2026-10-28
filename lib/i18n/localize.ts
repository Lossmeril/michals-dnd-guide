// Translated text is stored in one string: the English, then `|cs|`, then the
// Czech. A string without the marker is English only and shows as English in
// both languages. Rulebook Markdown can also hold :::en and :::cs blocks
// (handled by remarkRulebook).

export const LANGS = ["en", "cs"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "en";

export const LANG_NAMES: Record<Lang, string> = { en: "English", cs: "Čeština" };

export const isLang = (s: unknown): s is Lang =>
  (LANGS as readonly unknown[]).includes(s);

export const CS_MARKER = "|cs|";

/** "Fighter |cs| Bojovník" → { en: "Fighter", cs: "Bojovník" } */
export const splitLocalized = (
  text: string | null | undefined,
): Record<Lang, string> => {
  const s = text ?? "";
  const i = s.indexOf(CS_MARKER);
  return i < 0
    ? { en: s, cs: "" }
    : { en: s.slice(0, i).trim(), cs: s.slice(i + CS_MARKER.length).trim() };
};

/** The other way round; no Czech means no marker */
export const joinLocalized = ({ en, cs }: Record<Lang, string>): string => {
  if (!cs.trim()) return en;
  const [e, c] = [en.trim(), cs.trim()];
  const multiline = e.includes("\n") || c.includes("\n");
  return multiline ? `${e}\n\n${CS_MARKER}\n\n${c}` : `${e} ${CS_MARKER} ${c}`;
};

/** The text in one language, falling back to the other when it's missing */
export function localize(text: string, lang: Lang): string;
export function localize(text: string | null, lang: Lang): string | null;
export function localize(text: string | undefined, lang: Lang): string | undefined;
export function localize(text: string | null | undefined, lang: Lang): string | null | undefined;
export function localize(text: string | null | undefined, lang: Lang) {
  if (!text || !text.includes(CS_MARKER)) return text;
  const parts = splitLocalized(text);
  return parts[lang] || parts[lang === "cs" ? "en" : "cs"];
}

/** Localizes every string in a value: rows from the database, lists, JSON */
export const localizeDeep = <T>(value: T, lang: Lang): T => {
  if (typeof value === "string") return localize(value, lang) as T;
  if (Array.isArray(value)) return value.map((v) => localizeDeep(v, lang)) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [k, localizeDeep(v, lang)]),
    ) as T;
  }
  return value;
};
