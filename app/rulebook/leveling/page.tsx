import { Example, Formula, Note, Res, RuleLink, RulePage } from "../_components";

const LevelingPage = () => (
  <RulePage slug="leveling">
    <p>
      Your DM grants levels. Each one gives <strong>one point</strong> to
      invest in one of four ways:
    </p>
    <ol>
      <li>
        <strong>Raise a class level</strong>, up to 5. It comes with one perk
        of that class whose requirements you meet.
      </li>
      <li>
        <strong>Take a new class at level 1.</strong> Basic classes are always
        open; <RuleLink to="advanced-classes">advanced</RuleLink> and{" "}
        <RuleLink to="mighty-classes">mighty</RuleLink> ones need their
        parents first.
      </li>
      <li>
        <strong>Take an extra perk</strong> in a class that&apos;s already at
        level 5.
      </li>
      <li>
        <strong>Add +1</strong> to <Res r="body" />, <Res r="soul" /> or{" "}
        <Res r="charisma" />.
      </li>
    </ol>
    <Note title="Starting levels go into classes">
      <p>
        Options 3 and 4 are only for levels gained in play. The levels a
        character starts with all go into classes.
      </p>
    </Note>
    <Example>
      <p>
        After the burgmaster affair, the DM grants Michal level 8. His{" "}
        <Res r="charisma" /> 3 keeps failing him, so instead of a class level
        he takes +1 <Res r="charisma" />. It&apos;s not much, but it&apos;s one
        more apology.
      </p>
    </Example>

    <h2>Checking a character</h2>
    <p>Every point goes somewhere, so a sheet can always be checked:</p>
    <Formula>level = class perks + (Body + Soul + Charisma − 15)</Formula>
    <p>
      Count only perks you <em>chose</em>: not the racial perk, not core spells
      (they come free with the class) and not aspects (they unlock by
      themselves). Count resources without perk bonuses.
    </p>
  </RulePage>
);

export default LevelingPage;
