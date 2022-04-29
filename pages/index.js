import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
    <Box 
    className='degenhound'
    m="auto"
    at={['-20px', '-60px', '-120px']}
    mb={['-40px', '-140px', '-200px']}
    w={[280, 480, 640]}
  h={[280, 480, 640]}
  position='relative'
  align= "center"

    >
      <Image
        src="/images/houndsmoking.gif"
        size="s"
        position="absolute"
        width={450}
        height={450}
            />

    </Box>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Welcome to the Degen Hound Races!
      </Box>
      <Box align="center" my={4}>
            <Button 
            colorScheme="teal"
            >
              Connect Wallet
            </Button>
        </Box>
      <Box display={{ md: 'flex' }}>
        <Box 
          flexGrow={1}
          textAlign="center"
          >
          <Heading as="h2" variant="page-title">
            RECENT PLAYS
          </Heading>
          <p>COMING SOON...</p>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          ABOUT US
        </Heading>
        <Paragraph>
          Degen Hounds is a {" "} 
          <Link href="https://docs.chain.link/docs/chainlink-vrf/" target="_blank">
          Smart Contract
        </Link>
          {" "}that allows users to play Double or Nothing 
          with their Ethereum tokens. Odds are 50/50 with a 5% fee, 3.5% of which is distributed
          to DH NFT holders in MATIC. Our Smart contract uses {" "}
          <Link href="https://docs.chain.link/docs/chainlink-vrf/" target="_blank">
          Chainlink VRF
        </Link>
          {" "}to generate True Randomness 
          and every single transaction through the smart contract is verifiable on-chain.
        </Paragraph>


      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
