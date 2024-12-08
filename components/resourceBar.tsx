import { Ability } from "@/types/classes";

interface ResourceBoxProps {
  resourceStatus: "clear" | "exhausted" | "scar";
  color?: string;
}

const ResourceBox: React.FC<ResourceBoxProps> = ({ resourceStatus, color }) => {
  return (
    <div
      className="w-10 aspect-[3/4] border-2 overflow-hidden relative"
      style={{
        opacity:
          resourceStatus === "clear"
            ? 1
            : resourceStatus === "exhausted"
            ? 0.75
            : 0.5,
        backgroundColor:
          resourceStatus === "clear"
            ? "transparent"
            : resourceStatus === "exhausted"
            ? "#ffffff20"
            : "#ffffff80",
        borderColor: color ? "var(--" + color + ")" : "white",
      }}
    >
      {resourceStatus !== "clear" ? (
        <div
          className="absolute w-[2px] h-full top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] bg-white rotate-[35deg]"
          style={{ borderColor: color ? "var(--" + color + ")" : "white" }}
        ></div>
      ) : (
        <></>
      )}

      {resourceStatus === "scar" ? (
        <div className="absolute w-[2px] h-full top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] bg-white -rotate-[35deg]"></div>
      ) : (
        <></>
      )}
    </div>
  );
};

interface ResourceBarProps {
  size: number;
  stat: Ability;
  exhaustions?: number;
  scars?: number;
}

const ResourceBar: React.FC<ResourceBarProps> = ({
  size,
  stat,
  exhaustions = 0,
  scars = 0,
}) => {
  const resources: ("clear" | "exhausted" | "scar")[] = [];

  for (let i = 0; i < size; i++) {
    if (i < size - (exhaustions + scars)) {
      resources[i] = "clear";
    } else if (i < size - scars) {
      resources[i] = "exhausted";
    } else {
      resources[i] = "scar";
    }
  }

  return (
    <div className="flex flex-row flex-nowrap gap-3">
      {resources.map((box, index) => (
        <ResourceBox
          key={index}
          resourceStatus={box}
          color={stat.toLowerCase()}
        />
      ))}
    </div>
  );
};

export default ResourceBar;
