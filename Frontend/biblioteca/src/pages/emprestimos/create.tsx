import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
  Select,
  useToast,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Input } from "components/Form/Input";
import { Header } from "components/Header";
import { SideBar } from "components/SideBar";
import { api } from "services/api";

const CreateQuartoFormSchema = yup.object().shape({
  dataEmprestimo: yup.date().required("Data de emprestimo é obrigatória"),
  dataDevoluicao: yup.date().required("Data de saida é obrigatória"),
  preco_total: yup.number().required("Valor é obrigatório"),
  cliente: yup.object().shape({
    id: yup.number().required("Cliente é obrigatório"),
  }),
  exemplar: yup.object().shape({
    id: yup.number().required("Examplares é obrigatório"),
  }),
  usuario: yup.object().shape({
    id: yup.number().required("Usuário é obrigatório"),
  }),
});

export default function CreateEmprestimo() {
  const toast = useToast();
  const [dataEmprestimo, setEmprestimo] = useState("");
  const [dataDevoluicao, setDevoluicao] = useState("");
  const [valor, setValor] = useState();
  const [multa, setMulta] = useState();
  const { formState, register, handleSubmit } = useForm({
    resolver: yupResolver(CreateQuartoFormSchema),
  });

  const { errors } = formState;
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

  async function getUsuarios() {
    try {
      const response = await api.get("usuarios");
      setUsuarios(response.data);
    } catch (error) {
      console.log(error);
      toast({
        title: "Problema ao carregar usuarios.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }

  const CreateEmprestimo = useCallback(async (data) => {
    try {
      await api.post("emprestimos", data);
      toast({
        title: " criado.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Problema ao cadastrar o emprestimo.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }, []);
  useEffect(() => {
    getClientes();
    getExemplares();
    getUsuarios();
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
          onSubmit={handleSubmit(CreateEmprestimo)}
        >
          <Heading fontSize="lg" fontWeight="normal">
            Criar emprestimo
          </Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
              <Input
                name="dataEmprestimo"
                label="Data do emprestimo"
                type="date"
                error={errors.dataEmprestimo}
                {...register("dataEmprestimo")}
                value={dataEmprestimo}
                onChange={(event) => setEmprestimo(event.target.value)}
              />
              <Input
                name="dataDevoluicao"
                label="Data de evoluição"
                type="date"
                error={errors.dataDevoluicao}
                {...register("dataDevoluicao")}
                value={dataDevoluicao}
                onChange={(event) => setDevoluicao(event.target.value)}
              />
              <Input
                name="valor"
                label="Valor do emprestimo"
                type="number"
                error={errors.valor}
                {...register("valor")}
                value={valor}
                onChange={(event) => setValor(Number(event.target.value))}
              />
               <Input
                name="mula"
                label="Multa"
                type="number"
                error={errors.preco_total}
                {...register("multa")}
                value={multa}
                onChange={(event) => setMulta(Number(event.target.value))}
              />
               <Select
                {...register("multa")}
                label = "Status"
                bgColor="white"
                color="gray.900"
                name="Status"
                placeholder="status"
              >
                <option value="DISPONIVEL">Disponivel</option>
                <option value="INDISPONIVEL">Indisponivel</option>
              </Select>
              
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
            </SimpleGrid>

          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/emprestimos">
                <Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button
                type="submit"
                colorScheme="blue"
                isLoading={formState.isSubmitting}
              >
                {" "}
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
