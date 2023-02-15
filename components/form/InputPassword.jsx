import { Button } from '@chakra-ui/button';
import { FormControl, FormErrorMessage } from '@chakra-ui/form-control';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import React from 'react';
import { VscEyeClosed, VscEye } from 'react-icons/vsc';

const InputPassword = ({ onShowHide, errorsName, placeholder, errorsMessage, show, register }) => {
    return (
        <FormControl
            isInvalid={errorsName}
            mb={'18px'}
        >
            <InputGroup>
                <Input
                    type={show ? 'text' : 'password'}
                    width={'full'}
                    border={'1px'}
                    borderColor={'borderPrimary'}
                    height={'38px'}
                    borderRadius={'4px'}
                    color={'fontPrimary'}
                    placeholder={placeholder}
                    {...register}
                />
                <InputRightElement>
                    <Button
                        onClick={onShowHide}
                        bg={'transparent'}
                        _hover={{ bg: 'transparent' }}
                        p={0}
                        color={'primary'}
                        fontSize={'16px'}
                    >
                        {
                            show ?
                                <VscEyeClosed />
                                :
                                <VscEye />
                        }
                    </Button>
                </InputRightElement>
            </InputGroup>
            {errorsName && (
                <FormErrorMessage>
                    {errorsMessage}
                </FormErrorMessage>
            )}
        </FormControl>
    );
}

export default InputPassword;
