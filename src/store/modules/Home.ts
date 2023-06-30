import { createSlice } from '@reduxjs/toolkit';
const HomeModule = createSlice({
  initialState: {
    goodPriceInfo: {} as baseRoomInfo,
    higHscoreInfo: {} as baseRoomInfo,
    hotSourceRegion: {} as HotSourceCityType,
    hotRecommendDesc: {} as HotRecemmendDestType
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
    },
    saveHotRecommendDest(state, { payload }) {
      state.hotRecommendDesc = payload
    }
  }
})
export const { saveGoodPriceAction, saveHigHscoreAction, saveHotSourceRegion, saveHotRecommendDest } = HomeModule.actions
export default HomeModule

