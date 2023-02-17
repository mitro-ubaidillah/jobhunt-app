import { Box } from '@chakra-ui/react';
import React from 'react';
import InputField from './InputField';
import SelectInput from './SelectInput';
import AccordionItemCustom from '../accordion/AccordionItemCustom';

const FormPersonal = (
    {
        provinsi, kota, onChangeProv, ageValue, registerAddress, registerAge, registerBorn,
        registerKota, registerName, registerProv, errorsName, errorsAddress, errorsAge, errorsBorn, errorsKota,
        errorsProv, onChangeBirth
    }
) => {
    return (
        <AccordionItemCustom
            title={'Informasi Pribadi'}
            body={
                <Box>
                    <InputField
                        label={'Nama Lengkap'}
                        type={'text'}
                        register={registerName}
                        errorsName={errorsName}
                        errorsMessage={errorsName?.message}
                    />
                    <InputField
                        label={'Tanggal Lahir'}
                        type={'date'}
                        onChange={onChangeBirth}
                        register={registerBorn}
                        errorsName={errorsBorn}
                        errorsMessage={errorsBorn?.message}
                    />
                    <InputField
                        label={'Umur'}
                        type={'text'}
                        disabled={true}
                        value={ageValue}
                        register={registerAge}
                        errorsName={errorsAge}
                        errorsMessage={errorsAge?.message}
                    />
                    <InputField
                        label={'Alamat Lengkap'}
                        type={'text'}
                        register={registerAddress}
                        errorsName={errorsAddress}
                        errorsMessage={errorsAddress?.message}
                    />
                    <SelectInput
                        label={'Provinsi'}
                        placeholder={'Pilih Provinsi'}
                        onChange={onChangeProv}
                        register={registerProv}
                        errorsName={errorsProv}
                        errorsMessage={errorsProv?.message}
                    >
                        {
                            provinsi?.map((data) => (
                                <option value={data.Kd_Provinsi} key={data.Kd_Provinsi}>{data.NamaProvinsi}</option>
                            ))
                        }
                    </SelectInput>
                    <SelectInput
                        label={'Kota / Kabupaten'}
                        placeholder={'Pilih Kota / Kabupaten'}
                        register={registerKota}
                        errorsName={errorsKota}
                        errorsMessage={errorsKota?.message}
                    >
                        {
                            kota?.map((data) => (
                                <option value={data.Kd_Kota} key={data.Kd_Kota}>{data.NamaKota}</option>
                            ))
                        }
                    </SelectInput>
                </Box>
            }
        />
    );
}

export default FormPersonal;
