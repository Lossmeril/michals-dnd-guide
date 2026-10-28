"use server";

import { cookies } from "next/headers";
import { isLang } from "./localize";
import { LANG_COOKIE } from "./server";

/** Remembers the language for a year */
export async function setLang(lang: string) {
  if (!isLang(lang)) return;
  (await cookies()).set(LANG_COOKIE, lang, {
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
    sameSite: "lax",
  });
}
