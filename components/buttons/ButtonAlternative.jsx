import { Button } from '@chakra-ui/react';
import React from 'react';

const ButtonAlternative = ({ children, onClick }) => {
    return (
        <Button
            fontWeight={'400'}
            fontSize={'14px'}
            color={'#414141A6'}
            bg={'transparent'}
            _hover={{ bg: 'transparent' }}
            onClick={onClick}
            gap={'11px'}
        >
            {children}
        </Button>
    );
}

export default ButtonAlternative;
