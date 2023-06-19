import { magic, basicClass } from "@/types/classes";

export const basicClasses: basicClass[] = [
  {
    name: "Fighter",
    desc: "",

    isMagic: magic.false,
    skills: [],
    perks: [],

    colorScheme: "red",
  },
  {
    name: "Hunter",
    desc: "",

    isMagic: magic.false,
    skills: [],
    perks: [],

    colorScheme: "green",
  },
  {
    name: "Juggler",
    desc: "",

    isMagic: magic.false,
    skills: [],
    perks: [],

    colorScheme: "yellow",
  },
  {
    name: "Medic",
    desc: "",

    isMagic: magic.false,
    skills: [],
    perks: [],

    colorScheme: "blue",
  },
  {
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
