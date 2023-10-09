import { Container, Image, Text } from "@chakra-ui/react"

export default function NoEntries(){
    return(
        <Container bg="whiteAlpha.900" border="2px" color="blackAlpha.500" maxW="container.sm" p="4" centerContent>
  <Image src='/placeholder.svg'   boxSize='100px'
 alt='No Entries Found' fallbackSrc='https://via.placeholder.com/150' />
      <Text fontSize="4xl">No Entries Found</Text>
  </Container>)
    
}