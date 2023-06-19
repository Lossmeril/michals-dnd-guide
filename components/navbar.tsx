import { Link, Box, Heading, Text, Divider } from "@chakra-ui/react";

const NavbarLink = ({ href, inactive, children }: any) => {
  return (
    <Link href={href} pointerEvents={inactive ? "none" : "unset"}>
      <Box
        pt={2}
        pb={1}
        px={5}
        color={inactive ? "gray.500" : "unset"}
        backgroundColor={inactive ? "gray.700" : "unset"}
        _hover={inactive ? {} : { backgroundColor: "blue.900" }}
        borderRadius="md"
      >
        <Text fontWeight="bold">{children}</Text>
      </Box>
    </Link>
  );
};

const Navbar = () => {
  return (
    <>
      <Heading
        as="p"
        size="sm"
        textTransform="uppercase"
        color={"blue.300"}
        mt={4}
        mb={2}
      >
        Characters
      </Heading>
      <NavbarLink href="races">Races</NavbarLink>
      <NavbarLink href="/classes/basic">Basic Classes</NavbarLink>
      <NavbarLink href="/classes/advanced">Advanced Classes</NavbarLink>
      <NavbarLink href="/classes/mighty">Mighty Classes</NavbarLink>
      <Divider my={2} />

      {/* 
      <Heading
        as="p"
        size="sm"
        textTransform="uppercase"
        color={"blue.300"}
        mt={4}
        mb={2}
      >
        Gameplay
      </Heading>
      <NavbarLink href="danger-level">Danger Level</NavbarLink>
      <NavbarLink href="dice">Dice Rolls</NavbarLink>
      <NavbarLink href="resources">Resources</NavbarLink>
      <NavbarLink href="exhaustion-scars">Exhaustion and Scars</NavbarLink>
      <NavbarLink href="combat" inactive>
        Combat
      </NavbarLink>
      <Divider my={2} />

      <Heading
        as="p"
        size="sm"
        textTransform="uppercase"
        color={"blue.300"}
        mt={4}
        mb={2}
      >
        World
      </Heading>
      <NavbarLink href="bestiary">Bestiary</NavbarLink> */}
    </>
  );
};

export default Navbar;
