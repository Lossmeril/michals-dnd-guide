import { ClassCard } from "@/components/card";
import { mightyClasses } from "@/data/classes/mighty";

const MightyClassesPage = () => {
  return (
    <div>
      <h2 className="font-bold text-3xl mb-5">Mighty Classes</h2>
      <div className="grid grid-cols-5 gap-5">
        {mightyClasses.map((mightyClass) => (
          <ClassCard key={mightyClass.name} dndClass={mightyClass} />
        ))}
      </div>
    </div>
  );
};

export default MightyClassesPage;
