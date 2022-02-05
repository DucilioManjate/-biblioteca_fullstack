import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  toast,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import { useState } from "react";
import { useCallback } from "react";
import { api } from "../../services/api";
import router, { useRouter } from "next/router";

const CreateUserFormSchema = yup.object().shape({
  documento: yup.string().required("obrigatório"),
  telefone: yup.string().required("obrigatório"),
  email: yup.string().required("obrigatório"),
  cpf: yup.string().required("obrigatório"),
  nomeCompleto: yup.string().required("obrigatório"),

});

export default function CreateHospede() {
  const {push} = useRouter();
  const toast = useToast();
  const [documento, setDocumento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [nomeCompleto, setNomeCompleto] = useState("");

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(CreateUserFormSchema),
  });

  const { errors } = formState;
  
  const createCliente = useCallback(async (data) => {
    try {
      await api.post("clientes", data);
      toast({
        title: "Cliente cadastrado.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });push("/clientes")
    } catch (error) {
     
      toast({
        title: "Problema ao cadastrar cliente.",
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
          // as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p="8"
          // onSubmit={createHospede}
        >
          <Heading fontSize="lg" fontWeight="normal">
            Criar cliente
          </Heading>
          <Divider my="6" borderColor="gray.700" />
          <form onSubmit={handleSubmit(createCliente)}>
            <VStack spacing="8">
              <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
               
                <Input
                  name="documento"
                  label="Documento"
                  error={errors.documento}
                  {...register("documento")}
                  value={documento}
                  onChange={(event) => setDocumento(event.target.value)}
                />
                <Input
                  name="telefone"
                  label="Telefone"
                  error={errors.telefone}
                  {...register("telefone")}
                  value={telefone}
                  onChange={(event) => setTelefone(event.target.value)}
                />
                <Input
                  name="email"
                  label="Email"
                  error={errors.email}
                  {...register("email")}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <Input
                  name="cpf"
                  label="CPF"
                  error={errors.cpf}
                  {...register("cpf")}
                  value={cpf}
                  onChange={(event) => setCpf(event.target.value)}
                />
                <Input
                  name="nomeCompleto"
                  label="NomeCompleto"
                  error={errors.nomeCompleto}
                  {...register("nomeCompleto")}
                  value={nomeCompleto}
                  onChange={(event) => setNomeCompleto(event.target.value)}
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
          </form>
        </Box>
      </Flex>
    </Box>
  );
}
