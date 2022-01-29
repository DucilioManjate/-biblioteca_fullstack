import { Flex } from "@chakra-ui/react";

import { NavBar } from "components/drawer";



export function Header() {
  return (
    <Flex
      
      as="header"
      w="100%"
     // maxWidth={1480}
      h="20"
      //mx="auto"
      //mt="4"
      p="6"
      align="center"
      bgColor="white"
    >
      <NavBar />

    
    </Flex>
  );
}