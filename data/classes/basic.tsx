import { Magic, BasicClass, ClassRank, Resource } from "@/types/classes";
import { perks } from "../perks/perks";

const defaultBasicClass = { classRank: ClassRank.basic };

export const basicClasses: BasicClass[] = [
  //------ FIGHTER ------
  {
    ...defaultBasicClass,
    name: "Fighter",
    desc: "You are the heart of every battle, a fearless warrior forged in the fires of conflict. With unmatched skill in arms and armor, you lead the charge, protect your allies, and chase glory. Whether a noble knight or a rugged mercenary, your path is one of heroism, honor, and hard-won renown.",

    isMagic: Magic.false,
    skills: [
      {
        name: "Foot Close Combat against Humans and Beasts",
        desc: "Fighting on foot against humans and beasts, armed or unarmed. Includes attacks, parries, feints, and advanced weapon handling.",
        ability: Resource.body,
        unique: false,
      },
      {
        name: "Strength",
        desc: "Brute physical might used for breaking doors, lifting heavy loads, pushing obstacles, and feats of raw force.",
        ability: Resource.body,
        unique: false,
      },
      {
        name: "Warrior Knowledge",
        desc: "Knowledge of famous battles, legendary warriors, weapons, armor-crafting techniques, and evaluating the quality and properties of arms and armor.",
        ability: Resource.soul,
        unique: false,
      },
      {
        name: "Confidence and intimidation",
        desc: "Commanding presence rooted in pride and bravado—boasting, taunting, praising or belittling others, and intimidating opponents.",
        ability: Resource.charisma,
        unique: false,
      },
    ],
    perks: [
      perks.CrowdChampion,
      perks.Gladiator,
      perks.BrawnsOverBrains,
      perks.UWotM8,
      perks.Bodyguard,
      perks.FlyingWeapon,
      perks.RockFist,
      perks.KnowThyEnemy,
    ],
    colorScheme: "red",
  },
  //------ HUNTER ------
  {
    ...defaultBasicClass,
    name: "Hunter",
    desc: "You are a master of the wild, a tracker, hunter, and survivalist who thrives where others falter. You excel at finding prey, setting traps, taming beasts, and navigating untamed lands. Whether pursuing foes or feeding allies, your skills make you an invaluable guide and a deadly marksman.",

    isMagic: Magic.false,
    skills: [
      {
        name: "Foot Ranged Combat against Humans and Beasts",
        desc: "Shooting bows or crossbows at people, animals, or stationary targets with reliable accuracy.",
        ability: Resource.body,
        unique: false,
      },
      {
        name: "Wilderness Movement",
        desc: "Swimming, boating, silent movement in forests, and stamina in harsh conditions such as cold, hunger, thirst, or long treks.",
        ability: Resource.body,
        unique: false,
      },
      {
        name: "Wilderness Survival",
        desc: "Using heightened senses and fieldcraft to find shelter, water, and food; build fires; navigate terrain; avoid danger; and hide oneself or objects.",
        ability: Resource.soul,
        unique: false,
      },
      {
        name: "Hunting",
        desc: "Setting and disarming traps, baiting animals, fishing, tracking creatures, and processing hides, meat, bones, and trophies for trade.",
        ability: Resource.soul,
        unique: false,
      },
      {
        name: "Animal Handling",
        desc: "Reading, calming, directing, frightening, or luring animals, including mimicking calls and understanding their intentions.",
        ability: Resource.charisma,
        unique: false,
      },
      {
        name: "Animal Training",
        desc: "Finding, taming, and training animals, earning their trust, and commanding them to track, follow, or perform practical tasks.",
        ability: Resource.charisma,
        unique: false,
      },
    ],
    perks: [
      perks.OneEyeOpen,
      perks.Aliens,
      perks.MacGyver,
      perks.Sniper,
      perks.WildThing,
      perks.SoonMayTheWellermanCome,
      perks.SharpSenses,
      perks.WeatherBoy,
      perks.Restless,
      perks.BeastMaster,
    ],
    colorScheme: "green",
  },
  //------ JUGGLER ------
  {
    ...defaultBasicClass,
    name: "Juggler",
    desc: "A cunning performer and quick-thinking rogue, the Juggler thrives on wit, agility, and charm. Master of sleight of hand, acrobatics, and clever disguises, they navigate danger with flair. Whether dazzling crowds or outsmarting enemies, every move is a blend of artistry and deception.",

    isMagic: Magic.false,
    skills: [
      {
        name: "Foot Throwing against Humans and Beasts",
        desc: "Throwing knives, stones, or other small weapons at people, animals, or targets with practiced precision.",
        ability: Resource.body,
        unique: false,
      },
      {
        name: "Acrobatics",
        desc: "Climbing, balancing, vaulting, dodging danger, escaping restraints, and performing agile maneuvers on foot or horseback.",
        ability: Resource.body,
        unique: false,
      },
      {
        name: "Tricks and Sleight of Hand",
        desc: "Juggling, palming small objects, creating distractions, and performing nimble hand tricks with precision and flair.",
        ability: Resource.body,
        unique: false,
      },
      {
        name: "Urban survival",
        desc: "Navigating city streets, finding shelter, understanding the dynamic of the environment, avoiding danger, finding goods and services, hiding in urban settings or blending into crowds.",
        ability: Resource.soul,
        unique: false,
      },
      {
        name: "Influence and Deception",
        desc: "Persuading, hiding true intentions, bluffing, lying convincingly, adopting disguises or false identities, drawing attention, seducing, mimicking, performing for crowds, instrument playing, singing, dance, poetry, painting or chiseling",
        ability: Resource.charisma,
        unique: false,
      },
    ],
    perks: [
      perks.Quickchange,
      perks.Androgynous,
      perks.StartingABand,
      perks.DonJuan,
      perks.HiddenPocket,
      perks.TwoBirds,
      perks.RandomBullshitGo,
      perks.MissionPossible,
      perks.SteadyHands,
    ],
    colorScheme: "yellow",
  },
  //------ MEDIC ------
  {
    ...defaultBasicClass,
    name: "Medic",
    desc: "A healer and alchemist, the Medic mends wounds, cures ailments, and crafts potions. Skilled in poisons and remedies alike, they bring relief to allies and leverage their insight into human nature to negotiate in dire times. Whether in bustling cities or remote villages, their art saves lives and turns the tide of fate.",

    isMagic: Magic.false,
    skills: [
      {
        name: "Endurance",
        desc: "Resisting poison, illness, pain, exhaustion, and harsh physical conditions such as cold, heat, hunger, or injury.",
        ability: Resource.body,
        unique: false,
      },
      {
        name: "Healing human body",
        desc: "Diagnosing injuries and illnesses, treating wounds, stopping bleeding, stabilizing patients, preparing basic remedies, identifying work of poisons, dental care, barber skills.",
        ability: Resource.soul,
        unique: false,
      },
      {
        name: "Potions and Poisons",
        desc: "Identifying, brewing, and understanding potions, salves, poisons, and antidotes, including their effects and proper usage, harvesting ingredients.",
        ability: Resource.soul,
        unique: false,
      },
      {
        name: "Negotiation",
        desc: "Persuading, judging people's limits, bargaining, reading people’s intentions, calming frightened or hostile individuals.",
        ability: Resource.charisma,
        unique: false,
      },
    ],
    perks: [
      perks.OmniPotion,
      perks.GardenOfEden,
      perks.WalkingBathhouse,
      perks.GoodSamaritan,
      perks.Negotiator,
      perks.GoodAdvice,
      perks.FieldMedic,
      perks.ItsNotASacrifice,
      perks.Medicineman,
      perks.Poisoner,
      perks.UnusualPoison,
    ],

    colorScheme: "blue",
  },
  //------ INCANTOR ------
  {
    ...defaultBasicClass,
    name: "Incantor",
    desc: "Master of the arcane and divine, the Incantor wields magic and rituals to shape the world. Skilled in ancient lore and sensing the supernatural, they communicate with spirits, cast blessings and curses, and harness relics of power. Whether scholar, mystic, or prophet, they channel forces beyond mortal understanding.",

    isMagic: Magic.true,

    skills: [
      {
        name: "Scholarship",
        desc: "Reading and writing, old languages, folklore, geography, magical theory, rituals, sacred symbols, and sensing traces of supernatural influence.",
        ability: Resource.soul,
        unique: false,
      },
      {
        name: "Healing of the Soul",
        desc: "Understanding and treating mental trauma, despair, shock, and spiritual afflictions, restoring clarity, hope, and emotional balance.",
        ability: Resource.soul,
        unique: false,
      },
      {
        name: "Willpower",
        desc: "Inner strength and mental resilience—enduring fear, resisting coercion, and remaining steadfast against supernatural influences.",
        ability: Resource.soul,
        unique: false,
      },
      {
        name: "Ritual Items",
        desc: "Creating and empowering ritual artifacts such as talismans, charms, and ceremonial tools by infusing them with magical or sacred energy.",
        ability: Resource.soul,
        unique: true,
      },
      {
        name: "Dealing with magical and supernatural beings",
        desc: "Knowledge about supernatural beings, undertanding their motives, limits, strengths and weaknesses, negotiating with them, calming hostile entities, convincing them.",
        ability: Resource.charisma,
        unique: true,
      },
    ],
    coreSpells: [perks.BlessingsAndCurses, perks.EyeSigil],

    perks: [perks.DetectMagic, perks.SigilGuardian],

    colorScheme: "purple",
  },
];

export enum basicClassesEnum {
  "fighter" = 0,
  "hunter" = 1,
  "juggler" = 2,
  "medic" = 3,
  "incantor" = 4,
}
