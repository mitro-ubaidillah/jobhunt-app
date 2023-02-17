import { configureStore } from "@reduxjs/toolkit";

import SertifikasiSlice from "./slice/SertifikasiSlice";

export default configureStore({
    reducer: {
        sertifikasi: SertifikasiSlice
    },
})