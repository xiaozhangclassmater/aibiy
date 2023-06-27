import { createSlice } from '@reduxjs/toolkit';
const HomeModule = createSlice({
  initialState: {
    goodPriceInfo: {

    } as goodPriceResponse
  },
  name: 'Home',
  reducers: {
    goodPriceAction(state, { payload }) {
      state.goodPriceInfo = payload
      console.log(payload);

    }
  }
})
export const { goodPriceAction } = HomeModule.actions
export default HomeModule

