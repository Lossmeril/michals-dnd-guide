// What the data shortcodes (::races, ::classes{rank=basic}, …) show on a real
// rulebook page. The admin preview shows placeholders instead.

import Link from "next/link";
import { PerkTile } from "@/app/(app)/characters/_character/perkTree";
import { RuleTable } from "@/components/rulebook/elements";
import type { RenderBlock } from "@/components/rulebook/ruleMarkdown";
import { SquareImage } from "@/components/ui/perkCard";
import TraitText from "@/components/ui/traitText";
import { racialPerks, type Rulebook } from "@/lib/rules/character";
import { formatCoins } from "@/lib/rules/format";
import { hrefOf, type NavChapter } from "@/lib/rulebookNav";
import type { Tables } from "@/lib/types/database.types";
import ClassGrid from "./classGrid";
import TravelCalculator from "./travel/travelCalculator";

const Races: React.FC<{ rb: Rulebook }> = ({ rb }) =>
  rb.races.map((race) => {
    const language = rb.languages.find((l) => l.id === race.language_id);
    const perks = racialPerks(rb, race.id);
    return (
      <section key={race.id} id={race.id} className="clear-both mt-12 scroll-mt-8">
        <div className="flex flex-col sm:flex-row gap-6">
          {race.image_url && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={race.image_url}
              alt=""
              className="w-full sm:w-44 aspect-[3/4] object-cover object-top rounded-lg border border-dnd-gold shadow-md shrink-0"
            />
          )}
          <div className="min-w-0">
            <h2 className="libre text-xl font-bold text-dnd-red uppercase mb-1">
              {race.plural ?? race.name}
            </h2>
            {race.blurb && <p className="libre font-bold mb-2">{race.blurb}</p>}
            {race.description && (
              <p className="whitespace-pre-line text-sm mb-2">{race.description}</p>
            )}
            <p className="text-sm">
              <strong>Language:</strong>{" "}
              {language
                ? `Common tongue and ${language.name}`
                : "Common tongue, plus one of your choice"}
            </p>
          </div>
        </div>
        <p className="text-xs font-bold uppercase tracking-wider text-dnd-ink/60 mt-6 mb-3">
          Racial perks (pick one)
        </p>
        {perks.length === 0 ? (
          <p className="text-sm text-dnd-ink/70">None written yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            {perks.map((p) => (
              <PerkTile key={p.id} perk={p} />
            ))}
          </div>
        )}
      </section>
    );
  });

const Backgrounds: React.FC<{ rb: Rulebook }> = ({ rb }) =>
  rb.backgrounds.length === 0 ? (
    <p>None written yet.</p>
  ) : (
    <RuleTable
      head={["Background", "Gear", "Purse", "Languages", "+1 in"]}
      rows={rb.backgrounds.map((b) => [
        <strong key="n" className="libre text-dnd-red">
          {b.name}
        </strong>,
        b.equipment,
        `${formatCoins(b.coins_copper)} · ${b.material} Material`,
        `+${b.extra_languages}`,
        b.known_settings,
      ])}
    />
  );

const Languages: React.FC<{ rb: Rulebook }> = ({ rb }) => (
  <RuleTable
    head={["Language", "Spoken by", "Racial language of"]}
    rows={rb.languages.map((l) => [
      <strong key="n" className="libre text-dnd-red">
        {l.name}
      </strong>,
      l.description,
      rb.races
        .filter((r) => r.language_id === l.id)
        .map((r) => r.name)
        .join(", ") || "—",
    ])}
  />
);

const Traits: React.FC<{ rb: Rulebook }> = ({ rb }) => {
  const premade = rb.traits.filter((t) => !t.is_custom);
  return premade.length === 0 ? (
    <p>None written yet.</p>
  ) : (
    <ul className="clear-both grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      {premade.map((t) => (
        <li
          key={t.id}
          className="p-4 bg-dnd-bg border border-dnd-gold rounded-lg flex flex-col gap-2"
        >
          <SquareImage src={t.image_url} className="w-16" />
          <p className="libre font-bold text-dnd-red">{t.name}</p>
          <TraitText trait={t} />
        </li>
      ))}
    </ul>
  );
};

const Chapters: React.FC<{ nav: NavChapter[] }> = ({ nav }) => (
  <div className="clear-both grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
    {nav.map((chapter) => (
      <div
        key={chapter.id}
        className="p-4 bg-dnd-bg border border-dnd-gold rounded-lg shadow-md"
      >
        <p className="libre font-bold text-dnd-red-dark text-lg mb-2">
          {chapter.title}
        </p>
        <ul className="text-sm flex flex-col gap-1">
          {chapter.pages.map((p) => (
            <li key={p.id}>
              <Link href={hrefOf(p.slug)} className="link">
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

const RANKS: Tables<"classes">["rank"][] = ["basic", "advanced", "mighty"];

/** Fills the data shortcodes from the rulebook tables and the nav */
export const blockRenderer =
  (rb: Rulebook | null, nav: NavChapter[]): RenderBlock =>
  function renderBlock(name, props) {
    if (name === "chapters") return <Chapters nav={nav} />;
    if (name === "travel-calculator") return <TravelCalculator />;
    if (!rb) return null;
    switch (name) {
      case "races":
        return <Races rb={rb} />;
      case "backgrounds":
        return <Backgrounds rb={rb} />;
      case "languages":
        return <Languages rb={rb} />;
      case "traits":
        return <Traits rb={rb} />;
      case "classes": {
        const rank = RANKS.find((r) => r === props.rank) ?? "basic";
        return <ClassGrid rb={rb} rank={rank} />;
      }
      default:
        return null;
    }
  };
