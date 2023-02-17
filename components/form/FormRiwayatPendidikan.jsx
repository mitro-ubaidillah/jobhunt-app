import React from 'react';
import InputField from './InputField';
import PopUpDialog from '../popups/PopUpDialog';
import { Box } from '@chakra-ui/react';
import SelectInput from './SelectInput';

const FormRiwayatPendidikan = (
    {
        onClose, isOpen, onClickConfirm, jenjang, onClickDelete, registerJenjang, registerNamaSekolah, registerTanggalMulai,
        registerTanggalSelesai, errorsJenjang, errorsNamaSekolah, errorsTanggalMulai, errorsTanggalSelesai
    }
) => {
    return (
        <PopUpDialog
            title={'Riwayat Pendidikan'}
            isOpen={isOpen}
            onClose={onClose}
            onClickConfirm={onClickConfirm}
            onClickDelete={onClickDelete}
            body={
                <Box>
                    <SelectInput
                        label={'Jenjang'}
                        placeholder={'Pilih Jenjang Pendidikan'}
                        register={registerJenjang}
                        errorsName={errorsJenjang}
                        errorsMessage={errorsJenjang?.message}
                    >
                        {
                            jenjang?.map((data) => (
                                <option value={data.Kd_Pendidikan} key={data.Kd_Pendidikan}>{data.Pendidikan}</option>
                            ))
                        }
                    </SelectInput>
                    <InputField
                        label={'Nama Sekolah'}
                        type={'text'}
                        register={registerNamaSekolah}
                        errorsName={errorsNamaSekolah}
                        errorsMessage={errorsNamaSekolah?.message}
                    />
                    <InputField
                        label={'Tgl. Mulai'}
                        type={'date'}
                        register={registerTanggalMulai}
                        errorsName={errorsTanggalMulai}
                        errorsMessage={errorsTanggalMulai?.message}
                    />
                    <InputField
                        label={'Tgl. Selesai'}
                        type={'date'}
                        register={registerTanggalSelesai}
                        errorsName={errorsTanggalSelesai}
                        errorsMessage={errorsTanggalSelesai?.message}
                    />
                </Box>
            }
        />
    );
}

export default FormRiwayatPendidikan;
