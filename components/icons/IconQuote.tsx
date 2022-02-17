import stls from '@/styles/components/icons/IconQuote.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type TypeIconQuoteProps = TypeClassNames

const IconQuote = ({ classNames }: TypeIconQuoteProps) => {
  return (
    <div
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      aria-hidden={'true'}>
      <svg viewBox='0 0 62 36' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M61.3525 0.184082C60.4885 3.92809 59.5765 7.91208 58.6165 12.1361C57.7525 16.3601 56.9365 20.4881 56.1685 24.5201C55.4005 28.4561 54.7765 32.1041 54.2965 35.4641H34.5685L33.5605 33.8801C34.4245 30.4241 35.5285 26.7761 36.8725 22.9361C38.2165 19.0961 39.6565 15.2081 41.1925 11.2721C42.8245 7.33608 44.4085 3.64008 45.9445 0.184082H61.3525ZM28.5205 0.184082C27.6565 3.92809 26.7445 7.91208 25.7845 12.1361C24.9205 16.3601 24.1045 20.4881 23.3365 24.5201C22.5685 28.4561 21.9445 32.1041 21.4645 35.4641H1.73652L0.728516 33.8801C1.59252 30.4241 2.69652 26.7761 4.04052 22.9361C5.38452 19.0961 6.82452 15.2081 8.36052 11.2721C9.99252 7.33608 11.5765 3.64008 13.1125 0.184082H28.5205Z'
          fill={colors.eta}
        />
      </svg>
    </div>
  )
}

export default IconQuote
