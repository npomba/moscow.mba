import stls from '@/styles/components/layout/Wrapper.module.sass'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

const Wrapper = ({ children, classNames = [], row = true, column = false }) => {
  let container
  if (classNames.length !== 0) {
    container = getClassNames({ classNames })
  } else if (column) {
    container = stls.column
  } else if (row) {
    container = stls.row
  }
  return <div className={cn([stls.page], container)}>{children}</div>
}

export default Wrapper
