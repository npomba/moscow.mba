import stls from '@/styles/modules/LargeBtn.module.sass'

const LargeBtn = ({ btnText, redBgColor, linkTo }) => {
  const largeBtnClasses = [stls.btn, stls.pointer]

  if (redBgColor) largeBtnClasses.push(stls.redBgColor)

  return (
    <a href={linkTo} target='_blank' className={largeBtnClasses.join(' ')}>
      {btnText}
    </a>
  )
}

export default LargeBtn
