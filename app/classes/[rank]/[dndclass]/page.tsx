import { PerkCard } from "@/components/card";
import Divider from "@/components/divider";
import { advancedClasses } from "@/data/classes/advanced";
import { basicClasses } from "@/data/classes/basic";
import { mightyClasses } from "@/data/classes/mighty";

import Image from "next/image";
import Link from "next/link";

export default async function ClassDetailPage({
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
      <div className="flex flex-col-reverse lg:flex-row flex-nowrap gap-10">
        <div className="w-full md:w-1/2 lg:w-3/4">
          <Link href={"/classes/" + displayClass?.classRank}>
            <p className="hidden lg:block mb-5 text-blue-300">
              &laquo; Go back
            </p>
          </Link>
          <p className="capitalize">{displayClass?.classRank + " class"}</p>
          <h2 className="font-bold text-3xl mb-5">{displayClass?.name}</h2>
          <Divider />
          <p className="">{displayClass?.desc}</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <Link href={"/classes/" + displayClass?.classRank}>
            <p className="block lg:hidden mb-5 text-blue-300">
              &laquo; Go back
            </p>
          </Link>
          <div className="relative w-full h-[60vh] overflow-hidden rounded-lg border border-slate-600">
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
      <h3 className="font-bold text-2xl">{displayClass?.name + "'s perks:"}</h3>
      <p className="mb-2">
        Character can have a number of class perks corresponding to the level of
        said class.
      </p>
      <p className="mb-5 text-xs">
        An exception is a character that hit the maximum level 5, but still
        decided to spend their level-up to get another class perk.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {displayClass?.perks?.map((perk) => (
          <PerkCard key={perk.name} perk={perk} />
        ))}
      </div>
    </>
  );
}
