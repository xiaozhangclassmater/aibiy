import request from "@/services";

export function getGoodPriceInfo(url: string) {
  return request<goodPriceResponse>({
    url,
    method: 'get'
  })
}