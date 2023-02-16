import { AddIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import React from 'react';

const ButtonAdd = ({ children, onClick }) => {
    return (
        <Button
            gap={'13px'}
            fontSize={'14px'}
            fontWeight={'500'}
            color={'primary'}
            border={'1px'}
            shadow={'sm'}
            borderColor={'#C4C4C466'}
            bg={'transparent'}
            _hover={{ bg:'transparent' }}
            onClick={onClick}
        >
            <AddIcon/> {children}
        </Button>
    );
}

export default ButtonAdd;
