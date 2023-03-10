import { Box, Flex, Text } from '@chakra-ui/layout';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import InputField from '../../components/form/InputField';
import InputPassword from '../../components/form/InputPassword';
import ButtonPrimary from '../../components/buttons/ButtonPrimary';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterValidation } from '../../utils/validations/RegisterValidation';
import SuccessAlert from '../../components/alerts/SuccessAlert';
import FailedAlert from '../../components/alerts/FailedAlert';
import { api } from '../../service/api';
import { Auth } from '../../utils/Auth/Auth';
import { useRouter } from 'next/router';

const Index = () => {
    const [show, setShow] = useState(false);
    const handleShowHide = () => { setShow(!show) }
    const auth = Auth();
    const router = useRouter();

    const onHandlerRegister = async ({ Username, Email, Password }) => {
        await api.register({ Username, Email, Password })
            .then(() => {
                SuccessAlert('Pendafataran berhasil');
                router('/login')
            })
            .catch(error => {
                FailedAlert(error.response.data?.message)
            })

    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onsubmit',
        resolver: yupResolver(RegisterValidation)
    });

    const onRegister = (data) => {
        onHandlerRegister(data);
    }

    useEffect(() => {
        if(auth) {
            router.push('/pegawai')
        }
    },[])

    return (
        <Flex
            flexWrap={'wrap'}
            justify={'center'}
            align={'center'}
            bg={'white'}
        >
            <Box
                flexBasis={{ base: '100%', md: '50%', lg: '50%' }}
                bgImage={`url(/images/register-image.png)`}
                bgRepeat={'no-repeat'}
                bgSize={'cover'}
                height={{ base: '30vh', md: '100vh' }}
                maxHeight={'100vh'}
                position={'relative'}
            >
                <Box
                    position={'absolute'}
                    bottom={{ base: '50%', md: '560px', lg: '60px' }}
                    left={{ base: '20%', md: '40px', lg: '120px' }}
                >
                    <Image src={'/images/icons/logo.png'} width={'400'} height={'82'} alt='logo' className='img-login' />
                </Box>
            </Box>
            <Box
                flexBasis={{ base: '90%', md: '50%' }}
                py={{ base: '20', md: '0' }}
                px={{ base: '10', md: '0' }}
                textAlign={'center'}
            >
                <Text
                    color={'fontPrimary'}
                    fontSize={'24px'}
                    fontWeight={'600'}
                >
                    Selamat Datang
                </Text>
                <Text
                    color={'#41414199'}
                    fontSize={'16px'}
                    fontWeight={'400'}
                >
                    Mulai perjalanan karirmu bersama JobHunt.id
                </Text>
                <form>
                    <Box
                        width={{ base: '300px', md: '330px', lg: '452px' }}
                        mx={'auto'}
                        mt={'30px'}
                        mb={'60px'}
                    >
                        <InputField
                            placeholder={'Username'}
                            type={'text'}
                            register={register('Username')}
                            errorsMessage={errors.Username?.message}
                            errorsName={errors.Username}
                        />
                        <InputField
                            placeholder={'Email'}
                            type={'email'}
                            register={register('Email')}
                            errorsMessage={errors.Email?.message}
                            errorsName={errors.Email}
                        />
                        <InputPassword
                            placeholder={'Password'}
                            onShowHide={() => handleShowHide()}
                            show={show}
                            register={register('Password')}
                            errorsName={errors.Password}
                            errorsMessage={errors.Password?.message}
                        />
                    </Box>
                    <ButtonPrimary
                        width={{ base: '300px', md: '330px', lg: '452px' }}
                        onClick={handleSubmit(onRegister)}
                    >
                        Daftar
                    </ButtonPrimary>
                </form>
                <Box
                    mt={'32px'}
                >
                    <Text
                        fontSize={'16px'}
                        fontWeight={'400'}
                        color={'#4C4C4CE5'}
                    >
                        Sudah punya akun? <Link href={'/login'} className='link'>Masuk Sekarang</Link>
                    </Text>
                </Box>
            </Box>
        </Flex>
    );
}

export default Index;
