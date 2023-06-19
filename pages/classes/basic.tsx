import ClassBox from "@/components/classes/classBox";
import { basicClasses } from "@/data/classes/basic";
import { Box } from "@chakra-ui/react";

const BasicClassesPage = () => {
  console.log(basicClasses);
  return (
    <Box>
      {basicClasses.map((basicClass) => (
        <ClassBox
          key={basicClass.name}
          type="basic"
          name={basicClass.name}
          desc={basicClass.desc}
          scheme={basicClass.colorScheme}
        />
      ))}
    </Box>
  );
};

export default BasicClassesPage;
