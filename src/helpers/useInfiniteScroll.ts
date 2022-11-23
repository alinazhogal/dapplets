import { useState, useRef, useEffect, useCallback } from 'react'

function useInfiniteScroll() {
  const [start, setStart] = useState(0)
  const loadMoreRef = useRef(null)

  const handleObserver = useCallback((entries) => {
    const [target] = entries
    if (target.isIntersecting) {
      setStart((prev) => prev + 20)
    }
  }, [])

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    }

    const observer = new IntersectionObserver(handleObserver, option)

    if (loadMoreRef.current) observer.observe(loadMoreRef.current)
  }, [handleObserver])

  return { loadMoreRef, start }
}

export default useInfiniteScroll
// IntersectionObserverEntry[]