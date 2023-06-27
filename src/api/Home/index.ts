import request from "@/services";

export function getGoodPriceInfo(url: string) {
  return request<baseRoomInfo>({
    url,
    method: 'get'
  })
}

export function getHighscoreInfo(url: string) {
  return request<baseRoomInfo>({
    url,
    method: 'get'
  })
}