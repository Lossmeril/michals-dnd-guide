"use client";

// EN | CS in the navbar; the choice is kept in a cookie

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { twMerge } from "tailwind-merge";
import { setLang } from "@/lib/i18n/actions";
import { useDict, useLang } from "@/lib/i18n/client";
import { LANG_NAMES, LANGS } from "@/lib/i18n/localize";

const LangSwitch = () => {
  const current = useLang();
  const dict = useDict();
  const router = useRouter();
  const [pending, start] = useTransition();

  return (
    <div role="group" aria-label={dict.site.language} className="flex text-xs font-bold">
      {LANGS.map((lang) => (
        <button
          key={lang}
          type="button"
          title={LANG_NAMES[lang]}
          aria-pressed={lang === current}
          disabled={pending}
          onClick={() =>
            start(async () => {
              await setLang(lang);
              router.refresh();
            })
          }
          className={twMerge(
            "px-2 py-1 rounded-none uppercase first:rounded-l-full last:rounded-r-full border border-dnd-red",
            lang === current
              ? "bg-dnd-red text-white"
              : "bg-transparent text-dnd-red hover:bg-dnd-red/10",
          )}
        >
          {lang}
        </button>
      ))}
    </div>
  );
};

export default LangSwitch;
