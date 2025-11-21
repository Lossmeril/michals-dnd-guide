export enum Resource {
  body = "Body",
  soul = "Soul",
  charisma = "Charisma",
  coin = "Coins",
  material = "Material",
}
export type ResourceType = {
  name: Resource;
  icon: JSX.Element;
  color: string;
};
