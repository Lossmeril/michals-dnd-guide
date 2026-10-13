import { Example, Formula, Note, Res, RuleLink, RulePage, RuleTable } from "../_components";

const WEAPONS: [string, string, string, string][] = [
  ["Club", "1d4", "Bludgeoning", "Light"],
  ["Dagger", "1d4", "Piercing", "Finesse, Light, Thrown (4/12 m)"],
  ["Greatclub", "1d8", "Bludgeoning", "Two-Handed"],
  ["Handaxe", "1d6", "Slashing", "Light, Thrown (4/12 m)"],
  ["Javelin", "1d6", "Piercing", "Thrown (6/24 m)"],
  ["Light hammer", "1d4", "Bludgeoning", "Light, Thrown (4/12 m)"],
  ["Mace", "1d6", "Bludgeoning", "—"],
  ["Quarterstaff", "1d6", "Bludgeoning", "Versatile (1d8)"],
  ["Sickle", "1d4", "Slashing", "Light"],
  ["Spear", "1d6", "Piercing", "Thrown (4/12 m), Versatile (1d8)"],
  ["Battleaxe", "1d8", "Slashing", "Versatile (1d10)"],
  ["Flail", "1d8", "Bludgeoning", "—"],
  ["Glaive", "1d10", "Slashing", "Heavy, Reach, Two-Handed"],
  ["Greataxe", "1d12", "Slashing", "Heavy, Two-Handed"],
  ["Greatsword", "2d6", "Slashing", "Heavy, Two-Handed"],
  ["Halberd", "1d10", "Slashing", "Heavy, Reach, Two-Handed"],
  ["Longsword", "1d8", "Slashing", "Versatile (1d10)"],
  ["Maul", "2d6", "Bludgeoning", "Heavy, Two-Handed"],
  ["Rapier", "1d8", "Piercing", "Finesse"],
  ["Scimitar", "1d6", "Slashing", "Finesse, Light"],
  ["Shortsword", "1d6", "Piercing", "Finesse, Light"],
  ["Warhammer", "1d8", "Bludgeoning", "Versatile (1d10)"],
  ["Shortbow", "1d6", "Piercing", "Ammunition (16/64 m), Two-Handed"],
  ["Longbow", "1d8", "Piercing", "Ammunition (30/120 m), Heavy, Two-Handed"],
  ["Light crossbow", "1d8", "Piercing", "Ammunition (16/64 m), Loading, Two-Handed"],
  ["Heavy crossbow", "1d10", "Piercing", "Ammunition (20/80 m), Heavy, Loading, Two-Handed"],
];

const DicePage = () => (
  <RulePage slug="dice">
    <p>
      Dice decide what happens when the outcome is uncertain. There are four
      kinds of roll, and every one of them adds the level of the{" "}
      <RuleLink to="classes">class</RuleLink> the skill belongs to.
    </p>

    <h2>Skill check</h2>
    <Formula>2d6 + class level ≥ 9</Formula>
    <p>
      Your character tries to overcome an obstacle that isn&apos;t fighting
      back: a locked door, a cliff, a crowd that needs convincing. Roll two
      six-sided dice and add your level in the class the skill belongs to. 9 or
      more succeeds.
    </p>
    <p>
      No class with that skill? You can still try anything that isn&apos;t a
      unique skill, just without the bonus: a plain 2d6.
    </p>
    <Example>
      <p>
        Michal (Juggler 2) tries to pick a merchant&apos;s pocket. Sleight of
        hand is a Juggler skill, so he rolls 2d6 + 2. He rolls a 4 and a 2: 8 in
        total. One short. The merchant feels a hand on his purse.
      </p>
    </Example>

    <h2>Challenge</h2>
    <Formula>d20 + class level vs d20 + class level</Formula>
    <p>
      Two sides directly against each other: every fight, but also an
      arm-wrestle, a card game or a debate. Both roll a d20 and add their class
      level. The higher result wins; <strong>ties go to the defender</strong>.
    </p>
    <Example>
      <p>
        Michal (Fighter 4) swings at a bandit (Fighter 2). Michal rolls 11 + 4 =
        15, the bandit 13 + 2 = 15. A tie, and the bandit is defending, so the
        blade glances off his shield.
      </p>
    </Example>

    <h2>Initiative</h2>
    <Formula>d20</Formula>
    <p>
      When a fight starts, everyone rolls a plain d20. The highest acts first,
      and so on down. No class level is added.
    </p>

    <h2>Damage</h2>
    <Formula>weapon or ability dice + class level</Formula>
    <p>
      When you hit a monster or another NPC that has hit points, roll the
      weapon&apos;s dice and add your class level. Player characters don&apos;t
      have hit points; damage to them turns into a{" "}
      <RuleLink to="armour">Scar</RuleLink> instead.
    </p>
    <p>
      Weapons use the 5E table, with ranges in metres (see{" "}
      <RuleLink to="combat">units</RuleLink>):
    </p>
    <RuleTable
      head={["Weapon", "Damage", "Type", "Properties"]}
      rows={WEAPONS}
    />
    <Note title="Which resource does the roll use?">
      <p>
        The class gives the bonus; the skill decides which resource you spend
        if the roll goes wrong. Swinging a sword is <Res r="body" />, reading
        old runes is <Res r="soul" />, talking your way past a guard is{" "}
        <Res r="charisma" />. See <RuleLink to="resources">Resources</RuleLink>.
      </p>
    </Note>
  </RulePage>
);

export default DicePage;
