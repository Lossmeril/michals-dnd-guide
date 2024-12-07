import { Perk } from "./perks";

export type Race = {
  name: string;
  plural: string;
  desc: string;

  perks?: Perk[];
};
