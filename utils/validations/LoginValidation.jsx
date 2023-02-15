import * as Yup from 'yup';

export const LoginValidation = Yup.object().shape({
    Email: Yup.string().email('Format email salah').required('Email wajib diisi'),
    Password: Yup.string().required('Password wajib diisi'),
})