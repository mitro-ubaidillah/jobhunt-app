import { FormControl, FormErrorMessage, FormLabel, Select } from '@chakra-ui/react';
import React from 'react';

const SelectInput = ({ errorsMessage, label, errorsName, register }) => {
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
            <Select placeholder='' {...register}>
                <option value="">1</option>
                <option value="">2</option>
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
