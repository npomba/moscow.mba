import stls from '@/styles/components/header/HeaderInformation.module.sass'
import { SetString, useAt, getClassNames } from '@/helpers/index'
import Link from 'next/link'
import {
  IconLocation,
  IconLogo,
  IconLogoTitle,
  IconMobilePhone
} from '@/components/icons'
import { ImgLogoRabo, ImgLogoMde } from '@/components/images'
import { BtnChangeLang } from '@/components/btns'
import cn from 'classnames'
import contactData from '@/config/contactData'
import { Wrapper } from '@/components/layout'

const HeaderInformation = ({ classNames = [], handleMenu, openMenu }) => {
  const container = getClassNames({ classNames })
  const contactInfo = contactData()
  const at = useAt()

  return (
    <div className={cn([stls.container], container)}>
      <Wrapper>
        <Link href='/'>
          <a
            className={cn(stls.logo, {
              [stls.logoDisabled]: at.promo
            })}
            onClick={() => handleMenu(false)}
            aria-label='Moscow Business Academy'>
            <span className={stls.picture}>
              <IconLogo />
            </span>
            <span>
              <IconLogoTitle />
            </span>
          </a>
        </Link>
        <div className={stls.logos}>
          <span className={stls.rabo}>
            <ImgLogoRabo />
          </span>
          <span className={stls.mde}>
            <ImgLogoMde />
          </span>
        </div>
        <div className={stls.address}>
          <IconLocation />
          {SetString(contactInfo.ru.address.city)},{' '}
          {SetString(contactInfo.ru.address.street)}
        </div>
        <div className={stls.phoneLinks}>
          <a className={stls.phoneLink} href={contactInfo.ru.tels[0].href}>
            <span className={stls.description}>
              {contactInfo.ru.tels[0].description}
            </span>
            <span>{contactInfo.ru.tels[0].val}</span>
          </a>
          <a className={stls.phoneLink} href={contactInfo.ru.tels[1].href}>
            <span className={stls.description}>
              {contactInfo.ru.tels[1].description}
            </span>
            <span>{contactInfo.ru.tels[1].val}</span>
          </a>
          <a href={contactInfo.ru.tels[0].href} className={stls.phoneIcon}>
            <IconMobilePhone large fill={'#000'} />
          </a>
        </div>
        {at.index || at.about || at.contact ? <BtnChangeLang /> : null}
        {!at.promo && (
          <div
            className={cn(stls.burger, {
              [stls.opened]: openMenu
            })}
            onClick={() => handleMenu(!openMenu)}>
            <i className={stls.line} />
            <i className={stls.line} />
            <i className={stls.line} />
          </div>
        )}
      </Wrapper>
    </div>
  )
}

export default HeaderInformation
