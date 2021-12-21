import stls from "@/styles/components/header/HeaderTabsModile.module.sass"
import Link from "next/link"
import SetString from "@/helpers/SetString"
import classnames from "classnames"
import React, { useState } from "react"
import { IconLocation } from "@/components/icons"
import contactData from "@/config/contactData"
import lang from '@/data/translation/header'
import { ImgLogoRabo, ImgLogoMde } from '@/components/images'
import menu from "@/data/translation/menu"
import HeaderPrograms from "@/components/header/HeaderPrograms"
import WrapperComponent from "@/components/layout/WrapperComponent"


const HeaderTabsModile = ({ tabs, links, handleMouseEnter, visible, programs, handleMenu }) => {
    const contactInfo = contactData()
    const [openMenu, setOpenMenu] = useState(false)
    const [openProg, setOpenProg] = useState(false)
    const clickHandle = (e) => {
        handleMouseEnter(e)
        setOpenProg(true)
    }

    return (
        <div className={stls.container}>
            <div className={stls.content}>
                <WrapperComponent classNames={[stls.wrapper]}>
                    <ul className={stls.links}>
                        <li
                            onClick={() => setOpenMenu(true)}
                            className={classnames(stls.link, stls.bold)}>
                            {SetString(lang.programsBtn)}
                        </li>
                        {
                            links.map((item, idx) => {
                                return (
                                    <Link href={item.href}>
                                        <a
                                            className={classnames(stls.link, { [stls.last]: idx === tabs.length })}
                                            onClick={() => handleMenu(false)}>
                                            {item.val}
                                        </a>
                                    </Link>
                                )
                            })
                        }
                    </ul>
                    <div>
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
                    </div>
                </WrapperComponent>
            </div>
            <div className={classnames(stls.content, stls.menuPrograms, { [stls.opened]: openMenu })}>
                <button
                    className={stls.btn}
                    onClick={() => setOpenMenu(false)}>
                    <WrapperComponent classNames={[stls.wrapperTitle]}>
                        <span />
                        {SetString(menu.backBtn)}
                    </WrapperComponent>
                </button>
                <ul className={classnames(stls.menu, stls.programs)}>
                    <WrapperComponent classNames={[stls.wrapper]}>
                        <p className={stls.title}>{SetString(lang.programsBtn)}</p>
                        {
                            tabs.map((item, idx) => {
                                if (idx + 1 === tabs.length) {
                                    return <Link href={item.href}>
                                        <a className={classnames(stls.link, stls.last)}
                                        onClick={() => handleMenu(false)}
                                        >
                                        {item.val}
                                        </a>
                                    </Link>
                                } else {
                                    return (
                                        <span
                                            className={stls.link}
                                            data-tab={`#header-podmenu-${idx + 1}`}
                                            onClick={e => clickHandle(e)}
                                        >
                                            {item.val}
                                        </span>
                                    )
                                }
                               
                            })
                        }
                    </WrapperComponent>
                </ul>
            </div>
            <div className={classnames(stls.content, stls.programslist, { [stls.opened]: openProg })}>
                <button
                    className={stls.btn}
                    onClick={() => setOpenProg(false)}>
                    <WrapperComponent classNames={[stls.wrapperTitle]}>
                        <span />
                        {SetString(menu.toProgramsBtn)}
                    </WrapperComponent>
                </button>
                <WrapperComponent>
                    <HeaderPrograms programs={programs} visible={visible} />
                </WrapperComponent>
                <button
                    className={classnames(stls.btn, stls.bottom)}
                    onClick={() => setOpenProg(false)}>
                    <WrapperComponent classNames={[stls.wrapperTitle]}>
                        <span />
                        {SetString(menu.toProgramsBtn)}
                    </WrapperComponent>
                </button>
            </div>
        </div>
    )
}

export default HeaderTabsModile