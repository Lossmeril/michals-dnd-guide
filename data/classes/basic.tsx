import { Magic, BasicClass, ClassRank } from "@/types/classes";
import { perks } from "../perks/perks";

const defaultBasicClass = { classRank: ClassRank.basic };

export const basicClasses: BasicClass[] = [
  {
    ...defaultBasicClass,
    name: "Fighter",
    desc: "You are the heart of every battle, a fearless warrior forged in the fires of conflict. With unmatched skill in arms and armor, you lead the charge, protect your allies, and chase glory. Whether a noble knight or a rugged mercenary, your path is one of heroism, honor, and hard-won renown.",

    isMagic: Magic.false,
    skills: [],
    perks: [
      perks.AudiencesFavourite,
      perks.Gladiator,
      perks.BrawnsOverBrains,
      perks.FlyingWeapon,
      perks.KnowThyEnemy,
    ],

    colorScheme: "red",
  },
  {
    ...defaultBasicClass,
    name: "Hunter",
    desc: "You are a master of the wild, a tracker, hunter, and survivalist who thrives where others falter. You excel at finding prey, setting traps, taming beasts, and navigating untamed lands. Whether pursuing foes or feeding allies, your skills make you an invaluable guide and a deadly marksman.",

    isMagic: Magic.false,
    skills: [],
    perks: [],

    colorScheme: "green",
  },
  {
    ...defaultBasicClass,
    name: "Juggler",
    desc: "A cunning performer and quick-thinking rogue, the Juggler thrives on wit, agility, and charm. Master of sleight of hand, acrobatics, and clever disguises, they navigate danger with flair. Whether dazzling crowds or outsmarting enemies, every move is a blend of artistry and deception.",

    isMagic: Magic.false,
    skills: [],
    perks: [perks.StartingABand, perks.DonJuan, perks.HiddenPocket],

    colorScheme: "yellow",
  },
  {
    ...defaultBasicClass,
    name: "Medic",
    desc: "A healer and alchemist, the Medic mends wounds, cures ailments, and crafts potions. Skilled in poisons and remedies alike, they bring relief to allies and leverage their insight into human nature to negotiate in dire times. Whether in bustling cities or remote villages, their art saves lives and turns the tide of fate.",

    isMagic: Magic.false,
    skills: [],
    perks: [],

    colorScheme: "blue",
  },
  {
    ...defaultBasicClass,
    name: "Incantor",
    desc: "Master of the arcane and divine, the Incantor wields magic and rituals to shape the world. Skilled in ancient lore and sensing the supernatural, they communicate with spirits, cast blessings and curses, and harness relics of power. Whether scholar, mystic, or prophet, they channel forces beyond mortal understanding.",

    isMagic: Magic.true,
    skills: [],
    perks: [],

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
