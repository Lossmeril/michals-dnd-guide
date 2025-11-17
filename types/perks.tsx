import { Resource } from "./classes";

export type ActivationPrice = {
  cost: number;
  ability: Resource;
};

export type Perk = {
  name: string;
  desc: string;

  activationPrice?: ActivationPrice;
};
