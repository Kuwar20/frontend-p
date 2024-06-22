// Redux Store

import { configureStore } from '@reduxjs/toolkit'
import  userData from '../features/userDataSlice'

export const store = configureStore({
  reducer: {
    app: userData,
  },
})