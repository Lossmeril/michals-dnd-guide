import { magic, advancedClass, classRank } from "@/types/classes";
import { basicClasses, basicClassesEnum } from "./basic";

const defaultAdvancedClass = { classRank: classRank.advanced };

export const advancedClasses: advancedClass[] = [
  {
    ...defaultAdvancedClass,
    name: "Warrior",
    desc: "",

    classes: [
      basicClasses[basicClassesEnum.fighter],
      basicClasses[basicClassesEnum.juggler],
    ],
    isMagic: magic.false,
    skills: [],
    perks: [],
  },

  {
    ...defaultAdvancedClass,
    classRank: classRank.advanced,
    name: "Ranger",
    desc: "",

    classes: [
      basicClasses[basicClassesEnum.fighter],
      basicClasses[basicClassesEnum.hunter],
    ],
    isMagic: magic.false,
    skills: [],
    perks: [],
  },

  {
    ...defaultAdvancedClass,
    name: "Witcher",
    desc: "In order to hunt monsters, you have to become one. Witchers are supernatural warriors designed to track down and kill creatures not from this world. In their fight, they rely on a twisted version of their own magic - signs, through which they can cause burning pain to every ghost, demon or vampire.",

    classes: [
      basicClasses[basicClassesEnum.fighter],
      basicClasses[basicClassesEnum.medic],
    ],
    isMagic: magic.semi,
    skills: [],
    perks: [],
  },

  {
    ...defaultAdvancedClass,
    name: "Scout",
    desc: "",

    classes: [
      basicClasses[basicClassesEnum.hunter],
      basicClasses[basicClassesEnum.juggler],
    ],
    isMagic: magic.false,
    skills: [],
    perks: [],
  },

  {
    ...defaultAdvancedClass,
    name: "Shaman",
    desc: "",

    classes: [
      basicClasses[basicClassesEnum.hunter],
      basicClasses[basicClassesEnum.medic],
    ],
    isMagic: magic.semi,
    skills: [],
    perks: [],
  },

  {
    ...defaultAdvancedClass,
    name: "Druid",
    desc: "",

    classes: [
      basicClasses[basicClassesEnum.hunter],
      basicClasses[basicClassesEnum.incantor],
    ],
    isMagic: magic.true,
    skills: [],
    perks: [],
  },

  {
    ...defaultAdvancedClass,
    name: "Rogue",
    desc: "",

    classes: [
      basicClasses[basicClassesEnum.juggler],
      basicClasses[basicClassesEnum.medic],
    ],
    isMagic: magic.false,
    skills: [],
    perks: [],
  },

  {
    ...defaultAdvancedClass,
    name: "Alchemist",
    desc: "",

    classes: [
      basicClasses[basicClassesEnum.medic],
      basicClasses[basicClassesEnum.incantor],
    ],
    isMagic: magic.true,
    skills: [],
    perks: [],
  },

  {
    ...defaultAdvancedClass,
    name: "Warlock",
    desc: "",

    classes: [
      basicClasses[basicClassesEnum.fighter],
      basicClasses[basicClassesEnum.incantor],
    ],
    isMagic: magic.true,
    skills: [],
    perks: [],
  },

  {
    ...defaultAdvancedClass,
    name: "Mage",
    desc: "",

    classes: [
      basicClasses[basicClassesEnum.juggler],
      basicClasses[basicClassesEnum.incantor],
    ],
    isMagic: magic.true,
    skills: [],
    perks: [],
  },
];

export enum advancedClassesEnum {
  "warrior" = 0,
  "ranger" = 1,
  "witcher" = 2,
  "scout" = 3,
  "shaman" = 4,
  "druid" = 5,
  "rogue" = 6,
  "alchemist" = 7,
  "warlock" = 8,
  "mage" = 9,
}
