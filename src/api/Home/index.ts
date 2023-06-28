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
  return request({
    url,
    method: 'get'
  })
}