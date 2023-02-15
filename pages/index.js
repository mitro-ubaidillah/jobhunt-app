import Head from 'next/head'
import ButtonSecondary from '../components/buttons/ButtonSecondary'
import ButtonPrimary from '../components/buttons/ButtonPrimary'
import { Box, ButtonGroup, Flex, Text } from '@chakra-ui/react'
import Navbar from '../components/layouts/Navbar'
import Layout from '../components/layouts/Layout'
import Image from 'next/image'
import ButtonFloat from '../components/buttons/ButtonFloat'

export default function Home() {
  return (
    <>
      <Head>
        <title>JobHunt.id</title>
        <meta name="description" content="Index" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Layout>
        <Navbar />
        <Flex
          justify={'space-between'}
          pt={'37px'}
          align={'center'}
        >
          <Box
            maxWidth={'555px'}
          >
            <Text
              fontSize={'52px'}
              fontWeight={'700'}
              lineHeight={'62px'}
              color={'fontPrimary'}
              mb={'18px'}
            >
              Temukan Masa Depan Karirmu Sekarang
            </Text>
            <Text
              fontWeight={'300'}
              fontSize={'20px'}
              color={'fontPrimary'}
              lineHeight={'25px'}
            >
              Kami membantu menghubungkan para job seeker dengan perusahaan-perusahaan terbaik di Indonesia
            </Text>
            <ButtonGroup
              gap={'30px'}
              mt={'70px'}
            >
              <ButtonPrimary
                width={'154px'}
                height={'34px'}
              >
                Selengkapnya
              </ButtonPrimary>

              <ButtonSecondary
                gap={'13px'}
                width={'154px'}
                height={'34px'}
              >
                <Image
                  src='/images/icons/phone.png'
                  width={'18'}
                  height={'18'}
                  alt='phone icon'
                />

                Hubungi Kami
              </ButtonSecondary>
            </ButtonGroup>
          </Box>
          <Box>
            <Image
              src={'/images/banner1.png'}
              width={'524'}
              height={'547'}
              alt='banner'
            />
          </Box>
        </Flex>
        <Box
          width={'full'}
          textAlign={'right'}
          pt={'24px'}
        >
          <ButtonFloat />
        </Box>
      </Layout>
    </>
  )
}

// export async function getServerSideProps() {
//   // const result = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=4cee0d1f3d660d8d420266c93e1f1e5d&language=en-US&page=1');
//   // // const data = result.data.results
//   // return {
//   //   props: {
//   //     movies: data
//   //   }
//   // }
// }
