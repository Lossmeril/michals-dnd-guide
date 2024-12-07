import { RaceCard } from "@/components/card";
import { playableRaces } from "@/data/races/races";

const RacesPage = () => {
  return (
    <div>
      <h2 className="font-bold text-3xl mb-5">Playable Races</h2>
      <div className="grid grid-cols-5 gap-5">
        {playableRaces.map((race) => (
          <RaceCard key={race.name} race={race} />
        ))}
      </div>
    </div>
  );
};

export default RacesPage;
