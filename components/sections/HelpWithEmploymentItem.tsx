import stls from '@/styles/components/general/HelpWithEmploymentItem.module.sass'
import { IconCheck } from '@/components/icons'

const HelpWithEmploymentItem = ({ title, description }) => {
  const whereToSplit = description.indexOf(' в компаниях')
  let firstDescPart = null
  let secondDescPart = null

  if (whereToSplit >= 0) {
    firstDescPart = description.slice(0, whereToSplit)
    secondDescPart = (
      <span className={stls.breakLine}>{description.slice(whereToSplit)}</span>
    )
  }

  return (
    <div className={stls.block}>
      <div className={stls.iconCheck}>
        <IconCheck />
      </div>
      <div className={stls.content}>
        <h4 className={stls.title}>{title}</h4>
        <p className={stls.description}>
          {firstDescPart ?? description}
          {secondDescPart}
        </p>
      </div>
    </div>
  )
}

export default HelpWithEmploymentItem
