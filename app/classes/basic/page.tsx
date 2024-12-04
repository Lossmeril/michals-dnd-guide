import { ClassCard } from "@/components/card";
import { basicClasses } from "@/data/classes/basic";

const BasicClassesPage = () => {
  return (
    <div>
      <h2 className="font-bold text-3xl mb-5">Basic Classes</h2>
      <div className="grid grid-cols-5 gap-5">
        {basicClasses.map((basicClass) => (
          <ClassCard key={basicClass.name} dndClass={basicClass} />
        ))}
      </div>
    </div>
  );
};

export default BasicClassesPage;
