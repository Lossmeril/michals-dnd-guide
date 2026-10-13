import { Example, Figure, Note, Res, RuleLink, RulePage, RuleTable } from "../_components";

const ManoeuvresPage = () => (
  <RulePage slug="manoeuvres">
    <Figure src="/img/rulebook/defense.webp" alt="A fighter raising a shield" />
    <p>
      Manoeuvres are tricks that tip an action in your favour. Each costs{" "}
      <strong>1 point of the governing resource</strong>, unless an ability
      makes it free.
    </p>
    <RuleTable
      head={["Manoeuvre", "Effect"]}
      rows={[
        ["Precise", "Roll the action with advantage. Free when you already have advantage."],
        ["Mighty", "The attack deals an extra damage die, or +1 to the exhaustion cost against a target without hit points."],
        ["Cunning", "After the attack, the target is knocked prone, grappled, or pushed in any direction."],
        ["Quick", "Roll initiative with advantage. Free with initiative advantage."],
        [
          "Defense",
          <>
            Make a <RuleLink to="defending">defense roll</RuleLink> without spending your action.
          </>,
        ],
        ["Widespread", "The action affects several targets instead of one."],
      ]}
    />
    <Example>
      <p>
        Two goblins rush Michal at once. He pays 1 <Res r="body" /> for
        Widespread and swings at both. Then a third one jumps him from behind
        after his action is gone, so he pays another 1 <Res r="body" /> for
        Defense and parries anyway. Three goblins, two points, one very tired
        Fighter.
      </p>
    </Example>
    <Note title="Advantage makes some of them free">
      <p>
        With <RuleLink to="advantage">advantage</RuleLink> on the roll, Precise
        costs nothing; with initiative advantage, Quick costs nothing.
      </p>
    </Note>
  </RulePage>
);

export default ManoeuvresPage;
