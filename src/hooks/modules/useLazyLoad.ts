import { useRef, useState } from "react";
import { useIntersectionObserver } from "..";
function useLazyLoad<T extends HTMLDivElement>(callback: () => void, options?: IntersectionObserverInit) {
  const elRef = useRef<T>(null)
  const [isActive, setisActive] = useState(false)
  const { unobserve } = useIntersectionObserver<T>(elRef, ([{ isIntersecting }]: IntersectionObserverEntry[]) => {
    if (isIntersecting) {
      setisActive(true)
      callback()
      unobserve(elRef)
    }
    else {
      setisActive(false)
    }
  }, {
    ...options,
    threshold: 0
  })
  return { elRef, isActive }
}

export default useLazyLoad