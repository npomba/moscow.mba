import stls from '@/styles/components/header/HeaderInformation.module.sass'
import Link from 'next/link'
import cn from 'classnames'
import { contactData, companyName } from '@/config/index'
import { useAt, getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { BtnChangeLang } from '@/components/btns'
import { ImgLogoRabo, ImgLogoMde } from '@/components/images'
import {
  IconLocation,
  IconLogo,
  IconLogoTitle,
  IconMobilePhone
} from '@/components/icons'

const HeaderInformation = ({ classNames = [], handleMenu, openMenu }) => {
  const at = useAt()
  const contactInfo = contactData()

  return (
    <div
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <Link href='/'>
          <a
            className={cn(stls.logo, {
              [stls.logoDisabled]: at.promo
            })}
            onClick={() => handleMenu(false)}
            aria-label={companyName}>
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
          {contactInfo.ru.address.city}, {contactInfo.ru.address.street}
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
