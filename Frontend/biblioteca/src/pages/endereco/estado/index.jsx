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
  
  

  
  export default function EstadoList() {
  
    
    
    return (
      <Box>
        <Header />
        <Flex w="100%" my="6" mx="auto"  px="6">
        
          <Box flex="1" borderRadius={8} bg="gray.800" p="8">
            <Flex mb="8" justify="space-between" align="center">
              <Heading colorScheme="teal" fontSize="lg" fontWeight="normal">
                Estados
              </Heading>
              <Link href="/estados/create" passHref>
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
                    <Text fontWeight="bold">Nome</Text>
                  </Td>
  
                  <Td>
                    <Link href="/estados/edit">
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
  
  