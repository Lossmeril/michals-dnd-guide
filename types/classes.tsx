import { Perk } from "./perks";

export enum ClassRank {
  basic = "basic",
  advanced = "advanced",
  mighty = "mighty",
}

export enum Magic {
  true,
  false,
  semi,
}

export enum Ability {
  body = "Body",
  soul = "Soul",
  charisma = "Charisma",
}

export type Skill = {
  name: string;
  desc: string;
  unique: boolean;
  ability: Ability;
};

type Class = {
  name: string;
  desc: string;

  isMagic: Magic;
  skills: Skill[];
  perks?: Perk[];
};

export type BasicClass = Class & {
  classRank: ClassRank;

  colorScheme: string;
};

export type AdvancedClass = Class & {
  classRank: ClassRank;
  classes: BasicClass[];
  colorScheme?: string;
};

export type MightyClass = Class & {
  classRank: ClassRank;
  classes: AdvancedClass[];
};
