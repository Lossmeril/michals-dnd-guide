import { ability } from "./classes";

export type activationPrice = {
  cost: number;
  ability: ability;
};

export type perk = {
  name: string;
  desc: string;

  activationPrice?: activationPrice;
};
