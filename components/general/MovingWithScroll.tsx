import stls from '@/styles/components/general/MovingWithScroll.module.sass'
import { TypeChildren } from '@/types/index'
import { FC } from 'react'
import { useEffect, useRef, useState } from 'react'

type TMovingWithScrollProps = TypeChildren

const MovingWithScroll: FC<TMovingWithScrollProps> = ({ children }) => {
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
    let elem = document.getElementById('_moving_with_scroll')
    let elemPosTop = elem.getBoundingClientRect()
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
      id={'_moving_with_scroll'}
      ref={ref}
      className={stls.container}
      style={{ top: scroll }}>
      {children}
    </div>
  )
}

export default MovingWithScroll
