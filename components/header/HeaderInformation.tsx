import stls from '@/styles/components/header/HeaderInformation.module.sass'
import SetString from "@/helpers/SetString"
import Link from "next/link"
import {
    IconLocation,
    IconLogo,
    IconLogoTitle,
    IconMobilePhone
} from '@/components/icons'
import { ImgLogoRabo, ImgLogoMde } from '@/components/images'
import useAt from '@/helpers/useAt'
import { BtnChangeLang } from '@/components/btns'
import classNames from 'classnames'
import contactData from '@/config/contactData'
import WrapperComponent from '@/components/layout/WrapperComponent'



import React, { useState } from "react"



const HeaderInformation = () => {
    const contactInfo = contactData()
    const at = useAt()


    ///////
    const [open, setOpen] = useState(false)
    const toggleMenu = () => {
        setOpen(!open)
    }

    return (
        <div className={stls.container}>
            <WrapperComponent>
                <Link href='/'>
                    <a
                        className={classNames(stls.logo, {
                            [stls.logoDisabled]: at.promo
                        })}
                        // onClick={e => handleMenuClose(e)}
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
                <BtnChangeLang />
                {!at.promo && (
                    <div
                        className={classNames(stls.burger, {
                            [stls.opened]: open
                        })}
                        onClick={toggleMenu}
                    >
                        <i className={stls.line} />
                        <i className={stls.line} />
                        <i className={stls.line} />
                    </div>
                )}
            </WrapperComponent>
        </div>

    )
}

export default HeaderInformation