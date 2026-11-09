import type { Metadata } from "next";

import Breadcrumbs from "@/components/ui/breadcrumbs";
import Panel from "@/components/ui/panel";
import { Heading } from "@/components/ui/typography";
import { CREDITS, Credit } from "@/lib/credits";

export const metadata: Metadata = { title: "Credits" };

const CreditEntry: React.FC<{ credit: Credit }> = ({ credit }) => (
  <li className="flex gap-4 py-3 border-b border-dnd-gold/50 last:border-b-0">
    {credit.image && (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={credit.image}
        alt=""
        className="size-16 shrink-0 rounded object-cover border border-dnd-gold"
      />
    )}
    <div className="flex flex-col gap-1 min-w-0">
      <p className="font-bold">
        {credit.href ? (
          <a href={credit.href} className="link" target="_blank" rel="noreferrer">
            {credit.what}
          </a>
        ) : (
          credit.what
        )}
      </p>
      <p className="text-dnd-ink/80">
        {credit.by ?? <span className="italic text-dnd-red">Source to be added</span>}
        {credit.license && (
          <>
            {" · "}
            {credit.licenseHref ? (
              <a href={credit.licenseHref} className="link" target="_blank" rel="noreferrer">
                {credit.license}
              </a>
            ) : (
              credit.license
            )}
          </>
        )}
      </p>
      {credit.note && <p className="text-dnd-ink/70">{credit.note}</p>}
    </div>
  </li>
);

// Public, like the rulebook: no login needed to see who made what
const CreditsPage = () => (
  <div className="max-w-3xl">
    <Breadcrumbs items={[{ label: "Credits" }]} />
    <Heading level={1}>Credits</Heading>
    <p className="text-sm mb-10">
      Nothing here was made in a vacuum. This is where the rules, pictures and
      code came from.
    </p>
    <div className="flex flex-col gap-10">
      {CREDITS.map((section) => (
        <section key={section.title}>
          <Heading level={2} className="mb-4">
            {section.title}
          </Heading>
          {section.intro && <p className="text-sm mb-4">{section.intro}</p>}
          <Panel as="section" tight>
            <ul className="text-sm">
              {section.items.map((credit) => (
                <CreditEntry key={credit.what} credit={credit} />
              ))}
            </ul>
          </Panel>
        </section>
      ))}
    </div>
  </div>
);

export default CreditsPage;
