import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import {
  RiCalendarCheckLine,
  RiContactsLine,
  RiHotelBedLine,
  RiHotelLine,
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SideBar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NavLink href="/emprestimos" icon={RiCalendarCheckLine}>emprestimos</NavLink>
          <NavLink href="/clientes" icon={RiContactsLine}>Clientes</NavLink>
          <NavLink href="/Livros" icon={RiHotelLine}>Livros</NavLink>
          <NavLink href="/exemplares" icon={RiHotelBedLine}>Exemplares</NavLink>
        </NavSection>
       
      </Stack>
    </Box>
  );
}
