import Link from "next/link";
import { Example, Note, Res, RuleLink, RulePage } from "./_components";
import { CHAPTERS, hrefOf } from "./nav";

const RulebookHome = () => (
  <RulePage
    slug=""
    title="Michal's rulebook"
    intro="A gritty, low-to-mid fantasy ruleset stitched together from Dračí Doupě 2 and D&D 5th Edition."
  >
    <p>
      If you have played 5E, most of the table will feel familiar: you roll
      dice, you fight things, you level up. Three things work differently, and
      they are the whole point.
    </p>
    <ul>
      <li>
        <strong>No attributes.</strong> No Strength, no Dexterity, no rolling
        stats. Characters have three <RuleLink to="resources">resource
        pools</RuleLink>, <Res r="body" />, <Res r="soul" /> and{" "}
        <Res r="charisma" />, which they spend to push through danger.
      </li>
      <li>
        <strong>Bonuses come from classes.</strong> Every roll adds a{" "}
        <RuleLink to="classes">class level</RuleLink>. Classes are bundles of
        skills, and characters mix them freely.
      </li>
      <li>
        <strong>The worse it gets, the more it costs.</strong> The{" "}
        <RuleLink to="danger-level">Danger Level</RuleLink> sets how much a
        character pays to avoid a bad outcome. Pay too much and you start
        collecting <RuleLink to="scars">Scars</RuleLink>.
      </li>
    </ul>

    <Example>
      <p>
        Michal fails to climb the city wall. At Danger Level 3 he can spend 3{" "}
        <Res r="body" /> and scramble up anyway, sweating and swearing. With
        only 1 <Res r="body" /> left, he can still make it, but he takes a Scar:
        a sprained wrist that will follow him for weeks.
      </p>
    </Example>

    <Note title="Story boxes">
      <p>
        Green boxes like the one above are the story: examples and flavour.
        Everything outside them is the rules. Skip the boxes if you only need
        the numbers.
      </p>
    </Note>

    <h2>Chapters</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {CHAPTERS.map((chapter) => (
        <div
          key={chapter.title}
          className="p-4 bg-dnd-bg border border-dnd-gold rounded-lg shadow-md"
        >
          <p className="libre font-bold text-dnd-red-dark text-lg mb-2">
            {chapter.title}
          </p>
          <ul className="text-sm flex flex-col gap-1">
            {chapter.pages.map((p) => (
              <li key={p.slug}>
                <Link href={hrefOf(p.slug)} className="link">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </RulePage>
);

export default RulebookHome;
