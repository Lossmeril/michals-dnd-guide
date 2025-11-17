export enum Resource {
  body = "Body",
  soul = "Soul",
  charisma = "Charisma",
}
export type ResourceType = {
  name: Resource;
  icon: JSX.Element;
  color: string;
};
