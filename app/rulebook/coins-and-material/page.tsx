import { Example, Res, RuleLink, RulePage, RuleTable } from "../_components";

const CoinsPage = () => (
  <RulePage slug="coins-and-material">
    <h2>Coins</h2>
    <RuleTable
      head={["Coin", "Worth"]}
      rows={[
        ["1 gold", "100 silver"],
        ["1 silver", "10 copper"],
      ]}
    />
    <p>
      One gold is a lot of money for a commoner. Prices are the DM&apos;s
      call, and haggling is a{" "}
      <Res r="charisma" /> skill check.
    </p>

    <h2>Material</h2>
    <p>
      <Res r="material" /> is abstract supplies: herbs, wood, thread, scrap,
      reagents. <strong>1 Material is worth 1 silver.</strong> You don&apos;t
      track what exactly is in your pack; you say what it was when you spend
      it.
    </p>
    <ul>
      <li>Many crafted effects scale with the Material put in.</li>
      <li>
        Material can pay for <RuleLink to="healing">healing a Scar</RuleLink>{" "}
        (1 point each, with the DM&apos;s blessing) and for{" "}
        <RuleLink to="item-scars">repairs</RuleLink>.
      </li>
      <li>Some perks cost Material to use instead of exhausting a pool.</li>
    </ul>
    <Example>
      <p>
        The party&apos;s Medic has 4 Material. When Michal comes back from the
        tavern bleeding, the Medic declares that 3 of it were clean linen and
        a pot of honey, and gets to work.
      </p>
    </Example>
  </RulePage>
);

export default CoinsPage;
