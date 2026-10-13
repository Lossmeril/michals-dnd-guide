import Link from "next/link";
import { Example, Res, RuleLink, RulePage, RuleTable } from "../_components";

const CreatingPage = () => (
  <RulePage slug="creating-a-character">
    <p>
      The <Link href="/characters/new" className="link">character editor</Link>{" "}
      walks you through all of this and checks the numbers for you.
    </p>
    <ol>
      <li>
        <strong>Pick a starting level</strong> with your DM:
        <RuleTable
          className="my-3"
          head={["Start", "Level", "Typical build"]}
          rows={[
            ["Rags to Riches", "3", "Points spread between two classes"],
            ["Seasoned", "7", "Two basic classes and one advanced class"],
            ["Veteran", "9", "Two basic classes and one advanced class, higher up"],
          ]}
        />
      </li>
      <li>
        <strong>Pick a <RuleLink to="races">race</RuleLink></strong> and one of
        its racial perks.
      </li>
      <li>
        <strong>Spend your levels on <RuleLink to="classes">classes</RuleLink>.</strong>{" "}
        Every starting level goes into a class level; advanced classes unlock
        from basic ones.
      </li>
      <li>
        <strong>Pick class perks:</strong> one per level in each class.
      </li>
      <li>
        <strong>Split 15 points</strong> between <Res r="body" />,{" "}
        <Res r="soul" /> and <Res r="charisma" />. Exactly 15: starting levels
        can&apos;t buy more.
      </li>
      <li>
        <strong>Pick a <RuleLink to="backgrounds">background</RuleLink></strong>:
        starting gear, coins, Material, extra languages and a setting you know.
      </li>
      <li>
        <strong>Pick any <RuleLink to="traits">traits</RuleLink></strong> you
        like. They&apos;re optional.
      </li>
      <li>
        <strong>Write a short personality</strong>: a few words to roleplay
        from. How they talk, what they want, what they can&apos;t stand.
      </li>
    </ol>
    <Example title="Michal at level 7">
      <p>
        Human, with <em>I Know a Guy</em>. Fighter 4, Juggler 2, Warrior 1: 7
        levels, 7 perks. <Res r="body" /> 7, <Res r="soul" /> 5,{" "}
        <Res r="charisma" /> 3. A Criminal background, so he knows every fence
        in the lower town. Personality: &ldquo;Charming until he isn&apos;t.
        Owes money to at least three people.&rdquo;
      </p>
    </Example>
  </RulePage>
);

export default CreatingPage;
