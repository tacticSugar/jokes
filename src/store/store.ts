import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import countReducer from './slices/count.slice'

const countPersistConfig = {
  key: 'countPersist',
  storage,
}

const persistedCountReducer = persistReducer(countPersistConfig, countReducer)

export const store = configureStore({
  reducer: {
    count: persistedCountReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
