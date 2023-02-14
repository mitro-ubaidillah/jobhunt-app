import { Button } from '@chakra-ui/react';
import React from 'react';

const ButtonSecondary = ({ children, type, onClick }) => {
    return (
        <Button
            onClick={onClick}
            type={type}
            bg={'transparent'}
            color={'primary'}
            py={'8px'}
            border={'1px'}
            borderColor={'primary'}
            fontWeight={'500'}
            _hover={{ bg:'primary', color:'white' }}
            borderRadius={'4px'}
        >
            {children}
        </Button>
    );
}

export default ButtonSecondary;
