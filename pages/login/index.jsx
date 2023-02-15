import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useState } from 'react';
import InputField from '../../components/form/InputField';
import ButtonPrimary from '../../components/buttons/ButtonPrimary';
import Link from 'next/link';
import InputPassword from '../../components/form/InputPassword';

const Index = () => {
    const [show, setShow] = useState(false);
    const handleShowHide = () => {setShow(!show)}
    return (
        <Flex
            flexWrap={'wrap'}
            justify={'center'}
            align={'center'}
        >
            <Box
                flexBasis={'50%'}
                bgImage={`url(/images/login-image.png)`}
                bgRepeat={'no-repeat'}
                bgSize={'cover'}
                height={'100vh'}
                maxHeight={'100vh'}
                position={'relative'}
            >
                <Box
                    position={'absolute'}
                    bottom={'60px'}
                    left={'120px'}
                >
                    <Image src={'/images/icons/logo.png'} width={'400'} height={'82'} alt='logo' />
                </Box>
            </Box>
            <Box
                flexBasis={'50%'}
                textAlign={'center'}
            >
                <Text
                    color={'fontPrimary'}
                    fontSize={'24px'}
                    fontWeight={'600'}
                >
                    Halo!
                </Text>
                <Text
                    color={'#41414199'}
                    fontSize={'16px'}
                    fontWeight={'400'}
                >
                    Silahkan masukkan data di bawah ini
                </Text>
                <Box
                    width={'452px'}
                    mx={'auto'}
                    mt={'30px'}
                    mb={'60px'}
                >
                    <InputField
                        placeholder={'Email'}
                        type={'email'}
                    />
                    <InputPassword 
                        placeholder={'Password'}
                        onShowHide={()=>handleShowHide()}
                        show={show}
                    />
                </Box>
                <ButtonPrimary
                    width={'452px'}
                >
                    Masuk
                </ButtonPrimary>
                <Box
                    mt={'32px'}
                >
                    <Text
                        fontSize={'16px'}
                        fontWeight={'400'}
                        color={'#4C4C4CE5'}
                    >
                        Belum punya akun? <Link href={'/'} className='link'>Daftar Sekarang</Link>
                    </Text>
                </Box>
            </Box>
        </Flex>
    );
}

export default Index;
