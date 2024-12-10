import { ClassCard } from "@/components/card";
import { advancedClasses } from "@/data/classes/advanced";

const AdvancedClassesPage = () => {
  return (
    <div>
      <h2 className="font-bold text-3xl mb-5">Advanced Classes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
        {advancedClasses.map((advancedClass) => (
          <ClassCard key={advancedClass.name} dndClass={advancedClass} />
        ))}
      </div>
    </div>
  );
};

export default AdvancedClassesPage;
