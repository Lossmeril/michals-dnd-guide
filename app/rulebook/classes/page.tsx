import { Example, Figure, Note, RuleLink, RulePage, RuleTable } from "../_components";

const BLENDS = [
  {
    name: "Hakon, the bear-clan berserk",
    image: "/img/classes/fighter.webp",
    build: "Fighter 5 · Juggler 1 · Warrior 1",
    text: "A towering warrior who crushes foes with brute strength, then surprises them with a thrown axe. Heavy on Fighter, he plays like a classic barbarian.",
  },
  {
    name: "Sir Ulrich of Velgraad",
    image: "/img/classes/warrior.webp",
    build: "Fighter 3 · Juggler 3 · Warrior 1",
    text: "A charismatic knight, as good in the saddle and the tourney as in a sword fight. Even levels make a rounded character.",
  },
  {
    name: "Zara the Recluse",
    image: "/img/rulebook/warrior-monk.webp",
    build: "Fighter 1 · Juggler 5 · Warrior 1",
    text: "A war monk who moves like a shadow, all acrobatics, throwing blades and precise strikes. Heavy on Juggler, she's close to a 5E Monk.",
  },
];

const ClassesPage = () => (
  <RulePage slug="classes">
    <Figure src="/img/rulebook/classes.webp" alt="A band of adventurers" />
    <p>
      In 5E you pick a class and stay in it until level 20, unless you&apos;re
      brave enough to learn the multiclassing rules. Here,{" "}
      <strong>classes are bundles of skills</strong>, not a whole identity, and
      characters are expected to mix them.
    </p>

    <h2>Skills</h2>
    <ul>
      <li>
        Each class has <strong>skills</strong>, each tied to a resource. A roll
        for a skill adds that class&apos;s level.
      </li>
      <li>
        Anyone can attempt a skill from a class they don&apos;t have, just
        without the bonus. A pure Medic doing acrobatics rolls a plain 2d6.
      </li>
      <li>
        A <strong>unique</strong> skill is the exception: only characters with
        the class can attempt it.
      </li>
      <li>The highest class level is <strong>5</strong>.</li>
    </ul>
    <Example>
      <p>
        Want to be good at fighting? You no longer juggle Strength,
        Constitution and an Intimidation proficiency. Take Fighter: it bundles
        armed combat, raw strength, warrior knowledge and scaring people into
        one number.
      </p>
    </Example>

    <h2>Magic</h2>
    <RuleTable
      head={["Kind", "How it works"]}
      rows={[
        ["None", "No spells."],
        ["Full", "Core spells from the start; more unlock as perks."],
        ["Pseudo", "Core spells too, but the caster pays with a Scar to use them."],
      ]}
    />

    <h2>Three tiers</h2>
    <ul>
      <li>
        <strong><RuleLink to="basic-classes">5 basic classes</RuleLink></strong>{" "}
        are always open.
      </li>
      <li>
        <strong><RuleLink to="advanced-classes">10 advanced classes</RuleLink></strong>,
        one for every pair of basic classes, unlock once their two parents
        total 6 levels.
      </li>
      <li>
        <strong><RuleLink to="mighty-classes">6 mighty classes</RuleLink></strong>{" "}
        unlock once their advanced classes total 6 levels.
      </li>
    </ul>

    <h2>Blending classes</h2>
    <p>
      The parents can add up to 6 in any split, and the split shapes the
      character. Three Warriors, three very different people:
    </p>
    <div className="grid grid-cols-1 gap-4 my-6">
      {BLENDS.map((b) => (
        <div
          key={b.name}
          className="flex flex-col sm:flex-row gap-4 p-4 bg-dnd-bg border border-dnd-gold rounded-lg shadow-md"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={b.image}
            alt=""
            className="w-full sm:w-32 aspect-[3/4] object-cover object-top rounded border border-dnd-gold shrink-0"
          />
          <div>
            <p className="libre font-bold text-dnd-red text-lg">{b.name}</p>
            <p className="text-xs font-bold text-dnd-ink/70 mb-2">{b.build}</p>
            <p className="text-sm">{b.text}</p>
          </div>
        </div>
      ))}
    </div>
    <Note title="Perks">
      <p>
        Each class level comes with one perk of that class. Perks are listed on
        each class&apos;s own page.
      </p>
    </Note>
  </RulePage>
);

export default ClassesPage;
