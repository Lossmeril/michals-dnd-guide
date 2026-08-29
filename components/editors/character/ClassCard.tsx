import { IMAGE_PLACEHOLDER } from "@/lib/webGlobals";
import { Class } from "@/types/classes";

interface ClassCardProps {
  c: Class;
  onChangeLevel: (classId: string, newLevel: string) => void;
  classLevels: Record<string, number>;

  metReqs?: boolean;
  noMorePointsToSpend?: boolean;
}

const ClassCard: React.FC<ClassCardProps> = ({
  c,
  onChangeLevel,
  classLevels,
  metReqs = false,
  noMorePointsToSpend = false,
}) => {
  const minLevel = 0;
  const maxLevel = 5;

  return (
    <div
      className="relative flex flex-row items-center justify-start h-12 border-b border-dnd-ink/20 overflow-hidden transition-all"
      style={{
        opacity: metReqs ? (classLevels[c.id] !== 0 ? 1 : 0.65) : 0.2,
        filter: !metReqs ? "grayscale(100%)" : "none",
      }}
    >
      <input
        type="number"
        min={minLevel}
        max={
          noMorePointsToSpend
            ? Math.min(maxLevel, classLevels[c.id] ?? 0)
            : maxLevel
        }
        value={classLevels[c.id] ?? 0}
        onChange={(e) => onChangeLevel(c.id, e.target.value)}
        className="text-center p-0.5 rounded-none border-0 w-12 bg-dnd-bg h-12 serif"
        aria-label={`${c.name} level`}
        disabled={!metReqs}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={c.image ?? IMAGE_PLACEHOLDER}
        alt={`${c.name} image`}
        className="w-12 aspect-square object-cover object-top mr-4"
      />
      <p className="font-bold text-base ">{c.name}</p>
    </div>
  );
};

export default ClassCard;
