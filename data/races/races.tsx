import { Race } from "@/types/races";
import { perks } from "../perks/perks";

export const playableRaces: Race[] = [
  {
    name: "Human",
    plural: "Humans",
    desc: "They come in all shapes and sizes. Diverse and courageous heroes, living life to the fullest.",
    perks: [
      perks.ForTheKing,
      perks.SticksAndStones,
      perks.MaidenFair,
      perks.IKnowAGuy,
    ],
  },
  {
    name: "Elf",
    plural: "Elves",
    desc: "Secluded, mysterious and beautiful. Ancient people, filled with the wisdom of the ages and endowed with ageless beauty.",
    perks: [perks.BehindBlueEyes, perks.EternalNobility, perks.VeilOfNight],
  },
  {
    name: "Dwarf",
    plural: "Dwarves",
    desc: "Courageous and hearty. Steadfast and proud adventurers for whom honour and their word are everything.",
    perks: [
      perks.NightEyes,
      perks.SkinMadeOfIronSteelInYourBones,
      perks.IronLiver,
      perks.BloodBond,
    ],
  },
  {
    name: "Halfling",
    plural: "Halflings",
    desc: "Hospitable and jovial folk. Tiny people in who hold more courage than it seems at first glance.",
    perks: [
      perks.SixthSense,
      perks.SilentFeet,
      perks.Connosieur,
      perks.Scrappy,
    ],
  },
  {
    name: "Kroll",
    plural: "Krolls",
    desc: "Slightly primitive, yet wildreness attuned. Strong and resilient heroes of brawny appearance with brave hearts.",
    perks: [perks.Echolocation, perks.Fury, perks.BisonSkin],
  },
];

export enum racesEnum {
  "human" = 0,
  "elf" = 1,
  "dwarf" = 2,
  "halfling" = 3,
  "kroll" = 4,
}
