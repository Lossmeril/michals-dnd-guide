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
      className="border border-dnd-ink/20 grid place-items-center rounded-lg p-3"
      style={{ opacity: metReqs ? 1 : 0.2 }}
    >
      <div className="mb-2">{c.name}</div>

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
        className="w-16 text-center"
        aria-label={`${c.name} level`}
        disabled={!metReqs}
      />
    </div>
  );
};

export default ClassCard;
