import { createSlice } from '@reduxjs/toolkit';
const HomeModule = createSlice({
  initialState: {
    goodPriceInfo: {} as baseRoomInfo,
    higHscoreInfo: {} as baseRoomInfo
  },
  name: 'Home',
  reducers: {
    goodPriceAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    higHscoreAction(state, { payload }) {
      state.higHscoreInfo = payload
    }
  }
})
export const { goodPriceAction, higHscoreAction } = HomeModule.actions
export default HomeModule

