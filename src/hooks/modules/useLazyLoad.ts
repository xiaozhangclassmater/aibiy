import { useRef } from "react";
import { useIntersectionObserver } from "..";
export function useLazyLoad(callback: () => void) {
  const el = useRef<HTMLElement | undefined>()
  const { unobserve } = useIntersectionObserver(el, ([{ isIntersecting }]: IntersectionObserverEntry[]) => {
    if (isIntersecting) {
      callback()
      unobserve()
    }
  })
  return { el }
}