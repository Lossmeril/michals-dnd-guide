// What the data shortcodes (::races, ::classes{rank=basic}, …) show on a real
// rulebook page. The admin preview shows placeholders instead.

import { Fragment } from "react";
import Link from "next/link";
import EquipmentList from "@/components/game/equipmentList";
import { PerkTile } from "@/components/game/perkTree";
import { TraitList } from "@/components/game/traitCard";
import RuleMarkdown, { type RenderBlock } from "@/components/rulebook/ruleMarkdown";
import { SimpleTable } from "@/components/ui/dataTable";
import MediaObject from "@/components/ui/mediaObject";
import Panel from "@/components/ui/panel";
import { Overline } from "@/components/ui/typography";
import {
  racialPerks,
  relatedLanguageNames,
  type Rulebook,
} from "@/lib/rules/character";
import type { Dict } from "@/lib/i18n/dictionaries";
import type { Lang } from "@/lib/i18n/localize";
import { type Bestiary, creatureStatBlock } from "@/lib/rules/bestiary";
import { formatCoins } from "@/lib/rules/format";
import { hrefOf, type NavChapter } from "@/lib/rulebookNav";
import type { Tables } from "@/lib/types/database.types";
import ClassGrid from "./classGrid";
import TravelCalculator from "./travel/travelCalculator";

type BlockProps = { rb: Rulebook; t: Dict };

const Races: React.FC<BlockProps> = ({ rb, t }) =>
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
            <strong>{t.blocks.speed}:</strong> {race.speed} m
          </p>
          <p className="text-sm">
            <strong>{t.blocks.language}:</strong>{" "}
            {language ? t.blocks.raceLanguage(language.name) : t.blocks.chooseLanguage}
          </p>
        </MediaObject>
        <Overline className="mt-6">{t.blocks.racialPerks}</Overline>
        {perks.length === 0 ? (
          <p className="text-sm text-dnd-ink/70">{t.blocks.noneYet}</p>
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

const Backgrounds: React.FC<BlockProps> = ({ rb, t }) =>
  rb.backgrounds.length === 0 ? (
    <p>{t.blocks.noneYet}</p>
  ) : (
    <SimpleTable
      head={t.blocks.backgroundHead}
      rows={rb.backgrounds.map((b) => [
        <strong key="n" className="libre text-dnd-red">
          {b.name}
        </strong>,
        <EquipmentList key="e" items={rb.items} equipment={b.equipment} />,
        `${formatCoins(b.coins_copper)} · ${t.blocks.material(b.material)}`,
        `+${b.extra_languages}`,
        b.known_settings,
      ])}
    />
  );

const Languages: React.FC<BlockProps> = ({ rb, t }) => (
  <SimpleTable
    head={t.blocks.languageHead}
    rows={rb.languages.map((l) => [
      <Fragment key="n">
        <strong className="libre text-dnd-red">{l.name}</strong>
        {l.sample && (
          <span className="block mt-1 libre italic text-dnd-ink/80 whitespace-pre-line">
            {l.sample}
          </span>
        )}
      </Fragment>,
      l.description,
      rb.races
        .filter((r) => r.language_id === l.id)
        .map((r) => r.name)
        .join(", ") || "—",
      relatedLanguageNames(rb, l.id) || "—",
    ])}
  />
);

const Traits: React.FC<BlockProps> = ({ rb, t }) => {
  const premade = rb.traits.filter((trait) => !trait.is_custom);
  return premade.length === 0 ? (
    <p>{t.blocks.noneYet}</p>
  ) : (
    <TraitList traits={premade} className="clear-both my-6" />
  );
};

const Weapons: React.FC<BlockProps> = ({ rb, t }) => (
  <SimpleTable
    head={t.blocks.weaponHead}
    rows={rb.items
      .filter((i) => i.kind === "weapon" || i.kind === "shield")
      .map((i) => [
        <strong key="n" className="libre text-dnd-red">
          {i.name}
        </strong>,
        i.damage ?? "—",
        i.damage_type ?? "—",
        i.properties ?? "—",
        i.free_manoeuvre ? t.manoeuvres[i.free_manoeuvre] : "—",
      ])}
  />
);

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

/** A bestiary creature's stat block, by its id: ::creature{id="wyvern"} */
const CreatureBlock: React.FC<{ b: Bestiary | null; id?: string; t: Dict; lang: Lang }> = ({
  b,
  id = "",
  t,
  lang,
}) => {
  const creature = b?.creatures.find((c) => c.id === id);
  return creature && b ? (
    <RuleMarkdown content={creatureStatBlock(b, creature)} lang={lang} />
  ) : (
    <p className="text-sm text-dnd-red">{t.rulebook.unknownCreature(id)}</p>
  );
};

/** Fills the data shortcodes from the rulebook tables, the bestiary and the nav */
export const blockRenderer =
  (
    rb: Rulebook | null,
    nav: NavChapter[],
    t: Dict,
    { bestiary = null, lang }: { bestiary?: Bestiary | null; lang: Lang },
  ): RenderBlock =>
  function renderBlock(name, props) {
    if (name === "chapters") return <Chapters nav={nav} />;
    if (name === "travel-calculator") return <TravelCalculator />;
    if (name === "creature")
      return <CreatureBlock b={bestiary} id={props.id} t={t} lang={lang} />;
    if (!rb) return null;
    switch (name) {
      case "races":
        return <Races rb={rb} t={t} />;
      case "backgrounds":
        return <Backgrounds rb={rb} t={t} />;
      case "languages":
        return <Languages rb={rb} t={t} />;
      case "traits":
        return <Traits rb={rb} t={t} />;
      case "weapons":
        return <Weapons rb={rb} t={t} />;
      case "classes": {
        const rank = RANKS.find((r) => r === props.rank) ?? "basic";
        return <ClassGrid rb={rb} rank={rank} />;
      }
      default:
        return null;
    }
  };
