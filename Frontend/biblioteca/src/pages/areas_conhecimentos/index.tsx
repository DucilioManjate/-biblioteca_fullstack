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
  const [areaConhecimentoId, setAreaConhecimentoId] = useState(0);


  const deleteAreaConhecimento=  useCallback(async (id) => {
    setAreaConhecimentoId(id)

    try {
      console.log(areaConhecimentoId);
     await api.delete(`area-conhecimentos/${areaConhecimentoId}`);
      getItems();
    } catch (error) {
      console.log(error);
    }
  },[areaConhecimentoId])


  async function getItems() {
    try {
      const response = await api.get("areas-conhecimento");
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
            Areas de conhecimentos
            </Heading>
            <Link href="/areas_conhecimentos/create" passHref>
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
                <Th>Areas de conhecimentos</Th>
                

                <Th width="8"></Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
            {data.map((areaConhecimento) => (
              <Tr key={areaConhecimento.id}>
                <Td>
                  <Text>{areaConhecimento.id}</Text>
                </Td>
                <Td>
                  <Text fontWeight="bold">{areaConhecimento.nome}</Text>
                </Td>
               
                <Td>
                  <Link href="/areas_conhecimentos/edit">
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
                    onClick={() => deleteAreaConhecimento(areaConhecimentoId)}
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
