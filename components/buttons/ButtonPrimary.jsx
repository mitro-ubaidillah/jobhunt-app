import { Button } from '@chakra-ui/react';
import React from 'react';

const ButtonPrimary = ({ type, onClick, children }) => {
    return (
        <Button
            onClick={onClick}
            type={type}
            bg={'primary'}
            color={'white'}
            py={'8px'}
            fontWeight={'500'}
            _hover={{ bg:'primaryHover' }}
            borderRadius={'4px'}
        >
            {children}
        </Button>
    );
}

export default ButtonPrimary;
