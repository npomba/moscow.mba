import stls from '@/components/header/HeaderTop.module.sass'
import Link from 'next/link'
import { useContext } from 'react'
import MenuContext from '@/context/menu/menuContext'
import { SetString } from '@/helpers/index'
import { BtnChangeLang } from '@/components/btns'
import { useAt } from '@/helpers/index'
import { contactData } from '@/config/index'
import classNames from 'classnames'
import {
  IconLocation,
  IconLogo,
  IconLogoTitle,
  IconMobilePhone
} from '@/components/icons'
import { ImgLogoRabo, ImgLogoMde } from '@/components/images'

const HeaderTop = ({ handleMenuClose }) => {
  const { menuIsOpen, toggleMenu } = useContext(MenuContext)

  const contactInfo = contactData()
  const at = useAt()

  return (
    <div className='header-top'>
      <Link href='/'>
        <a
          className={classNames({
            ['main-logo']: true,
            ['mainLogoDisabled']: at.promo
          })}
          onClick={e => handleMenuClose(e)}
          aria-label='Moscow Business Academy'>
          <span className='pic'>
            <IconLogo />
          </span>
          <span className='text'>
            <IconLogoTitle />
          </span>
        </a>
      </Link>
      <div className='header-logos'>
        <span className='rabo'>
          <ImgLogoRabo />
        </span>
        <span className='dep'>
          <ImgLogoMde />
        </span>
      </div>
      <div className='header-place'>
        <IconLocation />
        {SetString(contactInfo.ru.address.city)},{' '}
        {SetString(contactInfo.ru.address.street)}
      </div>
      <div className='header-phones'>
        <a className={stls.phoneLink} href={contactInfo.ru.tels[0].href}>
          <span className={stls.discription}>
            {contactInfo.ru.tels[0].discription}
          </span>
          <span>{contactInfo.ru.tels[0].val}</span>
        </a>
        <a className={stls.phoneLink} href={contactInfo.ru.tels[1].href}>
          <span className={stls.discription}>
            {contactInfo.ru.tels[1].discription}
          </span>
          <span>{contactInfo.ru.tels[1].val}</span>
        </a>
        <a href={contactInfo.ru.tels[0].href} className='iconPhoneHeader'>
          <IconMobilePhone large fill={'#000'} />
        </a>
      </div>
      {at.index || at.about || at.contact ? <BtnChangeLang /> : null}
      {!at.promo && (
        <div
          className={classNames({
            'header-buter': true,
            opened: menuIsOpen
          })}
          onClick={toggleMenu}>
          <i></i>
          <i></i>
          <i></i>
        </div>
      )}
    </div>
  )
}

export default HeaderTop
