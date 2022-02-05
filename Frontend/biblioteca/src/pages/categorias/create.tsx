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
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import { useState, useCallback } from "react";
import { api } from "../../services/api";

type CreateCategoriaFormData = {
  name: string;
};

const CreateCategoriaFormSchema = yup.object().shape({
  nome: yup.string().required("Nome obrigatório"),
  periodo: yup.string().required(""),

});

export default function CreateCategoria() {
  const [nome, setNome] = useState("");
  const [periodo, setPeriodo] = useState("");

  
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(CreateCategoriaFormSchema),
  });

  const { errors } = formState;

  const createCategoriaFormSchema  = useCallback(async (data) => {
    try {
      await api.post("categorias", data);
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
          onSubmit={handleSubmit(createCategoriaFormSchema)}
        >
          <Heading fontSize="lg" fontWeight="normal">
            Criar categoria
          </Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
           
              <Input
                name="nome"
                label="Nome da categoria"
                error={errors.nome}
                {...register("nome")}
                value={nome}
                onChange={(event) => setNome(event.target.value)}
              />
              
              <Input
                name="periodo"
                label="Perido"
                error={errors.periodo}
                {...register("periodo")}
                value={periodo}
                onChange={(event) => setPeriodo(event.target.value)}
              />
              
            
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/categorias">
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
