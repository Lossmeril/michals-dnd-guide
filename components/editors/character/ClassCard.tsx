import { Class } from "@/types/class";

interface ClassCardProps {
  c: Class;

  onChangeLevel: (classId: number, newLevel: string) => void;
  classLevels: Record<number, number>;
}

const ClassCard: React.FC<ClassCardProps> = ({
  c,

  onChangeLevel,
  classLevels,
}) => {
  const minLevel = 0;
  const maxLevel = 5;
  return (
    <div
      key={c.id}
      className="border border-dnd-ink/20 grid place-items-center rounded-lg p-3"
    >
      <div className="mb-2">{c.name}</div>

      <input
        type="number"
        min={minLevel}
        max={maxLevel}
        value={classLevels[c.id] ?? 0}
        onChange={(e) => onChangeLevel(c.id, e.target.value)}
        className="w-16 text-center"
        aria-label={`${c.name} level`}
      />
    </div>
  );
};

export default ClassCard;
