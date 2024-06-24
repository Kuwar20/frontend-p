// Redux Store

import { configureStore } from '@reduxjs/toolkit'
import  userAuth from '../features/userDataSlice'

export const store = configureStore({
  reducer: {
    app: userAuth,
  },
})