import { Button } from '@chakra-ui/react';
import React from 'react';

const ButtonGhost = ({ children, onClick, type }) => {
    return (
        <Button
            onClick={onClick}
            type={type}
            bg={'transparent'}
            color={'primary'}
            _hover={{ bg:'transparent' }}
        >
            {children}
        </Button>
    );
}

export default ButtonGhost;
