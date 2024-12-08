import { Race } from "@/types/races";
import { perks } from "../perks/perks";

export const playableRaces: Race[] = [
  {
    name: "Human",
    plural: "Humans",
    desc: "They come in all shapes and sizes. Diverse and courageous heroes, living life to the fullest.",
    perks: [perks.ForTheKing, perks.MaidenFair, perks.IKnowAGuy],
  },
  {
    name: "Elf",
    plural: "Elves",
    desc: "Secluded, mysterious and beautiful. Ancient people, filled with the wisdom of the ages and endowed with ageless beauty.",
  },
  {
    name: "Dwarf",
    plural: "Dwarves",
    desc: "Courageous and hearty. Steadfast and proud adventurers for whom honour and their word are everything.",
    perks: [perks.IronLiver],
  },
  {
    name: "Halfling",
    plural: "Halflings",
    desc: "Hospitable and jovial folk. Tiny people in who hold more courage than it seems at first glance.",
  },
  {
    name: "Kroll",
    plural: "Krolls",
    desc: "Slightly primitive, yet wildreness atunned. Strong and resilient heroes of brawny appearance with brave hearts.",
    perks: [perks.BisonSkin],
  },
];

export enum racesEnum {
  "human" = 0,
  "elf" = 1,
  "dwarf" = 2,
  "halfling" = 3,
  "kroll" = 4,
}
