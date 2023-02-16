import React from 'react';
import PopUpDialog from '../popups/PopUpDialog';
import { Box } from '@chakra-ui/react';
import InputField from './InputField';
import SelectInput from './SelectInput';
import InputImage from './InputImage';

const FormSertifikasi = ({ isOpen, onClickConfirm, onClickDelete, onClose, bidang, onChangeImage, onRemoveImage, previewImage }) => {
    return (
        <PopUpDialog
            title={'Sertifikasi'}
            isOpen={isOpen}
            onClose={onClose}
            onClickConfirm={onClickConfirm}
            onClickDelete={onClickDelete}
            body={
                <Box>
                    <InputField
                        label={'Nama Lembaga'}
                        type={'text'}
                    />
                    <SelectInput
                        label={'Bidang'}
                        placeholder={'Pilih bidang'}
                    >
                        {
                            bidang?.map((data) => (
                                <option value={data.Id_Bidang} key={data.Id_Bidang}>{data.NamaBidang}</option>
                            ))
                        }
                    </SelectInput>
                    <InputImage 
                        onChangeImage={onChangeImage}
                        onRemoveImage={onRemoveImage}
                        previewImage={previewImage}
                    />
                </Box>
            }
        />
    );
}

export default FormSertifikasi;
