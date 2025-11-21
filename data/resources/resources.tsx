import { ResourceType, Resource } from "@/types/resources";
import {
  GiBiceps,
  GiCoins,
  GiDramaMasks,
  GiHerbsBundle,
  GiSheikahEye,
} from "react-icons/gi";

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
  { name: Resource.coin, icon: <GiCoins />, color: "var(--coin)" },
  {
    name: Resource.material,
    icon: <GiHerbsBundle />,
    color: "var(--material)",
  },
];

export default resources;
