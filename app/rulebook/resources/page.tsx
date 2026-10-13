import { Example, Note, Res, RuleLink, RulePage, RuleTable } from "../_components";

const ResourcesPage = () => (
  <RulePage slug="resources">
    <p>
      In 5E your hero has Strength, Dexterity and Wisdom. We don&apos;t do that
      here. Your character has three pools of effort instead, and spends them
      whenever they push themselves.
    </p>
    <RuleTable
      head={["Resource", "Covers"]}
      rows={[
        [
          <Res key="b" r="body" />,
          "Physical limits and reflexes: strength, speed, agility, coordination, armed combat, climbing, sleight of hand",
        ],
        [
          <Res key="s" r="soul" />,
          "Mind, focus and technical ability: knowledge, perception, languages, lockpicking, spellcasting, alchemy",
        ],
        [
          <Res key="c" r="charisma" />,
          "Communicating, influencing and reading others: intimidation, negotiation, seduction, taming animals, deception",
        ],
      ]}
    />

    <h2>Not hit points, not skill</h2>
    <p>
      Resources are how far your character can push <em>right now</em>. Running
      out of <Res r="body" /> doesn&apos;t mean collapsing, and running out of{" "}
      <Res r="charisma" /> doesn&apos;t make you mute. It means any further
      pushing costs <RuleLink to="scars">Scars</RuleLink>.
    </p>
    <p>
      They aren&apos;t skill either. How good you are comes from your{" "}
      <RuleLink to="classes">class level</RuleLink>; the pool is how long you
      can keep it up.
    </p>
    <Example>
      <p>
        Michal (Fighter 4) has <Res r="body" /> 7, <Res r="soul" /> 5 and{" "}
        <Res r="charisma" /> 3. Sword fighting and intimidation are both Fighter
        skills, so both rolls get +4. But a failed sword fight costs{" "}
        <Res r="body" /> and a failed threat costs <Res r="charisma" />. Michal
        can bully his way through a brawl for a good while; his threats run dry
        after one bad haggle.
      </p>
    </Example>

    <h2>The governing resource</h2>
    <p>
      The skill decides which pool pays, and the situation can change it.
    </p>
    <Note title="Same shot, different pool">
      <p>
        A bow shot in a chaotic battle uses <Res r="body" />: balance and
        reflexes. The same shot in an archery contest uses <Res r="soul" />:
        focus and patience.
      </p>
    </Note>

    <h2>Starting pools and growth</h2>
    <ul>
      <li>
        Every character starts with <strong>15 points</strong> to split freely
        between the three pools.
      </li>
      <li>
        Later, a <RuleLink to="leveling">level-up point</RuleLink> can buy +1
        to a pool instead of a class level. Starting levels can&apos;t.
      </li>
    </ul>

    <h2>Coins and Material</h2>
    <p>
      Two secondary resources live outside the pools: <Res r="coins" /> and{" "}
      <Res r="material" />. See{" "}
      <RuleLink to="coins-and-material">Coins and Material</RuleLink>.
    </p>
  </RulePage>
);

export default ResourcesPage;
