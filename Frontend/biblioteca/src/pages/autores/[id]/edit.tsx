import { useRouter } from "next/router";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { Input } from "components/Form/Input";
import { Header } from "components/Header";
import { SideBar } from "components/SideBar";
import { useEffect, useState } from "react";
import { useCallback } from "react";
import { api } from "services/api";
import { useToast } from "@chakra-ui/react";

const EditClienteFormSchema = yup.object().shape({
  nome: yup.string().required("obrigatório"),
  
});

export default function EditHospede() {
  const toast = useToast();
  const router = useRouter();
  const { id } = router.query;
  const [nome, setNome] = useState("");


  const { register, formState, handleSubmit } = useForm({
    resolver: yupResolver(EditClienteFormSchema),
  });
  async function getItem() {
    try {
      const response = await api.get(`autores/?${id}`);
      
      setNome(response.data.nome);

    } catch (error) {
      console.log(error);
      toast({
        title: "Problema ao carregar cliente.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }

  useEffect(() => {
    if(id)getItem();
  }, [id]);

  const { errors } = formState;
  const editHospede = useCallback(async (data) => {
    try {
      await api.put(`autores${id}`, data);
      toast({
        title: "Cliente editado.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Problema ao editar cliente.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }, []);

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" mx="auto" maxWidth={1480} px="6">
        <SideBar />
        <Box as="form" flex="1" borderRadius={8} bg="gray.800" p="8" onSubmit={handleSubmit(editHospede)}>
          <Heading fontSize="lg" fontWeight="normal">
            Editar cliente
          </Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
             
            <Input
                  name="nome"
                  label="Nome"
                  error={errors.nome}
                  {...register("nome")}
                  value={nome}
                  onChange={(event) => setNome(event.target.value)}
                />
              
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/clientes">
                <Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button
                type="submit"
                colorScheme="blue"
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
