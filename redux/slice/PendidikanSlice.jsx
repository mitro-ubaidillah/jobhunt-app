import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const date = new Date();

const pendidikanSlice = createSlice({
    name: 'pendidikan',
    initialState: Cookies.get('pendidikan') ? JSON.parse(Cookies.get('pendidikan')) : [],
    reducers: {
        addPendidikan: (state, action) => {
            const newPendidikan = {
                id: date.getTime(),
                Kd_Pendidikan: action.payload.Kd_Pendidikan,
                NamaSekolah: action.payload.NamaSekolah,
                TanggalMulai: action.payload.TanggalMulai,
                TanggalSelesai: action.payload.TanggalSelesai
            };

            state.push(newPendidikan);
            Cookies.set('pendidikan', JSON.stringify(state));
        },
        editPendidikan: (state, action) => {
            const index = state.filter((data, index) => data.id == action.payload.id && index);
            console.log(index);
        },
        destroyPendidikan: (state, action) => {
            const newPendidikan = state.filter((data) => data.id !== action.payload.id);
            Cookies.set('pendidikan', JSON.stringify(newPendidikan));
            return newPendidikan;
        }
    }
});

export const {addPendidikan, editPendidikan, destroyPendidikan} = pendidikanSlice.actions;
export default pendidikanSlice.reducer;