import { createSlice } from '@reduxjs/toolkit'

export const userData = createSlice({
    name: 'userData',
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    })

    export default userData.reducer;

