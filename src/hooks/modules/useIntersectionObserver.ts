import { isEmpty } from "@/utils";
import React, { useEffect, useMemo } from "react";

const unRef = (target: React.RefObject<HTMLDivElement>) => target.current!

export default function useIntersectionObserver<T>(
  target: React.RefObject<T>,
  callback: (entries: IntersectionObserverEntry[]) => void,
  options?: IntersectionObserverInit
) {
  const targets = useMemo(() => (isEmpty(target) ? [] : (Array.isArray(target) ? target : [target])), [target])
  let observer: IntersectionObserver | null = null

  useEffect(() => {
    observer = new IntersectionObserver(callback, options)
    targets.length > 0 && targets.forEach(el => el.current && observer?.observe(el.current))
  }, [])

  function unobserve(target: React.RefObject<HTMLDivElement>) {
    observer && observer.unobserve(unRef(target))
  }

  return { unobserve }
}