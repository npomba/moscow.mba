import stls from '@/styles/components/icons/IconClose.module.sass'

const IconClose = ({ stroke = 'black' }) => {
  return (
    <div className={stls.container}>
      <svg viewBox='0 0 14 14' fill="#000" xmlns='http://www.w3.org/2000/svg'>
        <title>Закрыть</title>
        <path
          d='M1 1L13 13'
          stroke={stroke}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M13 1L1 13'
          stroke={stroke}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  )
}

export default IconClose
