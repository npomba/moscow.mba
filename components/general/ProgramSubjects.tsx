import { useAt } from '@/helpers/index'

const ProgramSubjects = ({ sum = false, type = '', subjects = '' }) => {
  const at = useAt()

  if (type === 'mini') {
    return (
      <span>
        {subjects === 'base' && sum === false
          ? '10'
          : subjects === 'specialty' && sum === false
          ? '5'
          : '15'}
      </span>
    )
  }

  if (type === 'mba') {
    return (
      <span>
        {subjects === 'base' && sum === false
          ? '37'
          : subjects === 'specialty' && sum === false
          ? '10'
          : '47'}
      </span>
    )
  }

  if (type === 'executive') {
    return (
      <span>
        {subjects === 'base' && sum === false
          ? '37'
          : subjects === 'specialty' && sum === false
          ? '10'
          : '49'}
      </span>
    )
  }

  if (type === 'profession') {
    return (
      <span>
        {subjects === 'base' && sum === false
          ? '20'
          : subjects === 'specialty' && sum === false
          ? '0'
          : '0'}
      </span>
    )
  }

  if (type === 'mbl') {
    return (
      <span>
        {subjects === 'base' && sum === false
          ? '41'
          : subjects === 'specialty' && sum === false
          ? '0'
          : '0'}
      </span>
    )
  }

  if (!type) {
    return (
      <span>
        {at.mini && subjects === 'base' && sum === false
          ? '10'
          : at.mini && subjects === 'specialty' && sum === false
          ? '5'
          : at.mini && '15'}

        {at.mba && subjects === 'base' && sum === false
          ? '37'
          : at.mba && subjects === 'specialty' && sum === false
          ? '10'
          : at.mba && '47'}

        {at.executive && subjects === 'base' && sum === false
          ? '37'
          : at.executive && subjects === 'specialty' && sum === false
          ? '14'
          : at.executive && '51'}

        {at.profession && subjects === 'base' && sum === false
          ? '10'
          : at.profession && subjects === 'specialty' && sum === false
          ? '0'
          : at.profession && '10'}

        {at.mbl && subjects === 'base' && sum === false
          ? '41'
          : at.mbl && subjects === 'specialty' && sum === false
          ? '0'
          : at.mbl && '41'}
      </span>
    )
  }

  return <></>
}

export default ProgramSubjects
