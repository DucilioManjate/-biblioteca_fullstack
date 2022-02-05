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

export default function EditQuarto() {
  const toast = useToast();
  const router = useRouter();
  const { id } = router.query;
  const [livros, setLivros] = useState([]);
  const [numero, setNumero] = useState(0);
  const [valor, setPreco] = useState(0);
  const [quant_ocupacao, setQuant_ocupacao] = useState(0);
  const [detalhes, setDetalhes] = useState("");
  const [livro, setHotel] = useState();
  const { formState, register, handleSubmit } = useForm({
    resolver: yupResolver(EditAreaConhecimento),
  });

  async function getItem() {
    try {
      const response = await api.get(`exemplares/${id}`);
      setNumero(response.data.numero);
      setPreco(response.data.valor);
      setQuant_ocupacao(response.data.quant_ocupacao);
      setDetalhes(response.data.detalhes);
      setHotel(response.data.livro.id);
    } catch (error) {
      console.log(error);
      toast({
        title: "Problema ao carregar exemplar.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }

  async function getLivros() {
    try {
      const response = await api.get("livros");
      setLivros(response.data);
    } catch (error) {
      console.log(error);
      toast({
        title: "Problema ao carregar livros.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }

  useEffect(() => {
    getItem();
    getLivros();
  }, []);

  const { errors } = formState;
  const editQuarto = useCallback(async (data) => {
    try {
      await api.put(`exemplares/${id}`, data);
      toast({
        title: "Quarto editado.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Problema ao editar exemplar.",
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
          onSubmit={handleSubmit(editQuarto)}
        >
          <Heading fontSize="lg" fontWeight="normal">
            Editar Quarto
          </Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
              <Input
                name="numero"
                label="Número"
                type="text"
                error={errors.numero}
                {...register("numero")}
                value={numero}
                onChange={(event) => setNumero(Number(event.target.value))}
              />
              <Input
                name="valor"
                label="Preço"
                type="number"
                error={errors.valor}
                {...register("valor")}
                value={valor}
                onChange={(event) => setPreco(Number(event.target.value))}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
              <Input
                name="quant_ocupacao"
                label="Ocupação"
                type="number"
                error={errors.quant_ocupacao}
                {...register("quant_ocupacao")}
                value={quant_ocupacao}
                onChange={(event) =>
                  setQuant_ocupacao(Number(event.target.value))
                }
              />
              <Input
                name="detalhes"
                label="Detalhes"
                value={detalhes}
                error={errors.detalhes}
                {...register("detalhes")}
                onChange={(event) => setDetalhes(event.target.value)}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
              
              <Select
                name="livro"
                id="livro"
                placeholder="Selecione o livro"
                bgColor="white"
                color="gray.900"
                size="lg"
                error={errors.livro?.id}
                value={livro}
                {...register("livro.id")}
              >
                {livros.map((livro) => (
                  <option  value={livro.id}>{livro.nome}</option>
                ))}
              </Select>
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/exemplares">
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
