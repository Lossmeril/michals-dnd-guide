import { ClickableCard } from "@/components/ui/card";
import { IMAGE_PLACEHOLDER } from "@/lib/webGlobals";
import { Class } from "@/types/class";

interface ClassPrerequisiteCardProps {
  c: Class;
  onChangeClass: (classId: string) => void;

  selected?: boolean;
}

const ClassPrerequisiteCard: React.FC<ClassPrerequisiteCardProps> = ({
  c,
  onChangeClass,
  selected,
}) => {
  return (
    <ClickableCard
      title={c.name ?? "Unknown Class"}
      description={""}
      onClick={() => onChangeClass(c.id)}
      selected={selected}
      disabled={false}
      imageSrc={c.image ?? IMAGE_PLACEHOLDER}
      imageAlt={`${c.name} image`}
    ></ClickableCard>
  );
};

export default ClassPrerequisiteCard;
