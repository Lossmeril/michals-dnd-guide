import { Example, Figure, Res, RuleLink, RulePage, RuleTable } from "../_components";

const DangerLevelPage = () => (
  <RulePage slug="danger-level">
    <Figure src="/img/rulebook/danger-level.webp" alt="Adventurers in a collapsing ruin" />
    <p>
      The Danger Level is a single number for how risky, chaotic or technically
      nasty the current situation is. <strong>The default is 3.</strong>
    </p>
    <p>
      To avoid a bad outcome (getting hurt, failing a task, losing an item,
      setting off a trap, making a fool of yourself), a character spends
      resources equal to the Danger Level from the pool the skill uses. That is{" "}
      <RuleLink to="exhaustion">Exhaustion</RuleLink>.
    </p>

    <h2>What the numbers feel like</h2>
    <RuleTable
      head={[
        "Level",
        "Feel",
        <Res key="b" r="body" />,
        <Res key="s" r="soul" />,
        <Res key="c" r="charisma" />,
      ]}
      rows={[
        ["1", "Walk in a park", "Crossing a calm river", "Prying open a hayloft latch", "Puppet show for children"],
        ["2", "Same shit, different day", "Crossing a wild mountain stream", "Picking a basic cell lock", "Adventure stories for villagers"],
        ["3", "Time to file a safety report", "Crossing a swollen river", "Several locks on a merchant's chest", "Impressing bored city folk"],
        ["4", "The danger is real", "River with floating debris", "Disarming a dart trap in a steel lock", "Flawless show for a critical audience"],
        ["5+", "“The fuck did I stumble into?”", "Debris-filled river in a storm", "Decoding mechanisms as the ceiling collapses", "Forbidden performance for a decadent audience"],
      ]}
    />

    <h2>Raising and lowering it</h2>
    <ul>
      <li>
        The DM <strong>raises</strong> it when things get hostile, urgent or
        chaotic, or when a character is in a bad spot.
      </li>
      <li>
        Players <strong>lower</strong> it by improving their position: finding
        cover, making a distraction, talking an enemy down.
      </li>
    </ul>

    <h2>Each to their own</h2>
    <p>
      Characters in the same scene can face different Danger Levels.
    </p>
    <Example>
      <p>
        A warrior just knocked into the mud faces Danger Level 5 against the
        next blow. Her spellcasting friend on the hill behind her casts at
        Danger Level 2, and feels a bit guilty about it.
      </p>
    </Example>
    <p>
      In short: the Danger Level is how screwed you are if things go wrong, and
      how much it costs to stay in the fight.
    </p>
  </RulePage>
);

export default DangerLevelPage;
