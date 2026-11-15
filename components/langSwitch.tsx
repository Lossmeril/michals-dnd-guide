"use client";

// A flag per language in the navbar; the choice is kept in a cookie

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { twMerge } from "tailwind-merge";
import Flag from "@/components/ui/flag";
import { setLang } from "@/lib/i18n/actions";
import { useDict, useLang } from "@/lib/i18n/client";
import { LANG_NAMES, LANGS } from "@/lib/i18n/localize";

const LangSwitch = () => {
  const current = useLang();
  const dict = useDict();
  const router = useRouter();
  const [pending, start] = useTransition();

  return (
    <div role="group" aria-label={dict.site.language} className="flex items-center gap-1">
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
            "p-1 rounded-sm border-2 bg-transparent transition",
            lang === current
              ? "border-dnd-red"
              : "border-transparent opacity-50 grayscale hover:opacity-100 hover:grayscale-0",
          )}
        >
          <Flag lang={lang} className="block w-6 h-3 shadow-sm" />
          <span className="sr-only">{LANG_NAMES[lang]}</span>
        </button>
      ))}
    </div>
  );
};

export default LangSwitch;
