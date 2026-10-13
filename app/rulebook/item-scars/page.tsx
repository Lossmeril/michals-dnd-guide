import { Example, Note, RuleLink, RulePage } from "../_components";

const ItemScarsPage = () => (
  <RulePage slug="item-scars">
    <p>Your gear can take Scars too, and sometimes it should take one for you.</p>

    <h2>Breaking an item to avert failure</h2>
    <p>
      You can scar one of your items instead of yourself. The item{" "}
      <strong>breaks</strong>, and like a Scar you take, it gives{" "}
      <strong>2 points</strong> to spend right away.
    </p>
    <ul>
      <li>
        Only for an activity the item would <strong>reasonably be involved in</strong>:
        a lockpick for a lock, a sword for a fight. Creative uses are welcome
        if the DM buys them.
      </li>
      <li>
        The 2 points count towards <strong>whichever pool</strong> the failed
        roll needed.
      </li>
      <li>Leftover points are lost.</li>
      <li>
        Only <strong>proper items</strong> count. A chair leg used as a club
        can&apos;t be scarred for points, unless a perk says otherwise.
      </li>
    </ul>
    <Example>
      <p>
        Cornered by a jealous husband, Michal needs one more <strong>Charisma</strong>{" "}
        point to talk his way out. He produces the party&apos;s only map to the
        dungeon, folds it into a paper rose with a flourish, and sets it on
        fire. The husband is charmed. The party is not.
      </p>
    </Example>

    <h2>Armour</h2>
    <p>
      When the DM scars armour, its rating drops by 1. Light armour (rating 1)
      breaks instead. See <RuleLink to="armour">Damage and armour</RuleLink>.
    </p>

    <h2>Repairs</h2>
    <p>
      Repairing works like <RuleLink to="healing">healing a Scar</RuleLink>: 5
      resources, usually Material, and a successful skill check.
    </p>
    <Note title="It has to be plausible">
      <p>
        An old map or an antique sword can&apos;t be restored to its former
        glory. A cracked shield can.
      </p>
    </Note>
  </RulePage>
);

export default ItemScarsPage;
