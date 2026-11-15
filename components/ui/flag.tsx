import type { Lang } from "@/lib/i18n/localize";

// Small flags for the language switch, drawn here so they need no credit:
// the Union Jack for English, the Czech flag for Czech.

const Flags: Record<Lang, React.ReactNode> = {
  en: (
    <>
      <clipPath id="flag-en-clip">
        <path d="M0 0v30h60V0z" />
      </clipPath>
      <clipPath id="flag-en-diag">
        <path d="M30 15h30v15zv15H0zH0V0zV0h30z" />
      </clipPath>
      <g clipPath="url(#flag-en-clip)">
        <path d="M0 0v30h60V0z" fill="#012169" />
        <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6" />
        <path
          d="M0 0l60 30m0-30L0 30"
          clipPath="url(#flag-en-diag)"
          stroke="#C8102E"
          strokeWidth="4"
        />
        <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
        <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </>
  ),
  cs: (
    <>
      <path d="M0 0h60v15H0z" fill="#fff" />
      <path d="M0 15h60v15H0z" fill="#D7141A" />
      <path d="M0 0l30 15L0 30z" fill="#11457E" />
    </>
  ),
};

const Flag: React.FC<{ lang: Lang; className?: string }> = ({ lang, className }) => (
  <svg viewBox="0 0 60 30" aria-hidden className={className}>
    {Flags[lang]}
  </svg>
);

export default Flag;
