import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';

const InputField = ({ type, label, register, errorsName, errorsMessage, placeholder, onChange, disabled, value, ref }) => {
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
            <Input
                type={type}
                width={'full'}
                border={'1px'}
                borderColor={'borderPrimary'}
                height={'38px'}
                borderRadius={'4px'}
                color={'fontPrimary'}
                placeholder={placeholder}
                onChange={onChange}
                disabled={disabled}
                ref={ref}
                value={value}
                {...register}
            />
            {errorsName && (
                <FormErrorMessage>
                    {errorsMessage}
                </FormErrorMessage>
            )}
        </FormControl>
    );
}

export default InputField;
