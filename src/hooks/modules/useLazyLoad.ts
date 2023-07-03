import { useRef, useState } from "react";
import { useIntersectionObserver } from "..";
export function useLazyLoad(callback: () => void) {
  const Element = useRef<Element>(null)
  const [isActive, setisActive] = useState(false)
  const { unobserve } = useIntersectionObserver(Element, ([{ isIntersecting }]: IntersectionObserverEntry[]) => {
    if (isIntersecting) {
      setisActive(isIntersecting)
      callback()
      unobserve(Element)
    }
    else {
      setisActive(false)
    }
  }, {
    threshold: 0
  })
  return { Element, isActive }
}