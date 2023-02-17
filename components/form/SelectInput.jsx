import { FormControl, FormErrorMessage, FormLabel, Select } from '@chakra-ui/react';
import React from 'react';

const SelectInput = ({ errorsMessage, label, errorsName, register, children, onChange, placeholder }) => {
    return (
        <FormControl
            isInvalid={errorsName}
            mb={'18px'}
        >
            <FormLabel
                fontSize={'14px'}
                fontWeight={'300'}
                color={'fontPrimary'}
            >
                {label}
            </FormLabel>
            <Select placeholder={placeholder} {...register} onChange={onChange}>
                {children}
            </Select>
            {errorsName && (
                <FormErrorMessage>
                    {errorsMessage}
                </FormErrorMessage>
            )}
        </FormControl>
    );
}

export default SelectInput;
