import { Example, Formula, Note, Res, RuleLink, RulePage } from "../_components";

const DefendingPage = () => (
  <RulePage slug="defending">
    <p>
      When an attack, a spell or any other hostile effect targets your
      character, they can answer with a <strong>defense roll</strong>: a{" "}
      <RuleLink to="dice">challenge</RuleLink> using whichever skill fits the
      defence, against the attacker&apos;s roll.
    </p>
    <Formula>your d20 + class level vs their d20 + class level</Formula>
    <ul>
      <li>
        A defense roll uses your <strong>action</strong> for the turn, or the{" "}
        <RuleLink to="manoeuvres">Defense manoeuvre</RuleLink> to defend without
        spending it.
      </li>
      <li>
        <strong>Losing</strong> it is a failure like any other: exhaust
        resources equal to the <RuleLink to="danger-level">Danger Level</RuleLink>,
        or take a Scar, to avert it.
      </li>
    </ul>
    <Example>
      <p>
        A bandit lunges at Michal. Michal parries with his sword (Fighter 4):
        his 9 + 4 = 13 against the bandit&apos;s 15. He loses. At Danger Level
        3 he exhausts 3 <Res r="body" /> and twists away at the last moment,
        with a fresh rip in his favourite coat.
      </p>
    </Example>

    <h2>Undefended attacks</h2>
    <p>
      If the target doesn&apos;t or can&apos;t defend, nobody rolls against
      the attacker. The attacker makes a <strong>skill check</strong> to see if
      the attack lands. A landed hit <strong>can&apos;t be averted</strong>{" "}
      with Exhaustion, because the target made no roll to save. The attacker
      rolls damage, and the target takes a Scar:
    </p>
    <Formula>scar level = damage roll − armour rating</Formula>
    <p>
      See <RuleLink to="armour">Damage and armour</RuleLink>.
    </p>

    <Note title="Saving throws">
      <p>
        This replaces 5E&apos;s saving throws. Wherever an old text says
        &ldquo;saving throw&rdquo;, read <strong>defense roll</strong>.
        &ldquo;Automatically fails saving throws&rdquo; means the target
        automatically loses defense rolls.
      </p>
    </Note>
  </RulePage>
);

export default DefendingPage;
