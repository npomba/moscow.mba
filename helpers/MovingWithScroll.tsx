import stls from '@/styles/utils/MovingWithScroll.module.sass'
import { useEffect, useRef, useState } from 'react'
import { log } from 'util'


type MovingWithScrollType = {
  start: number
  end: number
}

const MovingWithScroll:React.FC<MovingWithScrollType> = ({children, start , end}) => {
  const ref: any = useRef()
  const [move, setMove] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [posTop, setPosTop] = useState<any>(0)

  const [scroll, setScroll] = useState('')

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollY(window.scrollY)
    })
    positionElem()
  }, [scrollY])


  useEffect(() => {
    let elem = document.getElementById('__movingWithScroll');
    let elemPosTop = elem.getBoundingClientRect();
    setPosTop(elemPosTop.top)
    setMove(ref.current.offsetParent.offsetHeight - ref.current.offsetHeight)
  }, [])



  const positionElem = () => {
    if (scrollY - posTop < 0) {
      return setScroll('0px')
    } else if (scrollY - posTop > move) {
      return setScroll(move + 'px')
    }
    return setScroll(scrollY - posTop + 'px')
  }

  return (
  <div
    id={"__movingWithScroll"}
    ref={ref}
    style={{position: 'absolute', top: scroll }}
  >
   {children}
</div>
  )
}

export default MovingWithScroll




















