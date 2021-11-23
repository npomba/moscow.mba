import stls from '@/styles/utils/MovingWithScroll.module.sass'
import { useEffect, useRef, useState } from 'react'
import { log } from 'util'


type MovingWithScrollType = {
  start: number
  end: number
}

const MovingWithScroll:React.FC<MovingWithScrollType> = ({children, start , end}) => {
  const [parentH, setParentH] = useState(0)
  const [h, setH] = useState(0)
  const ref: any = useRef()
  const [scrollY, setScrollY] = useState(0)
  const [posTop, setPosTop] = useState<any>(0)

  const [scroll, setScroll] = useState('')

  useEffect(() => {
    let elem = document.getElementById('myDiv');
    let elemPosTop = elem.getBoundingClientRect();
    setPosTop(elemPosTop.top)
    console.log(elemPosTop.top)
    setParentH(ref.current.offsetParent.offsetHeight)
    setH(ref.current.offsetHeight)

    window.addEventListener('scroll', () => {
      setScrollY(window.scrollY)

    })
    positionElem()
    console.log(scrollY)
  }, [scrollY])

  useEffect(() => {
    // let elem = document.getElementById('myDiv');
    // let elemPosTop = elem.getBoundingClientRect();
    // setPosTop(elemPosTop.top)
    // console.log(elemPosTop.top)
    // setParentH(ref.current.offsetParent.offsetHeight)
    // setH(ref.current.offsetHeight)

    // console.log(elem.scrollHeight)

  }, [])

  const positionElem = () => {
    if (scrollY - posTop < 0) {
      return setScroll('0px')
    } else if (scrollY - posTop > parentH - h) {
      return setScroll(parentH - h + 'px')
    }
    return setScroll(scrollY - posTop + 'px')
  }

  return (
  <div
    id={"myDiv"}
    ref={ref}
    style={{position: 'absolute', top: scroll}}
  >
   {children}
</div>
  )
}

export default MovingWithScroll




















