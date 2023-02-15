import { Flex } from '@chakra-ui/react';
import React from 'react';
import ButtonSecondary from '../buttons/ButtonSecondary';
import Image from 'next/image';

const Navbar = () => {
    return (
        <Flex
            justify={'space-between'}
            bg={'transparent'}
        >
            <Image src='/images/icons/logo.png' width={'200'} height={'100'} alt='logo'/>
            <ButtonSecondary>
                Masuk
            </ButtonSecondary>
        </Flex>
    );
}

export default Navbar;
