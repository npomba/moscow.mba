import useAt from '@/components/hooks/useAt'

const JumbotronLabel = () => {
  const at = useAt()

  const txt = at.mini
    ? 'Mini MBA'
    : at.professional
    ? 'Professional MBA'
    : at.industry
    ? 'Industry MBA'
    : at.profession
    ? 'Профессия'
    : at.executive
    ? 'Executive MBA'
    : at.mbl
    ? 'Industry MBA'
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
