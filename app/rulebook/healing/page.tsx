import { Example, Figure, Res, RuleLink, RulePage, RuleTable } from "../_components";

const HealingPage = () => (
  <RulePage slug="healing">
    <Figure src="/img/rulebook/healing.webp" alt="A healer tending a wound" />
    <h2>Healing exhaustion</h2>
    <RuleTable
      head={["Rest", "What it is", "Restores"]}
      rows={[
        ["Poor rest", "Anything less than safe and comfortable: a ditch, a cold camp, a night on watch", "3 exhausted points of your choice"],
        ["Quality rest", "Safe, comfortable and stress-free", "All exhausted points"],
      ]}
    />

    <h2>Healing a Scar</h2>
    <p>Sleep doesn&apos;t heal Scars. Healing one takes three things:</p>
    <ol>
      <li>
        <strong>Dealing with the cause</strong> in the story: treating the
        wound, therapy, paying reparations, rebuilding trust.
      </li>
      <li>
        <strong>5 resource points per Scar level.</strong> A level-2 Scar costs
        10.
      </li>
      <li>
        <strong>One successful skill check per Scar level</strong>, e.g.
        treating the wound.
      </li>
    </ol>
    <p>The points can come from any mix of:</p>
    <ul>
      <li>
        <strong>The bearer&apos;s own pools</strong>, any of the three.{" "}
        <Res r="body" />: it hurts. <Res r="soul" />: the pain wears them out.{" "}
        <Res r="charisma" />: recovering leaves them unsociable.
      </li>
      <li>
        <strong>A healer&apos;s resources</strong>, usually <Res r="soul" />,
        when a perk allows it.
      </li>
      <li>
        <strong>Healing substances</strong> such as ointments and elixirs, each
        worth a fixed number of points; a Medic&apos;s burn ointment might be
        worth 5.
      </li>
      <li>
        <strong>
          <Res r="material" />
        </strong>
        , 1 point each, where it makes sense and after asking the DM: 5
        Material for a proper bandage.
      </li>
    </ul>
    <Example title="Mending a reputation">
      <p>
        Michal&apos;s level-1 <Res r="charisma" /> Scar needs 5 points and one
        successful check. He buys the burgmaster a generous drink, apologises
        until his tongue hurts (a Juggler persuasion check, passed), and pays 3{" "}
        <Res r="charisma" /> and 2 <Res r="soul" /> for the humiliation. The
        Scar is gone. The burgmaster still doesn&apos;t like him.
      </p>
    </Example>
    <p>
      Items heal the same way; see <RuleLink to="item-scars">Item scars</RuleLink>.
    </p>
  </RulePage>
);

export default HealingPage;
