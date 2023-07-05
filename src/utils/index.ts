
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

export function windowScrollTo(x = 0, y = 0) {
  'scrollTo' in window && window.scrollTo(x, y)
}