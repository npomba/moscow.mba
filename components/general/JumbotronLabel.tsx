import { useAt } from '@/helpers/index'

const JumbotronLabel = () => {
  const at = useAt()

  const txt = at.mini
    ? 'Mini MBA'
    : at.mba
    ? 'MBA'
    : at.profession
    ? 'Профессия'
    : at.executive
    ? 'Executive MBA'
    : at.mbl
    ? 'MBA'
    : ''

  return (
    <span>
      {at.online
        ? `${txt} ${!at.profession ? 'ONLINE' : ''}`
        : at.blended
        ? `${txt} BLENDED`
        : at.executive
        ? txt
        : at.mbl
        ? `${txt} ONLINE`
        : ''}
    </span>
  )
}

export default JumbotronLabel
