import { Res, RuleLink, RulePage } from "../_components";

// Adapted from 5E: saving throws are defense rolls, ability checks are skill
// checks, and "within 5 feet" is 1 metre
const CONDITIONS: [string, React.ReactNode][] = [
  ["Blinded", "Can't see, and automatically fails any skill check that needs sight. Attacks against it have advantage; its attacks and initiative have disadvantage."],
  ["Charmed", "Can't attack the charmer or target them with harmful abilities or magic. The charmer has advantage on social skill checks against it."],
  ["Deafened", "Can't hear, and automatically fails any skill check that needs hearing. Its attacks and initiative have disadvantage."],
  ["Frightened", "While it can see the source of its fear: disadvantage on skill checks, attacks and initiative, and it can't willingly move closer."],
  ["Grappled", "Speed becomes 0. It can still act in place. Ends if the grappler is incapacitated, lets go, or the target is moved out of reach."],
  ["Incapacitated", "Can't take actions or reactions. Mostly a building block of the conditions below."],
  ["Invisible", "Can't be seen without magic or a special sense, but noise and tracks give it away. Rolls against it have disadvantage; its rolls have advantage. Not the same as hidden."],
  [
    "Paralyzed",
    <>
      Incapacitated, can&apos;t move or speak. Automatically loses <Res key="b" r="body" />{" "}
      defense rolls. Attacks against it have advantage, and a hit from within 1 m adds an
      extra damage die.
    </>,
  ],
  [
    "Petrified",
    <>
      Turned to stone with everything it carries. Incapacitated, can&apos;t move or speak,
      unaware of its surroundings. Attacks against it have advantage; it automatically loses{" "}
      <Res key="b" r="body" /> defense rolls, resists all damage, and is immune to poison and
      disease (anything already in its system is paused, not cured).
    </>,
  ],
  ["Prone", "Can only crawl until it stands up. Its attacks have disadvantage. Attacks against it have advantage from within 1 m, disadvantage from further away."],
  [
    "Restrained",
    <>
      Speed becomes 0. Attacks against it have advantage; its attacks have disadvantage, and
      so do its <Res key="b" r="body" /> defense rolls.
    </>,
  ],
  [
    "Stunned",
    <>
      Incapacitated, can&apos;t move, speaks only falteringly. Automatically loses{" "}
      <Res key="b" r="body" /> defense rolls. Attacks against it have advantage; its attacks
      and initiative have disadvantage.
    </>,
  ],
  [
    "Unconscious",
    <>
      Incapacitated, can&apos;t move or speak, unaware of its surroundings. Drops what it
      holds and falls prone. Automatically loses <Res key="b" r="body" /> defense rolls.
      Attacks against it have advantage, and a hit from within 1 m adds an extra damage die.
    </>,
  ],
];

const ConditionsPage = () => (
  <RulePage slug="conditions">
    <p>
      Conditions are states that change what a character can do. They come
      from Scars, spells, failed fights and bad decisions, and mostly grant or
      impose <RuleLink to="advantage">advantage and disadvantage</RuleLink>.
    </p>
    <dl className="grid grid-cols-1 gap-3 my-6">
      {CONDITIONS.map(([name, text]) => (
        <div
          key={name}
          id={name.toLowerCase()}
          className="p-4 bg-dnd-bg border border-dnd-gold rounded-lg scroll-mt-8"
        >
          <dt className="libre font-bold text-dnd-red mb-1">{name}</dt>
          <dd className="text-sm">{text}</dd>
        </div>
      ))}
    </dl>
  </RulePage>
);

export default ConditionsPage;
