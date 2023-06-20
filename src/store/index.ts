import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    HomeModule: () => ({})
  }
})


export default store