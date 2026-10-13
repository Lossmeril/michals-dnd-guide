import { Example, Note, Res, RulePage, RuleTable } from "../_components";

const DyingPage = () => (
  <RulePage slug="dying">
    <p>
      A Scar bigger than what&apos;s left of its pool blocks the{" "}
      <strong>whole pool</strong>, and the character starts dying. The same
      happens when a character takes a Scar in a pool that&apos;s already fully
      blocked.
    </p>
    <p>All three pools can kill an adventure, each in its own way:</p>
    <RuleTable
      head={["Pool", "What dying looks like"]}
      rows={[
        [<Res key="b" r="body" />, "Physically dying"],
        [<Res key="s" r="soul" />, "Going mad, or a catatonic state"],
        [<Res key="c" r="charisma" />, "Reputation and self-worth ruined beyond repair"],
      ]}
    />

    <h2>Dying rolls</h2>
    <p>Like 5E death saving throws, for all three pools:</p>
    <ul>
      <li>Each turn, roll a d20.</li>
      <li>
        <strong>10 or more</strong> is a success; three successes and the
        character stabilises.
      </li>
      <li>Three failures, and it&apos;s the end.</li>
    </ul>
    <Example>
      <p>
        An ogre&apos;s club hits Michal for a level-6 <Res r="body" /> Scar
        with only 4 <Res r="body" /> left. The whole pool goes dark and Michal
        hits the ground. He rolls 14, 3, 11, 17: three successes. He lives, but
        he won&apos;t be walking anywhere for a while.
      </p>
    </Example>
    <Note title="Planned">
      <p>
        Perks that let someone within touch distance roll a skill check in the
        dying character&apos;s place.
      </p>
    </Note>
  </RulePage>
);

export default DyingPage;
