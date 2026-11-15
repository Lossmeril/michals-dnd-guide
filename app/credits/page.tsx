import type { Metadata } from "next";

import Breadcrumbs from "@/components/ui/breadcrumbs";
import Citation from "@/components/ui/citation";
import Panel from "@/components/ui/panel";
import { Heading } from "@/components/ui/typography";
import { CREDIT_SECTIONS, type Credit } from "@/lib/credits";
import { fetchCredits } from "@/lib/endpoints/credits";
import type { Dict } from "@/lib/i18n/dictionaries";
import { localizeDeep } from "@/lib/i18n/localize";
import { getDict } from "@/lib/i18n/server";

export const generateMetadata = async (): Promise<Metadata> => ({
  title: (await getDict()).credits.title,
});

/** One reference: the citation, what it's used for here, then its images */
const CreditEntry: React.FC<{ credit: Credit; dict: Dict }> = ({ credit, dict }) => (
  <li className="py-4 border-b border-dnd-gold/50 last:border-b-0">
    <div className="flex gap-4">
      {credit.cover_url && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={credit.cover_url}
          alt={dict.credits.coverOf(credit.title)}
          className="w-16 aspect-[2/3] shrink-0 rounded-sm object-cover border border-dnd-gold shadow"
        />
      )}
      <div className="flex flex-col gap-1.5 min-w-0">
        {credit.authors ? (
          <Citation credit={credit} dict={dict} />
        ) : (
          <p>
            <strong className="libre text-dnd-ink">{credit.title}</strong>
            <span className="italic text-dnd-red"> · {dict.credits.sourceMissing}</span>
          </p>
        )}
        {credit.used_for && (
          <p className="text-dnd-ink/80">{credit.used_for}</p>
        )}
      </div>
    </div>
    {credit.images.length > 0 && (
      <div className="flex flex-wrap gap-1.5 mt-3">
        {credit.images.map((src) => (
          <a key={src} href={src} target="_blank" rel="noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              loading="lazy"
              className="size-12 rounded object-cover object-top border border-dnd-gold hover:border-dnd-red"
            />
          </a>
        ))}
      </div>
    )}
  </li>
);

// Public, like the rulebook: no login needed to see who made what
const CreditsPage = async () => {
  const dict = await getDict();
  const t = dict.credits;
  const credits = localizeDeep(await fetchCredits(), dict.lang);
  return (
    <div className="max-w-3xl">
      <Breadcrumbs items={[{ label: t.title }]} />
      <Heading level={1}>{t.title}</Heading>
      <p className="text-sm mb-4">{t.lead}</p>
      <Panel as="section" className="text-sm mb-10 flex flex-col gap-2">
        <p>
          <strong>{t.noAi}</strong> {t.rights}
        </p>
        <p>
          {t.concerns[0]}
          <a href="mailto:hello@lossmeril.art" className="link">
            hello@lossmeril.art
          </a>
          {t.concerns[1]}
        </p>
        <p>{t.alpha}</p>
        <p>{t.notPublic}</p>
      </Panel>
      <div className="flex flex-col gap-10">
        {CREDIT_SECTIONS.map((section) => {
          const items = credits.filter((c) => c.section === section.id);
          if (!items.length) return null;
          return (
            <section key={section.id}>
              <Heading level={2} className="mb-4">
                {section.title[dict.lang]}
              </Heading>
              {"intro" in section && (
                <p className="text-sm mb-4">{section.intro[dict.lang]}</p>
              )}
              <Panel as="section" tight>
                <ul className="text-sm">
                  {items.map((credit) => (
                    <CreditEntry key={credit.id} credit={credit} dict={dict} />
                  ))}
                </ul>
              </Panel>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default CreditsPage;
