import { Button } from '@chakra-ui/react';
import React from 'react';

const ButtonSecondary = ({ children, type, onClick, width, height, gap }) => {
    return (
        <Button
            onClick={onClick}
            type={type}
            bg={'transparent'}
            color={'primary'}
            py={'8px'}
            border={'1px'}
            borderColor={'primary'}
            fontWeight={'600'}
            fontSize={'14px'}
            // _hover={{ bg:'primary', color:'white' }}
            borderRadius={'4px'}
            width={width}
            height={height}
            gap={gap}
        >
            {children}
        </Button>
    );
}

export default ButtonSecondary;
