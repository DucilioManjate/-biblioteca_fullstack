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

export default function EditoraList() {
  const [data, setData] = useState([]);
  const [editoraId, setEditoraId] = useState();

  const deleteEditora = useCallback(async (id) => {
    setEditoraId(id)

    try {
      console.log(editoraId);
      await api.delete(`editoras/${editoraId}`);
      getItems();
    } catch (error) {
      console.log(error);
    }
  }, [editoraId])
  async function getItems() {
    try {
      const response = await api.get("editoras");
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
              editoras
            </Heading>
            <Link href="/editoras/create" passHref>
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
                <Th width="2"></Th>
                <Th width="2"></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((editora) => (
                <Tr key={editora.id}>

                  <Td>
                    <Text fontWeight="bold">{editora.id}</Text>
                  </Td>


                  <Td>
                    <Text fontWeight="bold">{editora.nome}</Text>
                  </Td>


                  <Td>
                    <Link href="/autores/edit">
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
                      leftIcon={<Icon as={RiDeleteBinLine}
                        fontSize="16"
                        onClick={() => deleteEditora(editora.id)}
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
