import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'

const Layout = ({ children }) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Javandel.net Homepage" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <title>Javandel - Homepage</title>
      </Head>
      <Container maxW="100vw" maxH="100vh" p={0}>
        {children}
      </Container>
    </Box>
  )
}

export default Layout
