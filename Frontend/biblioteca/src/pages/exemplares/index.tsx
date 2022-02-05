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
import { useState, useEffect, useRef, useCallback } from "react";
import { RiAddLine, RiDeleteBinLine, RiPencilLine } from "react-icons/ri";
import { Header } from "components/Header";
import { SideBar } from "components/SideBar";
import { api } from "services/api";

export default function ExemplarList() {
  const toast = useToast();
  const [data, setData] = useState([]);
  const [exemplarId, setExemplarId] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef();

  async function openExemplar(exemplar) {
    setExemplarId(exemplar.id);
    setIsOpen(true);
  }

  const deleteExemplar = useCallback(async (id) => {
    setExemplarId(id)

    try {
      console.log(exemplarId);
      await api.delete(`exemplares/${exemplarId}`);
      getItems();
    } catch (error) {
      console.log(error);
    }
  }, [exemplarId])
  async function getItems() {
    try {
      const response = await api.get("exemplares");
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
          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay color="gray.900">
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Apagar Exemplar
                </AlertDialogHeader>
                <AlertDialogBody>
                  Tem certeza? Esta ação, é irreversível.
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    Cancelar
                  </Button>
                  <Button colorScheme="red" onClick={deleteExemplar} ml={3}>
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
                <Th>Status</Th>
                <Th>Codigo do livro</Th>
                <Th width="8"></Th>
                <Th width="8"></Th>
                <Th width="8"></Th>
                <Th width="8"></Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((exemplar) => (
                <Tr key={exemplar.id}>
                  <Td>{exemplar.id}</Td>
                  <Td>
                    <Text fontWeight="bold">{exemplar.status}</Text>
                  </Td>
                  <Td>
                    <Text>{exemplar.codigo}</Text>
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
                      onClick={() => openExemplar(exemplar.id)}
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
