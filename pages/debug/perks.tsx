import { perks } from "@/data/perks/perks";
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Wrap,
  Image,
  Flex,
  Text,
} from "@chakra-ui/react";

const PerksDebugPage = () => {
  return (
    <Wrap spacing={6} mt={3}>
      {perks.map((perk) => (
        <Card w="23%" key={perk.name} textAlign="center">
          <CardHeader>
            <Flex alignItems="center">
              <Image
                objectFit="contain"
                w={"75px"}
                h={"75px"}
                src={"/img/perks/" + perk.name.toLowerCase() + ".webp"}
                alt={perk.name}
              />
              <Heading size="md" ml={6}>
                {perk.name}
              </Heading>
            </Flex>
          </CardHeader>
          <CardBody>
            <Text>{perk.desc}</Text>
          </CardBody>
        </Card>
      ))}
    </Wrap>
  );
};

export default PerksDebugPage;
