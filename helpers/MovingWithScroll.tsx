import { useEffect, useRef, useState } from 'react'


type MovingWithScrollType = {
  start: number
  end: number
}

const MovingWithScroll:React.FC<MovingWithScrollType> = ({children, start, end}) => {
  const elem = useRef(null)
  const [scrollY, setScrollY] = useState(0)
  const [top, setTop] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      // console.log(window.scrollY)
      setScrollY(window.scrollY)
    })

  }, [])

  useEffect(() => {
    if (scrollY - start >= 0) {
      setTop(scrollY - start)
    }
    if (scrollY > end) {
      setTop(top)
    }
  }, [scrollY])


  return (
  <div
    // className={`${stls.pos} ${scrollY >= start && scrollY <= end && stls.stick}`}
    ref={elem}
    style={{ transform: `translateY(${top}px)` }}
  >
   {children}
</div>
  )
}

export default MovingWithScroll