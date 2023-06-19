import { magic, advancedClass } from "@/types/classes";
import { basicClasses, basicClassesEnum } from "./basic";

export const advancedClasses: advancedClass[] = [
  {
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
];
