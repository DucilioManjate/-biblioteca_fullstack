import { Box, Flex} from "@chakra-ui/react"
import { Header } from "../components/header"

export default function Home() {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" mx="auto" maxWidth={1550} px="6">
        

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          Hello
        </Box>
      </Flex>
    </Box>
  )
}
