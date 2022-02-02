import {
  Flex,
  Box,
  Heading,
  Link,
  Button,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  SimpleGrid,
  Select,
  Input,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState, useRef, useCallback } from "react";
import { RiAddLine, RiDeleteBinLine, RiPencilLine } from "react-icons/ri";
import { Header } from "components/Header";
import { SideBar } from "components/SideBar";
import { api } from "services/api";
import StatusExemplar from "components/StatusExemplar";

export default function Dashboard() {
  const router = useRouter();
  const { data_entrada, data_saida, status, cliente_id, exemplares_id } =
    router.query;
  const toast = useToast();
  const [clientes, setClientes] = useState([]);
  const [exemplares, setExemplares] = useState([]);
  const [data, setData] = useState([]);
  const [reservaId, setReservaId] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef();

  async function getItems() {
    try {
      let response;
      if (data_entrada || data_saida || status || cliente_id || exemplares_id) {
        response = await api.get(
          `/emprestimos?data_entrada=${data_entrada}&data_saida=${data_saida}&status=${status}&cliente_id=${cliente_id}&exemplares_id=${exemplares_id}`
        );
      } else {
        response = await api.get("emprestimos");
      }
      setData(response.data);
    } catch (error) {
      console.log(error);
      toast({
        title: "Problema ao carregar emprestimos.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }

  async function openDeleteReserva(exemplar) {
    setReservaId(exemplar.id);
    setIsOpen(true);
  }

  async function deleteReserva() {
    try {
      await api.delete(`emprestimos/${reservaId}`);
      setIsOpen(false);
      getItems();
      toast({
        title: "Reserva apagado.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Problema ao apagar exemplar.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }

  async function getClientes() {
    try {
      const response = await api.get("clientes");
      setClientes(response.data);
    } catch (error) {
      console.log(error);
      toast({
        title: "Problema ao carregar clientes.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }

  async function getExemplares() {
    try {
      const response = await api.get("exemplares");
      setExemplares(response.data);
    } catch (error) {
      console.log(error);
      toast({
        title: "Problema ao carregar exemplares.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }

  useEffect(() => {
    getItems();
    getExemplares();
    getClientes();
  }, []);
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" mx="auto" maxWidth={1550} px="6">
        <SideBar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay color="gray.900">
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Apagar emrprestímo
                </AlertDialogHeader>

                <AlertDialogBody>
                  Tem certeza? Esta ação, é irreversível.
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    Cancelar
                  </Button>
                  <Button colorScheme="red" onClick={deleteReserva} ml={3}>
                    Apagar
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
          <Flex mb="4" justify="space-between" align="center">
            <Heading fontSize="lg" fontWeight="normal">
              Emprestimos
            </Heading>
            <Link href="/emprestimos/create" passHref>
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
          <Box as="form">
            <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
              <Input
                bgColor="white"
                color="gray.900"
                name="data_emprestimo"
                label="Check-In"
                type="date"
              />
              <Input
                bgColor="white"
                color="gray.900"
                name="data_devoluicao"
                label="Check-out"
                type="date"
              />
              <Select
                bgColor="white"
                color="gray.900"
                name="status"
                placeholder="status"
              >
                <option value="DISPONIVEL">Disponivel</option>
                <option value="INDISPONIVEL">Indisponivel</option>
              </Select>

              <Input
                bgColor="white"
                color="gray.900"
                name="multa"
                label="Check-out"
                type="name"
                placeholder="multa"

              />

              <Input
                bgColor="white"
                color="gray.900"
                name="data_devoluicao"
                label="Check-out"
                type="name"
                placeholder="valo do emprestimo"
              />




              <Button type="submit" colorScheme="blue">
                Pesquisar
              </Button>
            </SimpleGrid>
          </Box>

          <Table mt="10" colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Data de emprestimo</Th>
                <Th>Data de devoluição</Th>
                <Th>Valor</Th>
                <Th>Status</Th>
                <Th width="6"></Th>
                <Th width="6"></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((exemplar) => (
                <Tr key={exemplar.id}>
                  <Td>{exemplar.id}</Td>
                  <Td>{exemplar.cliente.nome}</Td>
                  <Td>
                    <Text fontWeight="bold">{exemplar.exemplar.numero}</Text>
                    <Text fontSize="sm" color="gray.300">
                      {exemplar.exemplar.livro.nome}
                    </Text>
                  </Td>
                  <Td>
                    <Text>{exemplar.preco_total}</Text>
                  </Td>
                  <Td>
                    <Text>{exemplar.data_entrada}</Text>
                  </Td>
                  <Td>
                    <Text>{exemplar.data_saida}</Text>
                  </Td>
                  <Td>
                    <StatusExemplar value={exemplar.status} />
                  </Td>
                  <Td>
                    <Link href={`/emprestimos/${exemplar.id}/edit`}>
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
                      onClick={() => openDeleteReserva(exemplar)}
                      leftIcon={<Icon as={RiDeleteBinLine} fontSize="16" />}
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
