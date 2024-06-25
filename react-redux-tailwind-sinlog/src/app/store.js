// Redux Store

import { configureStore } from '@reduxjs/toolkit'
import userAuth from '../features/userDataSlice'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, userAuth);

export const store = configureStore({
  reducer: {
    app: persistedReducer,
  },
})

export const persistor = persistStore(store);