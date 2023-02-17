import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const date = new Date();

const sertifikasiSlice = createSlice({
    name: 'sertifikasi',
    initialState: Cookies.get('sertifikat') ? JSON.parse(Cookies.get('sertifikat')) : [],
    reducers: {
        addSertifikat: (state, action) => {
            const newSertifikat = {
                id: date.getTime(),
                NamaLembaga: action.payload.NamaLembaga,
                Id_Bidang: action.payload.Id_Bidang,
                DokumenSertifikat: action.payload.DokumenSertifikat,
            };

            state.push(newSertifikat);
            Cookies.set('sertifikat', JSON.stringify(state));
        },
        editSertifikat: (state, action) => {
            const index = state.filter((data, index) => data.id == action.payload.id && index);
            console.log(index);
        },
        destroySertifikat: (state, action) => {
            const newSertifikat = state.filter((data) => data.id !== action.payload.id);
            Cookies.set('sertifikat', JSON.stringify(newSertifikat));
            return newSertifikat;
        }
    }
});

export const {addSertifikat, editSertifikat, destroySertifikat} = sertifikasiSlice.actions;
export default sertifikasiSlice.reducer;