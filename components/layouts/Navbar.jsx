import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import ButtonSecondary from '../buttons/ButtonSecondary';
import Image from 'next/image';
import ButtonGhost from '../buttons/ButtonGhost';

const Navbar = ({ onLogout, onLogin, onClickLogo, auth, titlePage }) => {
    return (
        <Flex
            justify={'space-between'}
            bg={'transparent'}
            px={'10px'}
            align={'center'}
        >
            <Box
                onClick={onClickLogo}
                cursor={'pointer'}
            >
                <Image src='/images/icons/logo.png' width={'200'} height={'100'} alt='logo' />
            </Box>
            {
                auth ?
                    <>
                        <Text
                            fontSize={'20px'}
                            fontWeight={'600'}
                        >
                            {titlePage}
                        </Text>
                        <ButtonGhost
                            onClick={onLogout}
                        >
                            Keluar
                        </ButtonGhost>
                    </>
                    :
                    <ButtonSecondary
                        onClick={onLogin}
                    >
                        Masuk
                    </ButtonSecondary>
            }
        </Flex>
    );
}

export default Navbar;
