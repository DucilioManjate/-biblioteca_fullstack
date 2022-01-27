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

  import { RiAddLine, RiDeleteBinLine, RiPencilLine } from "react-icons/ri";
  import { Header } from "../../components/header";
  
  

  
  export default function EmprestimoList() {
  
    
    
    return (
      <Box>
        <Header />
        <Flex w="100%" my="6" mx="auto"  px="6">
        
          <Box flex="1" borderRadius={8} bg="gray.800" p="8">
            <Flex mb="8" justify="space-between" align="center">
              <Heading colorScheme="teal" fontSize="lg" fontWeight="normal">
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
  
            <Table colorScheme="whiteAlpha">
              <Thead>
                <Tr>
                  <Th>Id</Th>
                  <Th>Status</Th>
                  <Th>Data de devoluição</Th>
                  <Th>Data do emprestimo</Th>
                  <Th>Valor</Th>
                  <Th>Multa</Th>
  
                  <Th width="8"></Th>
                  <Th width="8"></Th>
                </Tr>
              </Thead>
              <Tbody>
             
                <Tr>
                  <Td>
                    <Text>1</Text>
                  </Td>
                  <Td>
                    <Text fontWeight="bold"> dataE</Text>
                  </Td>
                  <Td>
                    <Text>DataD</Text>
                  </Td>
                  <Td>
                    <Text>Valor</Text>
                  </Td>
                  <Td>
                    <Text>Multa</Text>
                  </Td>
              
  
                  <Td>
                    <Link href="/emprestimos/edit">
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
                      
                      />
                    }
                    >
                      Excluir
                    </Button>
                  </Td>
                </Tr>
              ))
              </Tbody>
            </Table>
          </Box>
        </Flex>
      </Box>
    );
}
  
  