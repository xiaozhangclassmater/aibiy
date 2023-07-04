import { useRef, useState } from "react";
import { useIntersectionObserver } from "..";
export function useLazyLoad(callback: () => void) {
  const elRef = useRef<Element>(null)
  const [isActive, setisActive] = useState(false)
  const { unobserve } = useIntersectionObserver(elRef, ([{ isIntersecting }]: IntersectionObserverEntry[]) => {
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