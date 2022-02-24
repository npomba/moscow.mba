import { SetString, getStringDeclensionNumber } from '@/helpers/index'
import { months } from '@/data/index'

const TrainingPeriod = ({ period = null, type = null }) => {
  if (period)
    return (
      <>
        {period}{' '}
        {SetString(months.months, false, getStringDeclensionNumber(period))}
      </>
    )
  return (
    <>
      {type === 'mini' && (
        <>9 {SetString(months.months, false, getStringDeclensionNumber(9))}</>
      )}
      {type === 'mba' && (
        <>
          18 {SetString(months.months, false, getStringDeclensionNumber(18))}
        </>
      )}
      {type === 'profession' && (
        <>4 {SetString(months.months, false, getStringDeclensionNumber(4))}</>
      )}
      {type === 'course' && (
        <>4 {SetString(months.months, false, getStringDeclensionNumber(4))}</>
      )}
      {type === 'executive' && (
        <>
          26 {SetString(months.months, false, getStringDeclensionNumber(26))}
        </>
      )}
      {type === 'mbl' && (
        <>
          18 {SetString(months.months, false, getStringDeclensionNumber(26))}
        </>
      )}
    </>
  )
}

export default TrainingPeriod
