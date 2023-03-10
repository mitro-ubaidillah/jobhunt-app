import { Button } from '@chakra-ui/react';
import React from 'react';

const ButtonPrimary = ({ type, onClick, children, width, height, gap }) => {
    return (
        <Button
            onClick={onClick}
            type={type}
            bg={'primary'}
            color={'white'}
            py={'8px'}
            fontWeight={'600'}
            fontSize={'14px'}
            _hover={{ bg:'primaryHover' }}
            borderRadius={'4px'}
            width={width}
            height={height}
            gap={gap}
        >
            {children}
        </Button>
    );
}

export default ButtonPrimary;
