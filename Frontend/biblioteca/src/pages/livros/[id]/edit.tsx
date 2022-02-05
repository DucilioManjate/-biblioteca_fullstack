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
  useToast,
  Select,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { Input } from "components/Form/Input";
import { Header } from "components/Header";
import { SideBar } from "components/SideBar";
import { useState, useEffect, useCallback } from "react";
import { api } from "services/api";

const EditAreaConhecimento = yup.object().shape({
  numero: yup.string().required("Número é obrigatório"),
  valor: yup.number().required("Preço é obrigatório"),
  quant_ocupacao: yup.number().required("Ocupação é obrigatório"),
  detalhes: yup.string().required("Detalhes é obrigatório"),
  livro: yup.object().shape({
    id: yup.number().required("Hotel é obrigatório"),
  }),
});

export default function EditLivro() {
  const toast = useToast();
  const router = useRouter();
  const { id } = router.query;
  const [edicao, setEdicao] = useState("");
  const [titulo, setTitulo] = useState("");
  const [ano, setAno] = useState("");
  const [resume, setResume] = useState("");
  const [miniatura, setMiniatura] = useState("");
  const { formState, register, handleSubmit } = useForm({
    resolver: yupResolver(EditLivro),
  });

  async function getItem() {
    try {
      const response = await api.get(`livros/${id}`);
      setEdicao(response.data.edicao);
      setTitulo(response.data.titulo);
      
    } catch (error) {
      console.log(error);
      toast({
        title: "Problema ao carregar livro.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }

 
  const { errors } = formState;
  const editLivro= useCallback(async (data) => {
    try {
      await api.put(`livros/${id}`, data);
      toast({
        title: "Livro editado.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Problema ao editar livro.",
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
        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p="8"
          onSubmit={handleSubmit(editLivro)}
        >
          <Heading fontSize="lg" fontWeight="normal">
            Editar Livro
          </Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
              
            <Input
                name="nome"
                label="Edição do livro"
                error={errors.nome}
                {...register("nome")}
                value={edicao}
                onChange={(event) => setEdicao(event.target.value)}
              />
              <Input
                name="nome"
                label="Tiitulo do livro"
                error={errors.nome}
                {...register("nome")}
                value={titulo}
                onChange={(event) => setTitulo(event.target.value)}
              />

              <Input
                name="nome"
                label="Ano livro"
                error={errors.nome}
                {...register("nome")}
                value={ano}
                onChange={(event) => setAno(event.target.value)}
              />

              <Input
                name="nome"
                label="Resume"
                error={errors.nome}
                {...register("nome")}
                value={resume}
                onChange={(event) => setResume(event.target.value)}
              />

              <Input
                name="nome"
                label="Miniatura"
                error={errors.nome}
                {...register("nome")}
                value={miniatura}
                onChange={(event) => setMiniatura(event.target.value)}
              />
              
            </SimpleGrid>

            
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/livros">
                <Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button
                type="submit"
                colorScheme="blue"
                isLoading={formState.isSubmitting}
              >
                Editar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
