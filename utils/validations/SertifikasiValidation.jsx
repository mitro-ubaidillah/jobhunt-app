import * as Yup from 'yup';

export const SertivikasiValidation = Yup.object().shape({
    NamaLembaga: Yup.string().required('Wajib diisi'),
    Id_Bidang: Yup.string().required('Pilih bidang'),
    DokumenSertifikat: Yup.string()
});