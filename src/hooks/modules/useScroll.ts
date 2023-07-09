function useScrollTo(x = 0, y = 0) {
  'scrollTo' in window && window.scrollTo(x, y)
}

export default useScrollTo