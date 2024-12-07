import { Ability } from "./classes";

export type ActivationPrice = {
  cost: number;
  ability: Ability;
};

export type Perk = {
  name: string;
  desc: string;

  activationPrice?: ActivationPrice;
};
