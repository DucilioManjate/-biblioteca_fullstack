import { Box, Stack} from "@chakra-ui/react";

import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SideBar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection>
          <NavLink href="/clientes">Clientes</NavLink>
          <NavLink href="/autores">Autores</NavLink>
          <NavLink href="/categorias">Categorias</NavLink>
          <NavLink href="/editoras">Editoras</NavLink>
          <NavLink href="/areas_conhecimentos">Aréas de conhecimentos</NavLink>
          <NavLink href="/exemplares">Exemplares</NavLink>
        <NavLink href="/livros">Livros</NavLink>
          <NavLink href="/emprestimos">Emprestimos</NavLink>
        </NavSection>
       
      </Stack>
    </Box>
  );
}
