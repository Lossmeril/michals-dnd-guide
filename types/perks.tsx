import { Resource } from "./classes";

export type ActivationPrice = {
  cost: number | "Variable";
  ability: Resource;
  priceUnit?: string;
};

export type Perk = {
  name: string;
  desc: string;

  activationPrice?: ActivationPrice;

  components?: SpellComponent | string[];
  damage?: string;
  damageType?: DamageType;
  range?: string;
  areaOfEffect?: string;
  duration?: SpellDuration;
};

// -- SPELLS

export enum SpellComponent {
  verbal = "Verbal",
  somatic = "Somatic",
  material = "Material and/or Ritual",
}

export enum SpellDuration {
  instantaneous = "Happens instantly",
  concentration = "Until concentration is broken",
  combat = "Until the end of combat",
  short = "Until the next sunset or sunrise",
  long = "Until the next solstice or equinox",
  will = "Until dismissed by the caster or target",
}

export enum DamageType {
  fire = "Fire",
  ice = "Ice",
  lightning = "Lightning",
  poison = "Poison",
  psychic = "Psychic",
  necrotic = "Necrotic",
  radiant = "Radiant",
  force = "Force",
  thunder = "Thunder",
  acid = "Acid",
  piercing = "Piercing",
  slashing = "Slashing",
  bludgeoning = "Bludgeoning",
}

export enum MagicType {
  arcane = "Arcane",
  divine = "Divine",
  eldritch = "Eldritch",
}
