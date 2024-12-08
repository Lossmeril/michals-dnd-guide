import { PerkCard } from "@/components/card";
import Divider from "@/components/divider";
import { playableRaces } from "@/data/races/races";

import Image from "next/image";

export default async function RaceDetailPage({
  params,
}: {
  params: Promise<{ race: string }>;
}) {
  const race = (await params).race;

  const displayRace = playableRaces.find(
    (x) => x.name.toLocaleLowerCase() === race
  );

  return (
    <>
      <div className="flex flex-row flex-nowrap gap-10">
        <div className="w-3/4">
          <p>Playable race</p>
          <h2 className="font-bold text-3xl mb-5">{displayRace?.plural}</h2>
          <Divider />
          <p className="w-1/2 text-justify">{displayRace?.desc}</p>
        </div>
        <div className="w-1/4">
          <div className="relative w-full h-[60vh] overflow-hidden rounded-lg border border-slate-600">
            <Image
              src={
                "/img/races/" + displayRace?.name.toLocaleLowerCase() + ".jpg"
              }
              alt={displayRace?.name ? displayRace.name : ""}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <Divider />
      <h3 className="font-bold text-2xl ">
        {displayRace?.plural + "' racial perks:"}
      </h3>
      <p className="mb-5">
        Each character can only have one racial perk, so choose your wisely.
      </p>
      <div className="grid grid-cols-4 gap-5">
        {displayRace?.perks?.map((perk) => (
          <PerkCard key={perk.name} perk={perk} />
        ))}
      </div>
    </>
  );
}
