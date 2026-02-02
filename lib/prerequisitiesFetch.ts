import { DB_Class } from "@/types/class";
import { ClassPrerequisiteRow } from "@/types/classPrereq";

const fetchPrerequisities = ({
  classes,
  prerequisities,
  child_class_id,
}: {
  classes: DB_Class[];
  prerequisities: ClassPrerequisiteRow[];
  child_class_id: string;
}) => {
  const foundPrerequisities = Array<DB_Class>();

  prerequisities.map((prereq) => {
    if (prereq.child_class_id === child_class_id) {
      classes
        .filter((c) => c.id === prereq.parent_class_id)
        .map((c) => foundPrerequisities.push(c));
    }
  });

  return foundPrerequisities;
};

export default fetchPrerequisities;
