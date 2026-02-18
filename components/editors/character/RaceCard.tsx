import { ClickableCard } from "@/components/ui/card";
import { Race } from "@/types/races";

interface RaceCardProps {
  r: Race;
  onChangeClass: (raceId: string) => void;

  selected?: boolean;
}

const RaceCard: React.FC<RaceCardProps> = ({ r, onChangeClass, selected }) => {
  return (
    <ClickableCard
      title={r.name ?? "Unknown Race"}
      description={""}
      onClick={() => onChangeClass(r.id)}
      selected={selected}
      disabled={false}
    ></ClickableCard>
  );
};

export default RaceCard;
