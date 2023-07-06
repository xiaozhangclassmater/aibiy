import { useRef, useState } from "react";
import { useIntersectionObserver } from "..";
export function useLazyLoad<T extends HTMLDivElement>(callback: () => void) {
  const elRef = useRef<T>(null)
  const [isActive, setisActive] = useState(false)
  const { unobserve } = useIntersectionObserver<T>(elRef, ([{ isIntersecting }]: IntersectionObserverEntry[]) => {
    if (isIntersecting) {
      setisActive(isIntersecting)
      callback()
      unobserve(elRef)
    }
    else {
      setisActive(false)
    }
  }, {
    threshold: 0
  })
  return { elRef, isActive }
}