import { Example, Note, RulePage, RuleTable } from "../_components";

const AdvantagePage = () => (
  <RulePage slug="advantage">
    <p>
      Some situations, perks and conditions tip the odds. They work like in
      5E, adapted to our dice.
    </p>

    <h2>Advantage and disadvantage</h2>
    <RuleTable
      head={["Roll", "Advantage", "Disadvantage"]}
      rows={[
        ["Skill check", "Roll 3d6, keep the best two", "Roll 3d6, keep the worst two"],
        ["Challenge", "Roll 2d20, keep the higher", "Roll 2d20, keep the lower"],
        ["Initiative", "Roll 2d20, keep the higher", "Roll 2d20, keep the lower"],
      ]}
    />
    <ul>
      <li>
        <strong>They don&apos;t stack.</strong> Three sources of advantage are
        still one advantaged roll.
      </li>
      <li>
        <strong>They cancel out.</strong> Any advantage and any disadvantage on
        the same roll make it a normal roll, however many sources each side
        has.
      </li>
    </ul>
    <Example>
      <p>
        Michal sneaks through a dark alley with cat-like grace (advantage from a
        perk) and borrowed boots two sizes too big (disadvantage). They cancel
        out. He rolls a normal 2d6, and the boots squeak anyway.
      </p>
    </Example>

    <h2>Bonus dice</h2>
    <p>
      Some abilities grant a <strong>bonus die</strong>, for example a d4 at
      level 1 that grows to a d12 at level 5. During the encounter you may add
      it to <strong>any one roll</strong>: initiative, a skill check, a
      challenge, anything.
    </p>
    <p>Once you decide to roll it, you keep the result, good or bad.</p>
    <Note title="Old texts">
      <p>The old rulebook called these &ldquo;Advantage dice&rdquo;. Same thing.</p>
    </Note>
  </RulePage>
);

export default AdvantagePage;
