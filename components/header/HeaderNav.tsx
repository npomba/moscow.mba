import stls from "@/styles/components/header/HeaderNav.module.sass"
import SetString from "@/helpers/SetString"
import lang from '@/data/translation/header'
import classnames from "classnames"
import Link from "next/link"
import WrapperComponent from "@/components/layout/WrapperComponent"
import getClassNames from "@/helpers/getClassNames"
import useWindowWidth from "@/helpers/useWindowWidth"
import contactData from "@/config/contactData"
import { ImgLogoMde, ImgLogoRabo } from "../images"
import { IconLocation } from "../icons"

import langMenu from '@/data/translation/menu'
import HeaderTabs from "./HeaderTabs"
import { useState } from "react"

const HeaderNav = ({ links, handleMenu, openMenu, classNames = [] }) => {
    const container = getClassNames({ classNames })
    const contactInfo = contactData()
    const widthWindowMobile = useWindowWidth() < 1020

    const [openProgramsMobile, setOpenProgramsMobile] = useState(false)

    return (
        <div className={classnames([stls.container], container)}>
            <button className={classnames(stls.btn, {[stls.visible]: openProgramsMobile})} onClick={() => setOpenProgramsMobile(false)}><span />back</button>
            <WrapperComponent classNames={widthWindowMobile ? [stls.wrapper] : []} row={!widthWindowMobile}>
                <div className={stls.menu}>
                    <div
                        className={classnames(stls.toggle, {
                            [stls.opened]: openMenu
                        })}
                        onClick={() => handleMenu(!openMenu)}
                    >
                        <div className={stls.icon}>
                            <i className={stls.line} />
                            <i className={stls.line} />
                        </div>
                        <span>{SetString(lang.programsBtn)}</span>
                    </div>
                </div>
                <ul className={stls.list}>
                    <>
                        {
                            widthWindowMobile && <HeaderTabsModile open={openProgramsMobile} setOpen={setOpenProgramsMobile} />
                        }
                        {links.map((item, idx) => (
                            <li key={item.val + idx} className={stls.item}>
                                <Link href={item.href} locale={item.locale}>
                                    <a
                                        onClick={() => handleMenu(false)}
                                        className={classnames(stls.link, {
                                            [stls.last]: idx + 1 === links.length,
                                            [stls.active]: item.red
                                        })}>
                                        {item.val}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </>
                </ul>
                {!openProgramsMobile && widthWindowMobile &&
                    <>
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
                    </>
                }
            </WrapperComponent>
        </div>
    )
}

export default HeaderNav


const HeaderTabsModile = ({ open, setOpen }) => {



    const tabs = [
        {
            href: '/programs/mini/online',
            val: 'Mini MBA'
        },
        {
            href: '/programs/mba/online',
            val: 'MBA'
        },
        {
            href: '/programs/profession/online',
            val: SetString(langMenu.professions)
        },
        {
            href: '/programs/mini/online',
            val: SetString(langMenu.allPrograms)
        }
    ]


    return (
        <>
           
                    <li className={stls.item}>
                        <span
                            onClick={() => setOpen(true)}
                            className={stls.link}>
                            programs
                        </span>
                    </li>
                 
                    <ul className={classnames(stls.tabs, {[stls.opened]: open})}>
                        
                        <p className={stls.title}>programs</p>
                        {
                            tabs.map((item, idx) => {
                                return (
                                    <li className={stls.item}>
                                        <span
                                            className={classnames(stls.link, { [stls.last]: idx + 1 === tabs.length })}>
                                            {item.val}
                                        </span>
                                    </li>
                                )
                            })
                        }
                    </ul>
           
        </>
    )
}