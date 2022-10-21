import {
  Flex,
  Box,
  VStack,
  Heading,
  Image,
  Button,
  Text
} from '@chakra-ui/react'
const Itemgrid = () => {
  return (
    <Flex h="full" w="full" direction={{ base: 'column', md: 'row' }}>
      <VStack
        w={{ md: '100%' }}
        h="100vh"
        alignItems="center"
        bgImage="linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url('katebg.jpg')"
        bgPos="center"
        bgSize="cover"
        bgRepeat="no-repeat"
      >
        <Box mt="25vh">
          <Heading size="4xl" color="#fff">Kate</Heading>
        </Box>
        <Box>
          <Image
            border="6px solid #1E1E1E"
            borderRadius="50%"
            src="kate.png"
            alt="jason"
          ></Image>
        </Box>
        <Box textAlign="center">
          <Text ml={6} mr={6} fontSize="3xl" color="#fff">Web Publisher | Tech Writer | Code Monkey</Text>
        </Box>
        <Box>
          <a href="https://www.javandel.net/kate" rel="noreferrer">
            <Button mt={10} colorScheme="red" size={'lg'}>
              Visit
            </Button>
          </a>
        </Box>
      </VStack>
      <VStack
        w={{ md: '100%' }}
        h="100vh"
        alignItems="center"
        bgImage="linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url('jasonbg.png')"
        bgPos="center"
        bgSize="cover"
        bgRepeat="no-repeat"
      >
        <Box mt="25vh">
          <Heading size="4xl" color="#fff">Jason</Heading>
        </Box>
        <Box>
          <Image
            border="6px solid #1E1E1E"
            borderRadius="50%"
            src="jason.png"
            alt="jason"
          ></Image>
        </Box>
        <Box textAlign="center">
          <Text fontSize="3xl" color="#fff"  ml={6} mr={6}>
            Full Stack Developer | Linux Enthusiast | Tinkerer | College Student
          </Text>
        </Box>
        <Box>
          <a href="https://www.javandel.net/jason" rel="noreferrer">
            <Button mt={10} colorScheme="red" size={'lg'}>
              Visit
            </Button>
          </a>
        </Box>
      </VStack>
    </Flex>
  )
}
export default Itemgrid
