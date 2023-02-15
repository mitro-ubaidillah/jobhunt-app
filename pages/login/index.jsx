import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useState } from 'react';
import InputField from '../../components/form/InputField';
import ButtonPrimary from '../../components/buttons/ButtonPrimary';
import Link from 'next/link';
import InputPassword from '../../components/form/InputPassword';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginValidation } from '../../utils/validations/LoginValidation';
import Cookies from 'js-cookie';
import SuccessAlert from '../../components/alerts/SuccessAlert';

const Index = () => {
    const [show, setShow] = useState(false);
    const handleShowHide = () => { setShow(!show) }

    const onHandlerLogin = async ({ Email, Password }) => {
        await axios.post(`https://klinikme-test-api.herokuapp.com/api/v1/data_user/masuk`, { Email, Password })
            .then(response => {
                Cookies.set('token', response.data.token);
                SuccessAlert('Login berhasil')
            })
            .catch(error => {
                // console.log(error)
                FailedAlert('Password atau email salah')
            })
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(LoginValidation),
        // defaultValues: initialValue
    });

    const onLogin = (data) => {
        onHandlerLogin(data);
    }

    return (
        <Flex
            flexWrap={'wrap'}
            justify={'center'}
            align={'center'}
            bg={'white'}
        >
            <Box
                flexBasis={{ base: '100%', md: '50%', lg: '50%' }}
                bgImage={`url(/images/login-image.png)`}
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
            <form>

            </form>
            <Box
                flexBasis={{ base: '100%', md: '50%' }}
                py={{ base: '20', md: '0' }}
                px={{ base: '10', md: '0' }}
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
                <form>
                    <Box
                        width={{ base: '300px', md: '330px', lg: '452px' }}
                        mx={'auto'}
                        mt={'30px'}
                        mb={'60px'}
                    >
                        <InputField
                            placeholder={'Email'}
                            type={'email'}
                            register={register('Email')}
                            errorsName={errors.Email}
                            errorsMessage={errors.Email?.message}
                        />
                        <InputPassword
                            placeholder={'Password'}
                            onShowHide={() => handleShowHide()}
                            show={show}
                            register={register('Password')}
                            errorsMessage={errors.Password?.message}
                            errorsName={errors.Password}
                        />
                    </Box>
                    <ButtonPrimary
                        width={{ base: '300px', md: '330px', lg: '452px' }}
                        onClick={handleSubmit(onLogin)}
                    >
                        Masuk
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
                        Belum punya akun? <Link href={'/register'} className='link'>Daftar Sekarang</Link>
                    </Text>
                </Box>
            </Box>
        </Flex>
    );
}

export default Index;
