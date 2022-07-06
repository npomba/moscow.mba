import stls from '@/styles/components/icons/IconMessages.module.sass'
import { TypeClassNames, TypeColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { IconContainer } from '@/components/layout'

// TODO: improve structure
const IconMessages = () => {
  return (
    // <div className={stls.container}>
    <>
      <svg
        width='21'
        height='19'
        viewBox='0 0 21 19'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M19.2347 12.5252C19.2347 14.0608 17.9718 15.2125 16.5147 15.2125H9.42325C9.13182 15.2125 8.93753 15.3084 8.74325 15.5005L6.41183 17.8998C6.1204 18.1878 5.63468 17.9959 5.63468 17.6119V16.2683C5.63468 15.6924 5.14896 15.3084 4.66325 15.3084H4.27467C2.81753 15.3084 1.55469 14.0608 1.55469 12.6211V3.79133C1.55469 2.25573 2.81753 1.104 4.27467 1.104H11.269'
          stroke='white'
          strokeWidth='2'
          strokeMiterlimit='10'
        />
      </svg>
      <svg
        width='24'
        height='22'
        viewBox='0 0 24 22'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M19.1424 0.961426H4.76528C3.01671 0.961426 1.55957 2.40106 1.55957 4.12863V14.494C1.55957 16.2216 3.01671 17.6612 4.76528 17.6612H13.1196C13.411 17.6612 13.7024 17.7572 13.9939 18.0452L16.811 20.8285C17.1024 21.1164 17.6853 20.9244 17.6853 20.4446V18.813C17.6853 18.1411 18.171 17.6612 18.851 17.6612H19.2396C20.9881 17.6612 22.4453 16.2216 22.4453 14.494V4.12863C22.3481 2.40106 20.891 0.961426 19.1424 0.961426Z'
          stroke='white'
          strokeWidth='2'
          strokeMiterlimit='10'
        />
      </svg>
    </>
    // </div>
  )
}

export default IconMessages
