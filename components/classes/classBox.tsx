import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";

const ClassBox = ({ type, name, desc, scheme }: any) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      colorScheme={scheme}
      my={6}
    >
      <Image
        objectFit="cover"
        w={{ base: "100%", sm: "200px" }}
        h={"300px"}
        src={"/img/classes/" + type + "/" + name.toLowerCase() + ".jpg"}
        alt={name}
      />

      <Stack>
        <CardBody>
          <Heading size="md">{name}</Heading>

          <Text py="2">{desc}</Text>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme={scheme}>
            More about {name}
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default ClassBox;
