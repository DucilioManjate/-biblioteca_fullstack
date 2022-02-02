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
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { RiAddLine, RiDeleteBinLine, RiPencilLine } from "react-icons/ri";
import { Header } from "components/Header";
import { SideBar } from "components/SideBar";
import { api } from "services/api";

export default function QuartoList() {
  const toast = useToast();
  const [data, setData] = useState([]);
  const [quartoId, setQuartoId] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef();

  async function openDeleteQuarto(exemplar) {
    setQuartoId(exemplar.id);
    setIsOpen(true);
  }

  async function deleteQuarto() {
    try {
      await api.delete(`exemplares/${quartoId}`);
      setIsOpen(false);
      getItems();
      toast({
        title: "Quarto apagado.",
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
  async function getItems() {
    try {
      const response = await api.get("exemplares");
      setData(response.data);
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
  }, []);

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" mx="auto" maxWidth={1480} px="6">
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
                  Apagar Quarto
                </AlertDialogHeader>

                <AlertDialogBody>
                  Tem certeza? Esta ação, é irreversível.
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    Cancelar
                  </Button>
                  <Button colorScheme="red" onClick={deleteQuarto} ml={3}>
                    Apagar
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
          <Flex mb="8" justify="space-between" align="center">
            <Heading fontSize="lg" fontWeight="normal">
              Exemplares
            </Heading>
            <Link href="/exemplares/create" passHref>
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
                <Th>Número</Th>
                <Th>Preço</Th>
                <Th>Ocupação</Th>

                <Th width="8"></Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((exemplar) => (
                <Tr key={exemplar.id}>
                  <Td>{exemplar.id}</Td>
                  <Td>
                    <Text fontWeight="bold">{exemplar.numero}</Text>
                  </Td>
                  <Td>
                    <Text>{exemplar.valor}</Text>
                  </Td>
                  <Td>
                    <Text>{exemplar.quant_ocupacao}</Text>
                  </Td>

                  <Td>
                    <Link href={`/exemplares/${exemplar.id}/edit`}>
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
                      onClick={() => openDeleteQuarto(exemplar)}
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
