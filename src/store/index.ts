import { configureStore } from '@reduxjs/toolkit'
import HomeModule from './modules/Home'

const store = configureStore({
  reducer: {
    HomeModule: HomeModule.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true
})


export default store