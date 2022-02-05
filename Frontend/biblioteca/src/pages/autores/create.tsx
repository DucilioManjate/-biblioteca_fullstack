import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import { useState, useCallback } from "react";
import { api } from "../../services/api";

type CreateAutorFormData = {
  name: string;
};

const CreateAutorFormSchema = yup.object().shape({
  nome: yup.string().required("Nome obrigatório"),
});

export default function CreateAutor() {
  const [nome, setNome] = useState("");
  
  
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(CreateAutorFormSchema),
  });

  const { errors } = formState;

  const createAutorFormSchema  = useCallback(async (data) => {
    try {
      await api.post("autores", data);
    } catch (error) {
      console.log(error.error);
    }
  }, []);

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" mx="auto" maxWidth={1480} px="6">
        <SideBar />
        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p="8"
          onSubmit={handleSubmit(createAutorFormSchema )}
        >
          <Heading fontSize="lg" fontWeight="normal">
            Criar autor
          </Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
            
            <Input
                name="nome"
                label="Nome do autor"
                error={errors.nome}
                {...register("nome")}
                value={nome}
                onChange={(event) => setNome(event.target.value)}
              />
           
          
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/autoress">
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
