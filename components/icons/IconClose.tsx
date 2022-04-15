import stls from '@/styles/components/icons/IconClose.module.sass'
import { TypeClassNames, TypeColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
// import { getClassNames } from '@/helpers/index'
import { GeneralIconContainer } from '@/components/general'

type TIconClose = TypeClassNames & {
  stroke?: TypeColor
}

const IconClose = ({ classNames, stroke = '#000' }: TIconClose) => {
  return (
    <>IconClose</>
    // <GeneralIconContainer classNames={[cn(stls.container, classNames)]}>
    //   <svg viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
    //     <title>Закрыть</title>
    //     <path
    //       d='M1 1L13 13'
    //       stroke={stroke || colors.omega}
    //       strokeLinecap='round'
    //       strokeLinejoin='round'
    //     />
    //     <path
    //       d='M13 1L1 13'
    //       stroke={stroke || colors.omega}
    //       strokeLinecap='round'
    //       strokeLinejoin='round'
    //     />
    //   </svg>
    // </GeneralIconContainer>
  )
}

export default IconClose
