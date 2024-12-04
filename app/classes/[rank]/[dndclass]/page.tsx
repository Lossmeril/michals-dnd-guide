import { PerkCard } from "@/components/card";
import Divider from "@/components/divider";
import { advancedClasses } from "@/data/classes/advanced";
import { basicClasses } from "@/data/classes/basic";
import { mightyClasses } from "@/data/classes/mighty";

import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ rank: string; dndclass: string }>;
}) {
  const rank = (await params).rank;
  const slugClass = (await params).dndclass;

  let classPool;

  switch (rank) {
    case "basic":
      classPool = basicClasses;
      break;
    case "advanced":
      classPool = advancedClasses;
      break;
    case "mighty":
      classPool = mightyClasses;
      break;
    default:
      classPool = basicClasses;
      break;
  }

  const displayClass = classPool.find(
    (x) => x.name.toLocaleLowerCase() === slugClass
  );

  return (
    <>
      <div className="flex flex-row flex-nowrap gap-10">
        <div className="w-3/4">
          <p>{displayClass?.classRank + " class"}</p>
          <h2 className="font-bold text-3xl mb-5">{displayClass?.name}</h2>
          <Divider />
          <p className="w-1/2 text-justify">{displayClass?.desc}</p>
        </div>
        <div className="w-1/4">
          <div className="relative w-full h-[60vh] ">
            <Image
              src={
                "/img/classes/" +
                displayClass?.classRank +
                "/" +
                displayClass?.name.toLocaleLowerCase() +
                ".jpg"
              }
              alt={displayClass?.name ? displayClass.name : ""}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <Divider />
      <h3 className="font-bold text-2xl mb-5">
        {displayClass?.name + "'s perks:"}
      </h3>
      <div className="grid grid-cols-4 gap-5">
        {displayClass?.perks?.map((perk) => (
          <PerkCard key={perk.name} perk={perk} />
        ))}
      </div>
    </>
  );
}
