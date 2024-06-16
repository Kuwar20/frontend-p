import { configureStore } from '@reduxjs/toolkit'
import userDetail  from '../features/userDetailSlice'

export default configureStore({
    reducer: {
        app: userDetail,
    },
})