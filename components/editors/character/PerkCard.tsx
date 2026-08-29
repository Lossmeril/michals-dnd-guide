import { PerkWithDetails } from "@/types/perks";

interface PerkCardProps {
  perk: PerkWithDetails;
}

const PerkCard: React.FC<PerkCardProps> = ({ perk }) => {
  return (
    <div
      key={perk.id}
      className="border border-dnd-ink/30 p-4 rounded-lg relative h-full shadow-sm bg-dnd-bg"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={
          perk.icon?.trim() ? perk.icon?.trim() : "/img/icon_placeholder.webp"
        }
        alt={perk.name}
        className="w-42 aspect-square mb-2"
      />
      <h2 className="font-semibold text-dnd-red-dark serif">{perk.name}</h2>
      <p className="text-xs text-dnd-red-dark/50 serif mb-1">
        {perk.perk_type?.replace("_", " ").toUpperCase() ?? "Unknown type"}
      </p>
      <p className={`text-xs font-semibold mb-2 text-dnd-ink/60`}>
        {perk.cost_resource && perk.cost_amount ? (
          <span
            className={
              perk.cost_resource === "body"
                ? "text-body"
                : perk.cost_resource === "soul"
                  ? "text-soul"
                  : perk.cost_resource === "charisma"
                    ? "text-charisma"
                    : "text-dnd-ink/60"
            }
          >
            {`Activation cost: ${perk.cost_amount} ${perk.cost_resource} ${perk.cost_unit ?? ""}`}
          </span>
        ) : (
          "Passive skill"
        )}
      </p>
      {perk.blurb?.trim() && (
        <p className="serif text-[8pt] font-bold mb-2 leading-tight text-dnd-ink">
          {perk.blurb?.trim() ?? "No blurb available"}
        </p>
      )}
      <p className="text-[8pt] text-dnd-ink leading-tight">
        {perk.description}
      </p>

      {perk.perk_type === "spell" && (
        <p className="text-[8pt] text-dnd-ink/80 mt-2 italic">
          Spell details to be added in the future...
        </p>
      )}
    </div>
  );
};

export default PerkCard;
