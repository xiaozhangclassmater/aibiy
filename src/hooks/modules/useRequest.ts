import { AxiosRequestConfig, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
interface argumentOption extends AxiosRequestConfig {
  url: string,
  params?: any
}
interface Options {
  config: argumentOption // 请求参数
  manual?: boolean, // 是否手动触发 如果为 true，则 useRequest不会默认执行，你需要调用 run方法进行触发
  loadingDelay?: number //可以延迟 loading 变成 true 的时间，有效防止闪烁。例如上面的场景，假如 getUsername 在 300ms 内返回，则 loading 不会变成 true，避免了页面展示 Loading... 的情况。
}
type fnParams<T, P extends (...args: any[]) => Promise<AxiosResponse<T>>> = P;
export function useRequest<T, P extends (...args: any[]) => Promise<AxiosResponse<T>> = any>(Fn: fnParams<T, P>, options: Options) {
  const [data, setData] = useState<T>()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const run = () => {
    if (!options?.manual) return
    request()
  }
  const request = async () => {
    options?.loadingDelay ? setTimeout(() => { setLoading(true) }, options.loadingDelay) : setLoading(true)
    try {
      const { data } = await Fn(options.config.url, options.config.params) as AxiosResponse<T>
      setData(data)
    } catch (error: any) {
      setError(error)
    } finally {
      setLoading(false)
    }

  }
  const onError = () => error
  useEffect(() => {
    // 默认为false ，当为 true的时候 手动调用request 函数
    (!options?.manual) && request()
  }, [])

  return { data, loading, error, run, onError }
}

export default useRequest