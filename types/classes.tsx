import { perk } from "./perks";

export enum classRank {
  basic = "basic",
  advanced = "advanced",
  mighty = "mighty",
}

export enum magic {
  true,
  false,
  semi,
}

export enum ability {
  body,
  soul,
  charisma,
}

export type skill = {
  name: string;
  desc: string;
  unique: boolean;
  ability: ability;
};

type Class = {
  name: string;
  desc: string;

  isMagic: magic;
  skills: skill[];
  perks?: perk[];
};

export type basicClass = Class & {
  classRank: classRank;

  colorScheme: string;
};

export type advancedClass = Class & {
  classRank: classRank;
  classes: basicClass[];
  colorScheme?: string;
};

export type mightyClass = Class & {
  classRank: classRank;
  classes: advancedClass[];
};
