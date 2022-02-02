import { Box, Flex, Text, Avatar } from "@chakra-ui/react"

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text color="#0007">Lio Croons</Text> 
      </Box>
      <Avatar size="md" name="Lio" />
    </Flex>
  );
}
