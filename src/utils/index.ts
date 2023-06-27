
type DataType = undefined | object | Array<[]> | null | string

export function isEmpty(ob: DataType) {
  return (!ob || Object.keys(ob).length === 0 || (Array.isArray(ob) && ob.length === 0))
}