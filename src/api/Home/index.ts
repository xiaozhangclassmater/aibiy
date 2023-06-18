import request from "@/services";

export function getHomeList (url : string , params : any) {
  return request({
    url ,
    params,
    method : 'get'
  })
}