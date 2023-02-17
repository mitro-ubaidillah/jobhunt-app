import axios from "axios";

const instance = axios.create({
    baseURL: `https://klinikme-test-api.herokuapp.com/api/v1/`,
});

export const api = {
    login: ({ Email, Password }) =>
        instance({
            method: `POST`,
            url: `data_user/masuk`,
            data: {
                Email: Email,
                Password: Password,
            }
        }),
    register: ({ Username, Email, Password }) =>
        instance({
            method: `POST`,
            url: `data_user/daftar`,
            data: {
                Username: Username,
                Email: Email,
                Password: Password,
            }
        }),
    logout: (token) =>
        instance({
            method: `POST`,
            url: `data_user/keluar`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }),
    getAllKota: () =>
        instance({
            method: `GET`,
            url: `data_kota?size=516`,
        }),
    getAllProvinsi: () =>
        instance({
            method: `GET`,
            url: `data_provinsi?size=34`,
        }),
    getAllPendidikan: () =>
        instance({
            method: `GET`,
            url: `data_pendidikan?size=14`
        }),
    getAllBidang: () =>
        instance({
            method: `GET`,
            url: `data_bidang`
        }),
    uploadImage: (token, data) =>
        instance({
            method: `POST`,
            url: `upload_image`,
            headers: {
                Authorization: `Bearer ${token}`,
                'content-type': 'multipart/form-data'
            },
            data: data
        }),
    addDataPegawai: (token, data) => 
        instance({
            method: `POST`,
            url: `daftar_pegawai`,
            headers: {
                Authorization: `Bearer ${token}`,
                'content-type': 'multipart/form-data'
            },
            data: data
        })
}