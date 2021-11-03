import { SetString } from '@/helpers/index'
import langMenu from '@/data/translation/months'
import { getStringDeclensionNumber } from '@/helpers/index'

const TrainingPeriod = ({ type = null }) => {
  return (
    <>
      {type === 'mini' && (
        <>9 {SetString(langMenu.months, false, getStringDeclensionNumber(9))}</>
      )}
      {type === 'mba' && (
        <>
          18 {SetString(langMenu.months, false, getStringDeclensionNumber(18))}
        </>
      )}
      {type === 'profession' && (
        <>4 {SetString(langMenu.months, false, getStringDeclensionNumber(4))}</>
      )}
      {type === 'executive' && (
        <>
          26 {SetString(langMenu.months, false, getStringDeclensionNumber(26))}
        </>
      )}
      {type === 'mbl' && (
        <>
          18 {SetString(langMenu.months, false, getStringDeclensionNumber(26))}
        </>
      )}
    </>
  )
}

export default TrainingPeriod
