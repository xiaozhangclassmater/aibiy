import React from "react"

type DataType = undefined | object | Array<[]> | null | string

export function isEmpty(ob: DataType) {
  return (!ob || Object.keys(ob).length === 0 || (Array.isArray(ob) && ob.length === 0))
}

export function resetScrollTop(scrollTop = 0) {
  if (document.body) {
    document.body.scrollTop = scrollTop
  } else {
    document.documentElement.scrollTop = scrollTop

  }
}


export function setBodyStyle<T extends keyof React.CSSProperties>(styleName: T, value: React.CSSProperties[T]) {
  (document.body.style as any)[styleName] = value
}


export function windowScrollTo(x = 0, y = 0) {
  'scrollTo' in window && window.scrollTo(x, y)
}

type jsType = string | number | object | undefined | Array<any>

function isSupportApi(apiName: string) {
  return apiName in window
}


export function getCacheData(key: string) {
  return JSON.parse(localStorage.getItem(key) || '{}')
}
export function setCacheData(key: string, value: jsType) {
  localStorage.setItem(key, JSON.stringify(value))
}
export function removeCacheData(key: string) {
  localStorage.removeItem(key)
}
export function removeAllCacheData() {
  localStorage.clear()
}