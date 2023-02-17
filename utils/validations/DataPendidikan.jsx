import * as Yup from 'yup';

export const DataPendidikan = Yup.object().shape({
    Kd_Pendidikan: Yup.string().required('Jenjang pendidikan wajib diisi'),
    NamaSekolah: Yup.string().required('Nama sekolah wajib diisi'),
    TanggalMulai: Yup.string().required('Tanggal mulai wajib diisi'),
    TanggalSelesai: Yup.string().required('Tanggal selesai wajib diisi'),
});