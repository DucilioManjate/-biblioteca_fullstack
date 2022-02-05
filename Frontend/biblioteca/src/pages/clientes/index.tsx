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
import { useCallback, useState } from "react";
import { useEffect } from "react";
import { RiAddLine, RiDeleteBinLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import { api } from "../../services/api";

export default function ClienteList() {
  const [data, setData] = useState([]);
  const [clienteId, setClienteId] = useState();

  const deleteCliente =  useCallback(async (id) => {
    setClienteId(id)

    try {
      console.log(clienteId);
     await api.delete(`clientes/${clienteId}`);
      getItems();
    } catch (error) {
      console.log(error);
    }
  },[clienteId])
  async function getItems() {
    try {
      const response = await api.get("clientes");
      setData(response.data.content);
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
      
                <Th>Telefone</Th>
                <Th>Email</Th>
                <Th>Cpf</Th>
                <Th>Documento</Th>
                <Th>Nome Completo</Th>

                
               
                <Th width="8"></Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((cliente) => (
                <Tr key={cliente.id}>
                 
                 <Td>{cliente.id}</Td>
                  <Td>{cliente.telefone}</Td>
                  <Td>{cliente.email}</Td>
                  <Td>{cliente.cpf}</Td>
                  <Td>{cliente.documento}</Td>
                  <Td>{cliente.nomeCompleto}</Td>
                 

                 
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
                      onClick={() => deleteCliente(cliente.id)}
                      leftIcon={
                        <Icon
                          as={RiDeleteBinLine}
                          fontSize="16"
                          onClick={() => deleteCliente(cliente.id)}
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
