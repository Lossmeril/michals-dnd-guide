import { perk } from "./perks";

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

export type basicClass = {
  name: string;
  desc: string;

  isMagic: magic;
  skills: skill[];
  perks?: perk[];

  colorScheme: string;
};

export type advancedClass = {
  name: string;
  desc: string;

  classes: basicClass[];
  isMagic: magic;
  skills: skill[];
  perks?: perk[];

  colorScheme?: string;
};

export type mightyClass = {
  name: string;
  desc: string;

  classes: advancedClass[];
  isMagic: magic;
  perks?: perk[];
};
