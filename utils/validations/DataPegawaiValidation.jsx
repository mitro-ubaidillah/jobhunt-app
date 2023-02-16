import * as Yup from 'yup';

const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
}

export const DataPegawaiValidation = Yup.object().shape({
    NamaLengkap: Yup.string().required('Nama lengkap wajib diisi'),
    // TanggalLahir: Yup.string().required('Tanggal lahir wajib diisi'),
    Umur: Yup.string().required('Umur wajib diisi'),
    AlamatLengkap: Yup.string().required('Alamat wajib diisi'),
    Kd_Provinsi: Yup.string().required('Pilih Provinsi'),
    Kd_Kota: Yup.string().required('Pilih Kota / Kabupaten' ),
})