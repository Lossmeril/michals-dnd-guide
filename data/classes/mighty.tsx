import { ClassRank, Magic, MightyClass } from "@/types/classes";
import { advancedClasses, advancedClassesEnum } from "./advanced";

const defaultMightyClass = { classRank: ClassRank.mighty };

export const mightyClasses: MightyClass[] = [
  {
    ...defaultMightyClass,
    name: "Warlord",
    desc: "You are a master of leadership, strategy, and persuasion. As a Warlord, you inspire allies, forge alliances, and outmaneuver foes with cunning and vision. Armies at your disposal and political power in hand, you are a force to be reckoned with, shaping the future of nations with your influence.",

    classes: [
      advancedClasses[advancedClassesEnum.warrior],
      advancedClasses[advancedClassesEnum.ranger],
      advancedClasses[advancedClassesEnum.rogue],
      advancedClasses[advancedClassesEnum.scout],
    ],
    isMagic: Magic.false,

    perks: [],
    skills: [],
  },
  {
    ...defaultMightyClass,
    name: "Ravager",
    desc: "You are destruction. Where warlords scheme and strategise, you use your raw martial prowess. Whether a savage brute cleaving through enemy hoards, fabled swordsman prodigy, dragon rider raining fire from above or legendary skinchanger fighting as a gryphon, every foe fears you.",

    classes: [
      advancedClasses[advancedClassesEnum.warrior],
      advancedClasses[advancedClassesEnum.ranger],
      advancedClasses[advancedClassesEnum.witcher],
      advancedClasses[advancedClassesEnum.shaman],
    ],
    isMagic: Magic.true,

    perks: [],
    skills: [],
  },

  {
    ...defaultMightyClass,
    name: "Shadow",
    desc: "You have surpassed the limits of the physical body, becoming a master of stealth and shadows. Blending unmatched skill with supernatural power, you vanish at will, bypass barriers, and strike with precision. Whether stealing royal treasures or eliminating unreachable targets, it would take armies to stop you.",

    classes: [
      advancedClasses[advancedClassesEnum.rogue],
      advancedClasses[advancedClassesEnum.ranger],
      advancedClasses[advancedClassesEnum.mage],
      advancedClasses[advancedClassesEnum.alchemist],
    ],
    isMagic: Magic.true,

    perks: [],
    skills: [],
  },

  {
    ...defaultMightyClass,
    name: "Inquisitor",
    desc: "In your pursuit of mastery over the magic, you have found something better: the truth. Guilty fear you and your blood magic through which you uncover hidden truths. Every fool that tries to strike you down with magic finds themselves face-to-face with their own spell due to your countering abilites.",

    classes: [
      advancedClasses[advancedClassesEnum.warrior],
      advancedClasses[advancedClassesEnum.warlock],
      advancedClasses[advancedClassesEnum.witcher],
      advancedClasses[advancedClassesEnum.mage],
    ],
    isMagic: Magic.true,

    perks: [],
    skills: [],
  },

  {
    ...defaultMightyClass,
    name: "Zhrets",
    desc: "You have become the nature itself. As a mighty pagan-priest you control entire regions, every plant, rock, animal and beast bound to your will. With your word lakes rise and flood villages, forests march, crushing armies with their roots and swarms of wild animals trample all that people called their own.",

    classes: [
      advancedClasses[advancedClassesEnum.ranger],
      advancedClasses[advancedClassesEnum.druid],
      advancedClasses[advancedClassesEnum.shaman],
    ],
    isMagic: Magic.true,

    perks: [],
    skills: [],
  },

  {
    ...defaultMightyClass,
    name: "Black Priest",
    desc: "",

    classes: [
      advancedClasses[advancedClassesEnum.warlock],
      advancedClasses[advancedClassesEnum.mage],
      advancedClasses[advancedClassesEnum.alchemist],
    ],
    isMagic: Magic.true,

    perks: [],
    skills: [],
  },
];
