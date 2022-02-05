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
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiAddLine, RiDeleteBinLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";


import { SideBar } from "../../components/SideBar";
import { api } from "../../services/api";

export default function LivroList() {
  const [data, setData] = useState([]);
  const [livroId, setLivrolId] = useState();

  async function deleteLivro(livro) {
    setLivrolId(livro.id);
    console.log(livroId);
    try {
      await api.delete(`livros/${livro.Id}`);
      getItems();
    } catch (error) {
      console.log(error);
    }
  }
  async function getItems() {
    try {
      const response = await api.get("livros");
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
              livros
            </Heading>
            <Link href="/livros/create" passHref>
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
                <Th>Edição</Th>
                <Th>Tutulo</Th>
                <Th>Ano</Th>
                <Th>resume</Th>
                <Th>Miniatura</Th>


                <Th width="8"></Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
            {data.map((livro) => (
              <Tr key={livro.id}>
                <Td>
                  <Text>{livro.id}</Text>
                </Td>
                <Td>
                  <Text fontWeight="bold">{livro.edicao}</Text>
                </Td>
                <Td>
                  <Text>{livro.titulo}</Text>
                </Td>
                <Td>
                  <Text>{livro.ano}</Text>
                </Td>
                <Td>
                  <Text>{livro.resume}</Text>
                </Td>
                <Td>
                  <ChakraLink href={livro.miniatura} target="blank">Click na frase</ChakraLink>
                </Td>

                <Td>
                  <Link href="/livros/edit">
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
                    onClick={() => deleteLivro(livro)}
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
