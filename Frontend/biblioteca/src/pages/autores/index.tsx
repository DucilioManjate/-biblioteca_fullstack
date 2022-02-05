import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { RiAddLine, RiDeleteBinLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";

import { SideBar } from "../../components/SideBar";
import { api } from "../../services/api";

export default function AutorList() {
  const [data, setData] = useState([]);
  const [autorId, setAutorId ] = useState();

  const deleteAutor =  useCallback(async (id) => {
    setAutorId(id)

    try {
      console.log(autorId);
     await api.delete(`autores/${autorId}`);
      getItems();
    } catch (error) {
      console.log(error);
    }
  },[autorId])

  async function getItems() {
    try {
      const response = await api.get("autores");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getItems();
  }, []);
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" mx="auto" maxWidth={1480} px="6">
        <SideBar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading fontSize="lg" fontWeight="normal">
              autores
            </Heading>
            <Link href="/autores/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="cyan"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Nome</Th>
             

                <Th width="8"></Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
            {data.map((autor) => (
              <Tr key={autor.id}>
               
                <Td>
                  <Text fontWeight="bold">{autor.nome}</Text>
                </Td>
             

                <Td>
                  <Link href="/autores/id/edit">
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="yellow"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    >
                      Editar
                    </Button>
                  </Link>
                </Td>

                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="red"
                    onClick={() => deleteAutor(autor.id)}
                    leftIcon={<Icon as={RiDeleteBinLine} 
                    fontSize="16"
                   
                    />
                  }
                  >
                    Excluir
                  </Button>
                </Td>
              </Tr>
            ))}
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  );
}
