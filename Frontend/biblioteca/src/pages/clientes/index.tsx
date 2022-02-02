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
import { useState } from "react";
import { useEffect } from "react";
import { RiAddLine, RiDeleteBinLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import { api } from "../../services/api";

export default function HospedeList() {
  const [data, setData] = useState([]);
  const [hospedeId, setHospedeId] = useState(0);

  async function deleteHospede(cliente) {
    setHospedeId(cliente.id);
    console.log(hospedeId);
    try {
      await api.delete(`clientes/${hospedeId}`);
      getItems();
    } catch (error) {
      console.log(error);
    }
  }
  async function getItems() {
    try {
      const response = await api.get("clientes");
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
              Clientes
            </Heading>
            <Link href="/clientes/create" passHref>
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
                <Th>ID</Th>
                <Th>Hospede</Th>
                <Th>Telefone</Th>
                <Th>Nacionalidade</Th>
                <Th width="8"></Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((cliente) => (
                <Tr key={cliente.id}>
                  <Td>{cliente.id}</Td>
                  <Td>
                    <Text fontWeight="bold">{cliente.nome}</Text>
                    <Text fontSize="sm" color="gray.300">
                      {cliente.email}
                    </Text>
                  </Td>
                  <Td>
                    <Text>{cliente.telefone}</Text>
                  </Td>
                  <Td>
                    <Text>{cliente.nacionalidade}</Text>
                  </Td>
                  <Td>
                    <Link href={`/clientes/${cliente.id}/edit`}>
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
                      leftIcon={
                        <Icon
                          as={RiDeleteBinLine}
                          fontSize="16"
                          onClick={() => deleteHospede(cliente)}
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
