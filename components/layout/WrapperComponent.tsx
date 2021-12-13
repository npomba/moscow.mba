import stls from '@/styles/components/layout/WrapperComponent.module.sass'

const WrapperComponent = ({ children }) => {
    return (
      <div className={stls.page}>
        {children}
      </div>
    )
  }
  
  export default WrapperComponent
  