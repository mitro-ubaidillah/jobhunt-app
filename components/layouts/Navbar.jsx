import { Flex } from '@chakra-ui/react';
import React from 'react';
import ButtonSecondary from '../buttons/ButtonSecondary';
import Image from 'next/image';

const Navbar = () => {
    return (
        <Flex
            py={'27px'}
            px={'60px'}
            justify={'space-between'}
        >
            <Image src='/images/icons/logo.png' width={'200'} height={'100'} alt='logo'/>
            <ButtonSecondary>
                Masuk
            </ButtonSecondary>
        </Flex>
    );
}

export default Navbar;
