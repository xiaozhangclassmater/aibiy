import { configureStore } from '@reduxjs/toolkit'
import DetailModule from './modules/Detail'
import HomeModule from './modules/Home'

const store = configureStore({
  reducer: {
    HomeModule: HomeModule.reducer,
    DetailModule: DetailModule.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true
})


export default store