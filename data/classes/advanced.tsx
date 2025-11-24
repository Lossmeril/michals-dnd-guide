import { Magic, AdvancedClass, ClassRank } from "@/types/classes";
import { basicClasses, basicClassesEnum } from "./basic";
import { perks } from "../perks/perks";

const defaultAdvancedClass = { classRank: ClassRank.advanced };

export const advancedClasses: AdvancedClass[] = [
  {
    ...defaultAdvancedClass,
    name: "Warrior",
    desc: "A battlefield veteran who has mastered the art of controlled violence. Warriors combine the discipline of a trained soldier with the agility and cunning of a duelist, allowing them to strike with overwhelming precision. Whether leading a cavalry charge, breaking enemy lines, or dueling in narrow corridors, Warriors excel at reading the flow of combat and turning every opening into a decisive advantage.",

    classes: [
      basicClasses[basicClassesEnum.fighter],
      basicClasses[basicClassesEnum.juggler],
    ],
    isMagic: Magic.false,
    skills: [],
    perks: [],
  },

  {
    ...defaultAdvancedClass,
    name: "Ranger",
    desc: "A lone sentinel of the borderlands, the Ranger blends martial training with unmatched wilderness skill. They can track foes across impossible terrain, navigate forests and mountains without leaving a trace, and deliver deadly ranged attacks with calm accuracy. Whether stalking monsters or scouting ahead of an army, Rangers excel where civilization ends and danger begins.",

    classes: [
      basicClasses[basicClassesEnum.fighter],
      basicClasses[basicClassesEnum.hunter],
    ],
    isMagic: Magic.false,
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
    isMagic: Magic.semi,
    skills: [],
    coreSpells: [perks.IsaSign],
    perks: [
      perks.WitcherSenses,
      perks.TiwazSign,
      perks.BerkanoSign,
      perks.RaidhoSign,
      perks.OthalaSign,
      perks.MutatedBody,
    ],
  },

  {
    ...defaultAdvancedClass,
    name: "Scout",
    desc: "Quick, observant, and impossible to corner, the Scout excels at infiltration, reconnaissance, and lightning-fast reactions. They move through forests, ruins, and battlefields with ease, slipping past guards and spotting threats long before others notice. In tense moments, Scouts rely on agility and cunning to act first—and ensure their allies have the upper hand before a fight even begins.",

    classes: [
      basicClasses[basicClassesEnum.hunter],
      basicClasses[basicClassesEnum.juggler],
    ],
    isMagic: Magic.false,
    skills: [],
    perks: [],
  },

  {
    ...defaultAdvancedClass,
    name: "Shaman",
    desc: "Treading the boundary between the physical and the spiritual, the Shaman communes with ancestral spirits and the essence of living creatures. They read omens in wind and flame, call upon totems for protection, and channel primal magic through trance and ritual. Whether guiding a tribe or wandering in search of visions, a Shaman is a bridge between the mortal world and the unseen.",

    classes: [
      basicClasses[basicClassesEnum.hunter],
      basicClasses[basicClassesEnum.medic],
    ],
    isMagic: Magic.semi,
    skills: [],
    perks: [perks.Skinchanger, perks.InvisibleRider, perks.AnimalControl],
  },

  {
    ...defaultAdvancedClass,
    name: "Druid",
    desc: "Guardians of ancient groves and forgotten paths, Druids channel the quiet but immense power of nature. Their magic shapes vines, storms, and stone; their knowledge of the natural world is unmatched. Whether healing allies, hindering foes with living roots, or invoking elemental fury, Druids stand as protectors of the cycle of life—patient, wise, and utterly relentless when the balance is threatened.",

    classes: [
      basicClasses[basicClassesEnum.hunter],
      basicClasses[basicClassesEnum.incantor],
    ],
    isMagic: Magic.true,
    skills: [],
    perks: [],
  },

  {
    ...defaultAdvancedClass,
    name: "Rogue",
    desc: "A master of urban shadows and subtle hands, the Rogue thrives in alleys, markets, and the underbelly of cities. They are experts in locks, traps, disguises, and misdirection, turning every obstacle into an opportunity. Whether infiltrating a manor, preparing deadly ambushes, or slipping unseen through crowds, a Rogue’s true weapon is their ability to stay one step ahead of everyone else.",

    classes: [
      basicClasses[basicClassesEnum.juggler],
      basicClasses[basicClassesEnum.medic],
    ],
    isMagic: Magic.false,
    skills: [],
    perks: [],
  },

  {
    ...defaultAdvancedClass,
    name: "Alchemist",
    desc: "A master of transformative science and volatile wonder. Alchemists craft potent elixirs, corrosive substances, enchanted oils, and complex mechanical traps. Their mixtures can mend flesh, melt steel, or reshape reality for a brief but critical moment. Whether brewing in a workshop or improvising explosive solutions on the battlefield, Alchemists solve problems through ingenuity—and very loud reactions.",

    classes: [
      basicClasses[basicClassesEnum.medic],
      basicClasses[basicClassesEnum.incantor],
    ],
    isMagic: Magic.true,
    skills: [],
    perks: [],
  },

  {
    ...defaultAdvancedClass,
    name: "Warlock",
    desc: "Bound to forbidden lore or eldritch forces, the Warlock channels power mortals were never meant to wield. Their magic is sharp, aggressive, and intoxicating—fueled by pacts, rituals, or the whispering of unseen patrons. Whether feared prophet or relentless destroyer, a Warlock walks a dangerous line between mastery and corruption.",

    classes: [
      basicClasses[basicClassesEnum.fighter],
      basicClasses[basicClassesEnum.incantor],
    ],
    isMagic: Magic.true,
    skills: [],
    perks: [],
  },

  {
    ...defaultAdvancedClass,
    name: "Mage",
    desc: "An academic of the arcane whose knowledge is as dangerous as their talent. Mages study illusions, enchantments, runes, and the subtle threads between worlds. Their magic is versatile, refined, and precise: conjuring protective wards, bending senses, rewriting emotions, or weaving complex rituals. Where Warlocks dominate, Mages manipulate—bending reality with careful, deliberate mastery.",

    classes: [
      basicClasses[basicClassesEnum.juggler],
      basicClasses[basicClassesEnum.incantor],
    ],
    isMagic: Magic.true,
    skills: [],
    perks: [perks.PiedPiper],
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
