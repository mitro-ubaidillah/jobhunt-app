import { Box, Button, Flex } from '@chakra-ui/react';
import React from 'react';
import ButtonSecondary from '../buttons/ButtonSecondary';
import Image from 'next/image';

const Navbar = ({ onLogin, onClickLogo }) => {
    return (
        <Flex
            justify={'space-between'}
            bg={'transparent'}
        >
            <Box
                onClick={onClickLogo}
                cursor={'pointer'}
            >
                <Image src='/images/icons/logo.png' width={'200'} height={'100'} alt='logo' />
            </Box>
            <ButtonSecondary
                onClick={onLogin}
            >
                Masuk
            </ButtonSecondary>
        </Flex>
    );
}

export default Navbar;
