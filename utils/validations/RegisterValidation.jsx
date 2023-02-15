import * as Yup from 'yup';

export const RegisterValidation = Yup.object().shape({
    Username: Yup.string().required('Username wajib diisi'),
    Email: Yup.string().email('Format email salah').required('Email wajib diisi'),
    Password: Yup.string().required('Password wajib diisi'),
})