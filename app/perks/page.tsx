import { PerkCard } from "@/components/card";
import { perksArray } from "@/data/perks/perks";

const PerksPage = () => {
  return (
    <div>
      <h2 className="font-bold text-3xl mb-5">Perks (debug page)</h2>
      <div className="grid grid-cols-4 gap-5">
        {perksArray.map((perk) => (
          <PerkCard key={perk.perkValues.name} perk={perk.perkValues} />
        ))}
      </div>
    </div>
  );
};

export default PerksPage;
