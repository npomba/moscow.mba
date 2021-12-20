import stls from "@/styles/components/header/HeaderTabsModile.module.sass"
import SetString from "@/helpers/SetString"
import classnames from "classnames"
import React, { useState } from "react"
import { IconLocation } from "../icons"
import contactData from "@/config/contactData"
import lang from '@/data/translation/header'
import { ImgLogoRabo, ImgLogoMde } from '@/components/images'
import menu from "@/data/translation/menu"
import HeaderPrograms from "./HeaderPrograms"
import langMenu from '@/data/translation/menu'
import WrapperComponent from "../layout/WrapperComponent"


const HeaderTabsModile = ({ tabs, links, handleMouseEnter, visible, programs }) => {
    const [open, setOpen] = useState(false)
    const contactInfo = contactData()
    const [openProg, setOpenProg] = useState(false)
    const handle = (e) => {
        handleMouseEnter(e)
        setOpenProg(true)
    }

    return (
        <div className={stls.container}>
            <div className={stls.content}>
                <WrapperComponent classNames={[stls.wrapper]}>
                        <ul className={stls.links}>
                            <span
                                onClick={() => setOpen(true)}
                                className={classnames(stls.link, stls.bold)}>
                                {SetString(lang.programsBtn)}
                            </span>
                            {
                                links.map((item, idx) => {
                                    return (
                                        <span
                                            className={classnames(stls.link, { [stls.last]: idx === tabs.length })}>
                                            {item.val}
                                        </span>
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
            <div className={classnames(stls.content, stls.menuPrograms, { [stls.opened]: open })}>
                <button
                    className={stls.btn}
                    onClick={() => setOpen(false)}>
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
                                return (
                                    <span
                                        className={classnames(stls.link, { [stls.last]: idx + 1 === tabs.length })}
                                        data-tab={item.val !== SetString(langMenu.allPrograms) && `#header-podmenu-${idx + 1}`}
                                        onClick={e => handle(e)}
                                    >
                                        {item.val}
                                    </span>
                                )
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
                        {SetString(menu.backBtn)}
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
                        {SetString(menu.backBtn)}
                    </WrapperComponent>
                </button>
            </div>
        </div>
    )
}

export default HeaderTabsModile