import request from "@/services";

export function queryGoodPriceInfo(url: string) {
  return request<baseRoomInfo>({
    url,
    method: 'get'
  })
}

export function queryHighscoreInfo(url: string) {
  return request<baseRoomInfo>({
    url,
    method: 'get'
  })
}

export function queryHotSourceRegionInfo(url: string) {
  return request<HotSourceCityType>({
    url,
    method: 'get'
  })
}
export function queryHotRecommendInfo(url: string) {
  return request<HotSourceCityType>({
    url,
    method: 'get'
  })
}
export function queryCityCategaryInfo(url: string) {
  return request<cityCataGaryType>({
    url,
  })
}