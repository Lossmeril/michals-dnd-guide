import { ResourceType } from "@/types/resources";

interface ResourceBoxProps {
  resourceStatus: "clear" | "exhausted" | "scar";
  stat?: ResourceType;
}

const ResourceBox: React.FC<ResourceBoxProps> = ({ resourceStatus, stat }) => {
  return (
    <div
      className="w-10 aspect-[3/4] border rounded overflow-hidden relative"
      title={
        stat
          ? stat.name +
            " " +
            (resourceStatus !== "clear" ? resourceStatus : "resource")
          : (resourceStatus !== "clear"
              ? resourceStatus.charAt(0).toUpperCase() + resourceStatus.slice(1)
              : "Healthy") + " Resource"
      }
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
        borderColor: stat ? "var(--" + stat.name.toLowerCase() + ")" : "white",
      }}
    >
      {resourceStatus !== "clear" ? (
        <div
          className="absolute w-[2px] h-full top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] bg-white rotate-[35deg]"
          style={{
            borderColor: stat
              ? "var(--" + stat.name.toLowerCase() + ")"
              : "white",
          }}
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
  stat: ResourceType;
  exhaustions?: number;
  scars?: number;
  hideTitle?: boolean;
}

const ResourceBar: React.FC<ResourceBarProps> = ({
  size,
  stat,
  exhaustions = 0,
  scars = 0,
  hideTitle = false,
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
      {stat && !hideTitle && (
        <div className="flex flex-col items-center justify-center gap-1 mr-3 w-16">
          <p style={{ color: stat.color }} className="text-3xl">
            {stat.icon}
          </p>
          <p className="text-xs font-bold">{stat.name}</p>
        </div>
      )}
      {resources.map((box, index) => (
        <ResourceBox key={index} resourceStatus={box} stat={stat} />
      ))}
    </div>
  );
};

export default ResourceBar;
