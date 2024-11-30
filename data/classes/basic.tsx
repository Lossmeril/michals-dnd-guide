import { magic, basicClass, classRank } from "@/types/classes";

const defaultBasicClass = { classRank: classRank.basic };

export const basicClasses: basicClass[] = [
  {
    ...defaultBasicClass,
    name: "Fighter",
    desc: "",

    isMagic: magic.false,
    skills: [],
    perks: [],

    colorScheme: "red",
  },
  {
    ...defaultBasicClass,
    name: "Hunter",
    desc: "",

    isMagic: magic.false,
    skills: [],
    perks: [],

    colorScheme: "green",
  },
  {
    ...defaultBasicClass,
    name: "Juggler",
    desc: "",

    isMagic: magic.false,
    skills: [],
    perks: [],

    colorScheme: "yellow",
  },
  {
    ...defaultBasicClass,
    name: "Medic",
    desc: "",

    isMagic: magic.false,
    skills: [],
    perks: [],

    colorScheme: "blue",
  },
  {
    ...defaultBasicClass,
    name: "Incantor",
    desc: "",

    isMagic: magic.true,
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
