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

export default function AreaConhecimentoList() {
  const [data, setData] = useState([]);
  const [categoriaId, setCategoriaId ] = useState();

  
  const deleteCategoria =  useCallback(async (id) => {
    setCategoriaId(id)

    try {
      console.log(categoriaId);
     await api.delete(`categorias/${categoriaId}`);
      getItems();
    } catch (error) {
      console.log(error);
    }
  },[categoriaId])
  async function getItems() {
    try {
      const response = await api.get("categorias");
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
              categorias
            </Heading>
            <Link href="/categorias/create" passHref>
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
                <Th>nome</Th>
                <Th>Periodo</Th>

                <Th width="8"></Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
            {data.map((categoria) => (
              <Tr key={categoria.id}>
                <Td>
                  <Text>{categoria.id}</Text>
                </Td>
                <Td>
                  <Text fontWeight="bold">{categoria.nome}</Text>
                </Td>
                <Td>
                  <Text>{categoria.periodo}</Text>
                </Td>

                <Td>
                  <Link href="/categorias/edit">
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
                    onClick={() => 
                      deleteCategoria(categoria.id)}

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
