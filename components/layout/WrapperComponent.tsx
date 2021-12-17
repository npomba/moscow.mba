import stls from '@/styles/components/layout/WrapperComponent.module.sass'
import getClassNames from '@/helpers/getClassNames'
import classnames from 'classnames'

const WrapperComponent = ({ children, classNames = [], row = true, column = false }) => {
    let container
    if (classNames.length !== 0) {
      container = getClassNames({ classNames })
    } else if (column) {
      container = stls.column
    } else if (row) {
      container = stls.row
    }
    return (
      <div className={classnames([stls.page], container)}>
        {children}
      </div>
    )
  }
  
  export default WrapperComponent
  