import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Select,
  SimpleGrid,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import { useState, useCallback, useEffect } from "react";
import { api } from "../../services/api";

type CreateLivroFormData = {
  name: string;
};

const CreateLivroFormSchema = yup.object().shape({
  edicao: yup.string().required("edicao obrigatório"),
  titulo: yup.string().required("titulo obrigatório"),
  ano: yup.string().required("ano obrigatório"),
  resume: yup.string().required("resume obrigatório"),
  miniatura: yup.string().required("miniatura obrigatório"),

  categoria: yup.object().shape({
    id: yup.number().required("Categora é obrigatório"),
  }),
  editora: yup.object().shape({
    id: yup.number().required("Editora é obrigatório"),
  }),
  areaConhecimentos:yup.array().of( yup.object().shape({
    id: yup.number().required("Categora é obrigatório"),
  })),
  autores: yup.array().of(yup.object().shape({
    id: yup.number().required("autores é obrigatório"),
  })),

});

export default function CreateLivrol() {
  const toast = useToast();
  const [editoras, setEditoras] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [areaConhecimentos, setAreaConhecimentos] = useState([]);
  const [autores, setAutores] = useState([]);

  const [edicao, setEdicao] = useState("");
  const [titulo, setTitulo] = useState("");
  const [ano, setAno] = useState("");
  const [resume, setResume] = useState("");
  const [miniatura, setMiniatura] = useState("");


  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(CreateLivroFormSchema),
  });

  const { errors } = formState;
  async function getAutores() {
    try {
      const response = await api.get("autores");
      setAutores(response.data);
    } catch (error) {
      console.log(error);
      toast({
        title: "Problema ao carregar .",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }
  async function getEditoras() {
    try {
      const response = await api.get("editoras");
      setEditoras(response.data);
    } catch (error) {
      console.log(error);
      toast({
        title: "Problema ao carregar .",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  } async function getAreaConhecimentos() {
    try {
      const response = await api.get("areas-conhecimento");
      setAreaConhecimentos(response.data);
    } catch (error) {
      console.log(error);
      toast({
        title: "Problema ao carregar AreaConhecimentos",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  } async function postCategorias() {
    try {
      const response = await api.get("categorias");
      setCategorias(response.data);
    } catch (error) {
      console.log(error);
      toast({
        title: "Problema ao carregar.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }

  const createAutorFormSchema = useCallback(async (data) => {
    console.log(data)
    try {
      await api.post("livros", data);
    } catch (error) {
      console.log(error.error);
    }
  }, []);

  useEffect(() => {
    getAutores();
   // getCategorias();
    getEditoras();
    getAreaConhecimentos();

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
          onSubmit={handleSubmit(createAutorFormSchema)}
        >
          <Heading fontSize="lg" fontWeight="normal">
            Criar livros
          </Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
              <Input
                name="edicao"
                label="Edição do livro"
                error={errors.edicao}
                {...register("edicao")}
                value={edicao}
                onChange={(event) => setEdicao(event.target.value)}
              />
              <Input
                name="titulo"
                label="Tiitulo do livro"
                error={errors.titulo}
                {...register("titulo")}
                value={titulo}
                onChange={(event) => setTitulo(event.target.value)}
              />

              <Input
                name="ano"
                label="Ano livro"
                error={errors.ano}
                {...register("ano")}
                value={ano}
                onChange={(event) => setAno(event.target.value)}
              />

              <Input
                name="resume"
                label="Resume"
                error={errors.resume}
                {...register("resume")}
                value={resume}
                onChange={(event) => setResume(event.target.value)}
              />

              <Input
                name="miniatura"
                label="Miniatura"
                error={errors.miniatura}
                {...register("miniatura")}
                value={miniatura}
                onChange={(event) => setMiniatura(event.target.value)}
              />
              <Select
                name="categoria"
                id="categora"
                bgColor="white"
                color="gray.900"
                placeholder="Selecione a categoria"
                error={errors.categoria?.id}
                {...register("categoria.id")}
              >
                {categorias.map((categoria) => (
                  <option value={categoria.id}>{categoria.nome}</option>
                ))}
              </Select>
              <Select
                name="editora"
                id="editora"
                bgColor="white"
                color="gray.900"
                placeholder="Selecione o editora"
                error={errors.editora?.id}
                {...register("editora.id")}
              >
                {editoras.map((editora) => (
                  <option value={editora.id}>{editora.nome}</option>
                ))}
              </Select>

              <Select
                name="autores"
                id="autores"
                bgColor="white"
                color="gray.900"
                placeholder="Selecione o autores"
                error={errors.autores?.id}
                {...register("autores.id")}
              >
                {autores.map((autor) => (
                  <option value={autor.id}>{autor.nome}</option>
                ))}
              </Select>

              <Select
                name="areaConhecimentos"
                id="areaConhecimentos"
                bgColor="white"
                color="gray.900"
                placeholder="Selecione o areaConhecimentos"
                error={errors.areaConhecimentos?.id}
                {...register("areaConhecimentos.id")}
              >
                {areaConhecimentos.map((areaC) => (
                  <option value={areaC.id}>{areaC.nome}</option>
                ))}
              </Select>

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
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
