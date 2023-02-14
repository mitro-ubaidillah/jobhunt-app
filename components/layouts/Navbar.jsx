import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import ButtonSecondary from '../buttons/ButtonSecondary';

const Navbar = () => {
    return (
        <Flex
            py={'27px'}
            px={'60px'}
            justify={'space-between'}
        >
            <Image src='/images/icons/logo.png' />
            <ButtonSecondary>
                Masuk
            </ButtonSecondary>
        </Flex>
    );
}

export default Navbar;
