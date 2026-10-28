"use client";

import { createContext, useCallback, useContext } from "react";
import { DICTS } from "./dictionaries";
import { DEFAULT_LANG, type Lang, localizeDeep } from "./localize";

const LangContext = createContext<Lang>(DEFAULT_LANG);

/** Set once in the root layout from the server's choice */
export const LangProvider: React.FC<{ lang: Lang; children: React.ReactNode }> = ({
  lang,
  children,
}) => <LangContext.Provider value={lang}>{children}</LangContext.Provider>;

export const useLang = () => useContext(LangContext);

export const useDict = () => DICTS[useLang()];

/**
 * Localizes database text in a client component: l(cls.name), or a whole
 * row for a preview: l(row)
 */
export const useL = () => {
  const lang = useLang();
  return useCallback(<T,>(value: T) => localizeDeep(value, lang), [lang]);
};
