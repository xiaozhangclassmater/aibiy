import { getCacheData, setCacheData } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";
const DetailModule = createSlice({
  name: 'Detail',
  initialState: {
    detailInfo: getCacheData('houseDetail') || {} as (baseRoomInfo & newAddFiled)
  },
  reducers: {
    saveDetailInfo(state, { payload }) {
      setCacheData('houseDetail', payload)
      state.detailInfo = payload
    },
  }
})
export const { saveDetailInfo } = DetailModule.actions

export default DetailModule