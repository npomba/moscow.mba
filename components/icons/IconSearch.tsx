import stls from '@/styles/components/icons/IconSearch.module.sass'

const IconSearch = ({ color = '#000' }) => {
  return (
    <div className={stls.container}>
      <svg viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect
          x='20.4531'
          y='21.4165'
          width='2.67771'
          height='10.8243'
          transform='rotate(-45 20.4531 21.4165)'
          fill={color}
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M22.5233 21.5428C26.4892 17.5768 26.4892 11.1468 22.5233 7.18088C18.5574 3.21496 12.1273 3.21496 8.1614 7.18088C4.19548 11.1468 4.19548 17.5768 8.1614 21.5428C12.1273 25.5087 18.5574 25.5087 22.5233 21.5428ZM20.9738 19.9903C24.0823 16.8819 24.0823 11.8421 20.9738 8.73368C17.8654 5.62526 12.8257 5.62526 9.71724 8.73368C6.60882 11.8421 6.60882 16.8819 9.71724 19.9903C12.8257 23.0987 17.8654 23.0987 20.9738 19.9903Z'
          fill={color}
        />
      </svg>
    </div>
  )
}

export default IconSearch
