import React from 'react';
import InputField from './InputField';
import PopUpDialog from '../popups/PopUpDialog';
import { Box } from '@chakra-ui/react';
import SelectInput from './SelectInput';

const FormRiwayatPendidikan = ({ onClose, isOpen, onClickConfirm, jenjang, onClickDelete }) => {
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
                    />
                    <InputField 
                        label={'Tgl. Mulai'}
                        type={'date'}
                    />
                    <InputField 
                        label={'Tgl. Selesai'}
                        type={'date'}
                    />
                </Box>
            }
        />
    );
}

export default FormRiwayatPendidikan;
