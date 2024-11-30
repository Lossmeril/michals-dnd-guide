import { ClassCard } from "@/components/card";
import { advancedClasses } from "@/data/classes/advanced";
import { basicClasses } from "@/data/classes/basic";
import { mightyClasses } from "@/data/classes/mighty";

export default function Home() {
  return (
    <div>
      <h2 className="font-bold text-3xl mb-5">Basic Classes</h2>
      <div className="grid grid-cols-5 gap-5">
        {basicClasses.map((basicClass) => (
          <ClassCard key={basicClass.name} dndClass={basicClass} />
        ))}
      </div>
      <h2 className="font-bold text-3xl mt-10 mb-5">Advanced Classes</h2>
      <div className="grid grid-cols-5 gap-5">
        {advancedClasses.map((advancedClass) => (
          <ClassCard key={advancedClass.name} dndClass={advancedClass} />
        ))}
      </div>

      <h2 className="font-bold text-3xl mt-10 mb-5">Mighty Classes</h2>
      <div className="grid grid-cols-5 gap-5">
        {mightyClasses.map((mightyClass) => (
          <ClassCard key={mightyClass.name} dndClass={mightyClass} />
        ))}
      </div>
    </div>
  );
}
