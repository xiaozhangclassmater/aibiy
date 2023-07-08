interface storeStateType {
  HomeModule: {
    goodPriceInfo: baseRoomInfo,
    higHscoreInfo: baseRoomInfo,
    hotSourceRegion: HotSourceCityType
    hotRecommendDesc: HotRecemmendDestType
  },
  DetailModule: {
    detailInfo: baseRoomInfo & newAddFiled
  }
}