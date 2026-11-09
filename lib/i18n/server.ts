import { cookies, headers } from "next/headers";
import { DICTS } from "./dictionaries";
import { CZECH_PUBLISHED, DEFAULT_LANG, isLang, type Lang } from "./localize";

export const LANG_COOKIE = "lang";

/** The chosen language, or the browser's first time round */
export const getLang = async (): Promise<Lang> => {
  if (!CZECH_PUBLISHED) return DEFAULT_LANG;
  const chosen = (await cookies()).get(LANG_COOKIE)?.value;
  if (isLang(chosen)) return chosen;
  // "cs-CZ,cs;q=0.9,en;q=0.8": the first language that we have
  const accept = (await headers()).get("accept-language") ?? "";
  for (const part of accept.split(",")) {
    const code = part.trim().slice(0, 2).toLowerCase();
    if (code === "sk") return "cs";
    if (isLang(code)) return code;
  }
  return DEFAULT_LANG;
};

export const getDict = async () => DICTS[await getLang()];
