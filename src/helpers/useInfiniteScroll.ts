import { useState, useRef, useEffect } from 'react'

function useInfiniteScroll() {
  const [start, setStart] = useState(0)
  const [lastElement, setLastElement] = useState<HTMLDivElement | null>(null)

  const observer = useRef(
    new IntersectionObserver((entries) => {
      const first = entries[0]
      if (first.isIntersecting) {
        setStart((no) => no + 20)
      }
    }),
  )

  useEffect(() => {
    const currentElement = lastElement
    const currentObserver = observer.current

    if (currentElement) {
      currentObserver.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement)
      }
    }
  }, [lastElement])

  return { setLastElement, start, setStart }
}

export default useInfiniteScroll
