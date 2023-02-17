import React from 'react';
import PopUpDialog from '../popups/PopUpDialog';
import { Box } from '@chakra-ui/react';
import InputField from './InputField';
import SelectInput from './SelectInput';
import InputImage from './InputImage';

const FormSertifikasi = (
    {
        isOpen, onClickConfirm, onClickDelete, onClose, bidang, onChangeImage, onRemoveImage, 
        previewImage, errorsNamaLembaga, registerNamaLembaga, registerBidang, errorsBidang,
        registerImage, errorsImage
    }
) => {
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
                        errorsName={errorsNamaLembaga}
                        errorsMessage={errorsNamaLembaga?.message}
                        register={registerNamaLembaga}
                    />
                    <SelectInput
                        label={'Bidang'}
                        placeholder={'Pilih bidang'}
                        errorsName={errorsBidang}
                        errorsMessage={errorsBidang?.message}
                        register={registerBidang}
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
                        register={registerImage}
                        errorsName={errorsImage}
                        errorsMessage={errorsImage?.message}
                    />
                </Box>
            }
        />
    );
}

export default FormSertifikasi;
