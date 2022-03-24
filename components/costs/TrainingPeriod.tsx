import { ruCaseProgram } from '@/helpers/index'
import { useAt } from '@/hooks/index'

const TrainingPeriod = ({ period = null, type = null }) => {
  const at = useAt()

  if (period)
    return (
      <>
        {period} {at.en ? 'month' : ruCaseProgram(period)}
      </>
    )
  return (
    <>
      {type === 'mini' && <>9 {at.en ? 'month' : ruCaseProgram(9)}</>}
      {type === 'mba' && <>18 {at.en ? 'month' : ruCaseProgram(18)}</>}
      {type === 'profession' && <>4 {at.en ? 'month' : ruCaseProgram(4)}</>}
      {type === 'course' && <>4 {at.en ? 'month' : ruCaseProgram(4)}</>}
      {type === 'executive' && <>26 {at.en ? 'month' : ruCaseProgram(26)}</>}
      {type === 'mbl' && <>18 {at.en ? 'month' : ruCaseProgram(18)}</>}
    </>
  )
}

export default TrainingPeriod
