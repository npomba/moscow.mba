import stls from '@/styles/utils/MovingWithScroll.module.sass'
import { useEffect, useState } from 'react'


type MovingWithScrollType = {
  start: number
  end: number
}

const MovingWithScroll:React.FC<MovingWithScrollType> = ({children, start , end}) => {
  const [fixed, setFixed] = useState(false)

  useEffect(() => {
      document.addEventListener('scroll', () => {
        const scrollHeight = document.body.scrollHeight
        const pageYOffset = window.scrollY
        pageYOffset > (scrollHeight * start) / 100 &&
        pageYOffset + window.innerHeight < (scrollHeight * end) / 100 ? setFixed(true) : setFixed(false)
      })
  }, [])



  return (
  <div
    className={`${stls.position} ${fixed && stls.fixed}`}
  >
   {children}
</div>
  )
}

export default MovingWithScroll