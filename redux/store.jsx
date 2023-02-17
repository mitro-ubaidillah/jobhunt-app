import { configureStore } from "@reduxjs/toolkit";

import SertifikasiSlice from "./slice/SertifikasiSlice";
import PendidikanSlice from "./slice/PendidikanSlice";

export default configureStore({
    reducer: {
        sertifikasi: SertifikasiSlice,
        pendidikan: PendidikanSlice
    },
})