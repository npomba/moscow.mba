import stls from '@/styles/components/layout/Overlay.module.sass'

const Overlay = ({ close }) => (
  <div className={stls.container} onClick={close}></div>
)

export default Overlay
