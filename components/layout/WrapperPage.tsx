import stls from '@/styles/components/layout/WrapperPage.module.sass'
import { StickyBottomContainer } from '@/components/layout'

const WrapperPage = ({ children }) => {
  return (
    <div className={stls.page}>
      {children}
      <StickyBottomContainer />
    </div>
  )
}

export default WrapperPage
