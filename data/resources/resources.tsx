import { ResourceType, Resource } from "@/types/resources";
import { GiBiceps, GiDramaMasks, GiSheikahEye } from "react-icons/gi";

const resources: ResourceType[] = [
  {
    name: Resource.body,
    icon: <GiBiceps />,
    color: "var(--body)",
  },
  {
    name: Resource.soul,
    icon: <GiSheikahEye />,
    color: "var(--soul)",
  },
  {
    name: Resource.charisma,
    icon: <GiDramaMasks />,
    color: "var(--charisma)",
  },
];

export default resources;
