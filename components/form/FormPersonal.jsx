import { Box } from '@chakra-ui/react';
import React from 'react';
import InputField from './InputField';
import SelectInput from './SelectInput';

const FormPersonal = () => {
    return (
        <Box>
            <InputField 
                label={'Nama Lengkap'}
                type={'text'}
            />
            <InputField 
                label={'Tanggal Lahir'}
                type={'date'}
            />
            <InputField 
                label={'Umur'}
                type={'text'}
            />
            <InputField 
                label={'Alamat Lengkap'}
                type={'text'}
            />
            <SelectInput 
                label={'Provinsi'}
            />
            <SelectInput 
                label={'Kota / Kabupaten'}
            />
        </Box>
    );
}

export default FormPersonal;
