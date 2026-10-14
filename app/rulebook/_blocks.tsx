// What the data shortcodes (::races, ::classes{rank=basic}, …) show on a real
// rulebook page. The admin preview shows placeholders instead.

import Link from "next/link";
import EquipmentList from "@/components/game/equipmentList";
import { PerkTile } from "@/components/game/perkTree";
import { TraitList } from "@/components/game/traitCard";
import type { RenderBlock } from "@/components/rulebook/ruleMarkdown";
import { SimpleTable } from "@/components/ui/dataTable";
import MediaObject from "@/components/ui/mediaObject";
import Panel from "@/components/ui/panel";
import { Overline } from "@/components/ui/typography";
import {
  racialPerks,
  relatedLanguageNames,
  type Rulebook,
} from "@/lib/rules/character";
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
        <MediaObject image={race.image_url} imageClassName="sm:w-44 shadow-md">
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
        </MediaObject>
        <Overline className="mt-6">Racial perks (pick one)</Overline>
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
    <SimpleTable
      head={["Background", "Gear", "Purse", "Languages", "+1 in"]}
      rows={rb.backgrounds.map((b) => [
        <strong key="n" className="libre text-dnd-red">
          {b.name}
        </strong>,
        <EquipmentList key="e" items={rb.items} equipment={b.equipment} />,
        `${formatCoins(b.coins_copper)} · ${b.material} Material`,
        `+${b.extra_languages}`,
        b.known_settings,
      ])}
    />
  );

const Languages: React.FC<{ rb: Rulebook }> = ({ rb }) => (
  <SimpleTable
    head={["Language", "Spoken by", "Racial language of", "Related to"]}
    rows={rb.languages.map((l) => [
      <strong key="n" className="libre text-dnd-red">
        {l.name}
      </strong>,
      l.description,
      rb.races
        .filter((r) => r.language_id === l.id)
        .map((r) => r.name)
        .join(", ") || "—",
      relatedLanguageNames(rb, l.id) || "—",
    ])}
  />
);

const Traits: React.FC<{ rb: Rulebook }> = ({ rb }) => {
  const premade = rb.traits.filter((t) => !t.is_custom);
  return premade.length === 0 ? (
    <p>None written yet.</p>
  ) : (
    <TraitList traits={premade} className="clear-both my-6" />
  );
};

const Chapters: React.FC<{ nav: NavChapter[] }> = ({ nav }) => (
  <div className="clear-both grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
    {nav.map((chapter) => (
      <Panel key={chapter.id} tight>
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
      </Panel>
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
