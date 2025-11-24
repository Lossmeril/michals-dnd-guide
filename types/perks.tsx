import { Resource } from "./classes";

export type ActivationPrice = {
  cost: number;
  ability: Resource;
  priceUnit?: string;
};

export type Perk = {
  name: string;
  desc: string;

  activationPrice?: ActivationPrice;
};

// -- SPELLS

export enum SpellComponent {
  verbal = "Verbal",
  somatic = "Somatic",
  material = "Material and/or Ritual",
}

export enum SpellDuration {
  instant = "Happens instantly",
  short = "Until the next sunset or sunrise",
  long = "Until the next solstice or equinox",
}

export type Spell = {
  name: string;
  desc: string;
  components: SpellComponent[];

  damage?: string;
  range?: string;
  areaOfEffect?: string;

  duration: SpellDuration;
};
