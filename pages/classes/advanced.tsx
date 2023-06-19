import ClassBox from "@/components/classes/classBox";
import { advancedClasses } from "@/data/classes/advanced";
import { Box } from "@chakra-ui/react";

const AdvancedClassesPage = () => {
  return (
    <Box>
      {advancedClasses.map((advancedClass) => (
        <ClassBox
          key={advancedClass.name}
          type="advanced"
          name={advancedClass.name}
          desc={advancedClass.desc}
        />
      ))}
    </Box>
  );
};

export default AdvancedClassesPage;
