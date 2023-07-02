import React, { useEffect } from "react";

export default function useIntersectionObserver(
  target: React.RefObject<HTMLElement | undefined>,
  callback: (entries: IntersectionObserverEntry[]) => void,
  options?: IntersectionObserverInit
) {
  let observer: IntersectionObserver | null = null

  useEffect(() => {
    observer = new IntersectionObserver(callback, options)
    if (target.current) {
      observer.observe(target.current)
    }
  }, [])


  function unobserve() {
    observer && observer.unobserve(target.current!)
  }

  return { unobserve }
}