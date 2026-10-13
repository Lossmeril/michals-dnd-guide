import { Example, Formula, Note, Res, RuleLink, RulePage, RuleTable } from "../_components";

const ArmourPage = () => (
  <RulePage slug="armour">
    <h2>Damage against players</h2>
    <p>
      When an NPC lands a hit the player can&apos;t avert, it rolls damage to
      decide how bad the <RuleLink to="scars">Scar</RuleLink> is. The die shows
      how dangerous the attacker is:
    </p>
    <RuleTable
      head={["Attacker", "Die"]}
      rows={[
        ["Weak: a stray dog, a drunk with a bottle", "d4"],
        ["Normal: a bandit, a soldier, a wolf", "d6"],
        ["Big: an ogre, a troll", "d8 or more"],
        ["Gargantuan: a dragon", "Whatever the DM feels the dragon deserves"],
      ]}
    />
    <Formula>scar level = damage roll − armour rating</Formula>
    <p>
      If armour brings the level to 0 or less, the hit is{" "}
      <strong>absorbed</strong> and there&apos;s no Scar. A DM who wants to
      punish the player a little can scar the armour instead.
    </p>
    <Example>
      <p>
        A bandit (d6) rolls a 5 against Michal&apos;s chain shirt (rating 2).
        Michal takes a level-3 <Res r="body" /> Scar: a deep cut along the ribs.
        Had he worn heavy armour, it would have been a level-2 bruise.
      </p>
    </Example>

    <h2>Armour</h2>
    <RuleTable
      head={["Armour", "Rating", "Encumbrance cost"]}
      rows={[
        ["None", "0", "—"],
        ["Light", "1", "—"],
        ["Medium", "2", <>Exhaust 1 <Res key="b" r="body" /></>],
        ["Heavy", "3", <>Exhaust 2 <Res key="b" r="body" /></>],
      ]}
    />
    <p>
      <strong>Encumbrance:</strong> before even attempting something the armour
      gets in the way of, the character first exhausts its cost in{" "}
      <Res r="body" />. That covers stealth, acrobatics, swimming, running, and
      anything else the DM judges the armour would hinder.
    </p>
    <Note title="Scarred armour">
      <p>
        When armour takes a Scar, its rating drops by 1. Light armour breaks.
        See <RuleLink to="item-scars">Item scars</RuleLink>.
      </p>
    </Note>

    <h2>Resistances and weaknesses</h2>
    <RuleTable
      head={["Modifier", "Damage", "Exhaustion cost"]}
      rows={[
        ["Weakness", "Doubled", "Doubled"],
        ["Weakness bonus", "—", "Increased by the bonus"],
        ["Resistance", "Halved", "Halved"],
        ["Resistance bonus", "—", "Reduced by the bonus"],
        ["Immunity", "Negated", "None"],
      ]}
    />
    <p>
      <strong>Damage types:</strong> fire, ice, lightning, poison, psychic,
      necrotic, radiant, force, thunder, acid, piercing, slashing and
      bludgeoning.
    </p>
  </RulePage>
);

export default ArmourPage;
