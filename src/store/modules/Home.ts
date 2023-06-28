import { createSlice } from '@reduxjs/toolkit';
const HomeModule = createSlice({
  initialState: {
    goodPriceInfo: {} as baseRoomInfo,
    higHscoreInfo: {} as baseRoomInfo,
    hotSourceRegion: {} as HotSourceCityType
  },
  name: 'Home',
  reducers: {
    saveGoodPriceAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    saveHigHscoreAction(state, { payload }) {
      state.higHscoreInfo = payload
    },
    saveHotSourceRegion(state, { payload }) {
      state.hotSourceRegion = payload
    }
  }
})
export const { saveGoodPriceAction, saveHigHscoreAction, saveHotSourceRegion } = HomeModule.actions
export default HomeModule

