import { Example, Note, RuleLink, RulePage, RuleTable } from "../_components";

const CombatPage = () => (
  <RulePage slug="combat">
    <p>
      Combat is how the table resolves a fight where several characters clash
      and the outcome is uncertain. It runs in <strong>rounds</strong>, in the
      order of <RuleLink to="dice">initiative</RuleLink>.
    </p>

    <h2>Your turn</h2>
    <ul>
      <li>
        <strong>One action</strong> and <strong>one movement</strong>.
      </li>
      <li>Movement can be split around the action: step in, strike, step back.</li>
      <li>Some abilities grant a bonus action or a reaction on top.</li>
    </ul>

    <h2>Actions</h2>
    <RuleTable
      head={["Action", "What it does"]}
      rows={[
        [
          "Attack",
          <>
            Attack one target within reach with a weapon you hold. More targets
            need the <RuleLink to="manoeuvres">Widespread manoeuvre</RuleLink>.
          </>,
        ],
        ["Cast a spell", "As the spell and your class allow."],
        [
          "Defend",
          <>
            Answer an attack with a <RuleLink to="defending">defense roll</RuleLink>.
            This spends your action unless you use the Defense manoeuvre.
          </>,
        ],
        ["Anything else", "Use an item, help a friend, pull a lever. The DM decides what's a roll."],
      ]}
    />

    <h2>No hit points for players</h2>
    <p>
      Player characters don&apos;t have hit points. They spend resources to
      avoid bad outcomes, and whatever they don&apos;t avoid becomes a{" "}
      <RuleLink to="scars">Scar</RuleLink>. Monsters and NPCs keep their hit
      points and lose them to <RuleLink to="dice">damage rolls</RuleLink>.
    </p>
    <Example>
      <p>
        Michal steps up to a goblin (movement), stabs it (action: a challenge
        he wins, 1d6 + 4 damage), and steps back behind the door (the rest of
        his movement). The goblin has 7 hit points and 9 damage to think
        about. Not for long.
      </p>
    </Example>

    <h2>Units</h2>
    <p>
      The rulebook uses <strong>metres</strong>. Old 5E values convert at a
      simple 5 ft = 1 m.
    </p>
    <RuleTable
      head={["5E", "Here"]}
      rows={[
        ["5 ft (adjacent, “within 5 feet”)", "1 m"],
        ["30 ft walking speed", "6 m"],
        ["Thrown 20/60 ft", "4/12 m"],
        ["Thrown 30/120 ft (javelin)", "6/24 m"],
      ]}
    />
    <Note title="Reading old texts">
      <p>
        Wherever a perk or spell still says feet, divide by five. Wherever it
        says &ldquo;saving throw&rdquo;, read <RuleLink to="defending">defense roll</RuleLink>.
      </p>
    </Note>
  </RulePage>
);

export default CombatPage;
