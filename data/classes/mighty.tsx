import { magic, mightyClass } from "@/types/classes";
import { advancedClasses, advancedClassesEnum } from "./advanced";

export const mightyClasses: mightyClass[] = [
  {
    name: "Black Priest",
    desc: "",

    classes: [
      advancedClasses[
        (advancedClassesEnum.shaman,
        advancedClassesEnum.alchemist,
        advancedClassesEnum.mage)
      ],
    ],
    isMagic: magic.true,

    perks: [],
  },
  {
    name: "Leader",
    desc: "",

    classes: [
      advancedClasses[
        (advancedClassesEnum.warrior,
        advancedClassesEnum.scout,
        advancedClassesEnum.rogue)
      ],
    ],
    isMagic: magic.true,

    perks: [],
  },

  {
    name: "Eliminator",
    desc: "",

    classes: [
      advancedClasses[
        (advancedClassesEnum.warrior,
        advancedClassesEnum.ranger,
        advancedClassesEnum.scout,
        advancedClassesEnum.rogue)
      ],
    ],
    isMagic: magic.true,

    perks: [],
  },

  {
    name: "Shadow",
    desc: "",

    classes: [
      advancedClasses[
        (advancedClassesEnum.rogue,
        advancedClassesEnum.alchemist,
        advancedClassesEnum.mage)
      ],
    ],
    isMagic: magic.true,

    perks: [],
  },
];
