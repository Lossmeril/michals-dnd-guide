import ClassBox from "@/components/classes/classBox";
import { mightyClasses } from "@/data/classes/mighty";
import { Box } from "@chakra-ui/react";

const MightyClassesPage = () => {
  return (
    <Box>
      {mightyClasses.map((mightyClass) => (
        <ClassBox
          key={mightyClass.name}
          type="mighty"
          name={mightyClass.name}
          desc={mightyClass.desc}
        />
      ))}
    </Box>
  );
};

export default MightyClassesPage;
