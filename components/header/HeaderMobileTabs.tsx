import stls from '@/styles/components/header/HeaderMobileTabs.module.sass'
import React, { useState } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import { SetString } from '@/helpers/index'
import { contactData } from '@/config/index'
import { IconLocation } from '@/components/icons'
import { ImgLogoRabo, ImgLogoMde } from '@/components/images'
import menu from '@/data/translation/menu'
import lang from '@/data/translation/header'
import { HeaderPrograms } from '@/components/header'
import { Wrapper } from '@/components/layout'

// TODO: whole component should be devided into multiple components. Each component would be a step in mobile menu.
const HeaderMobileTabs = ({
  tabs,
  links,
  handleMouseEnter,
  visible,
  programs,
  handleMenu
}) => {
  const contactInfo = contactData()
  const [openMenu, setOpenMenu] = useState(false)
  const [openProg, setOpenProg] = useState(false)
  const clickHandle = e => {
    handleMouseEnter(e)
    setOpenProg(true)
  }

  return (
    <div className={stls.container}>
      <div className={stls.content}>
        <Wrapper classNames={[stls.wrapper]}>
          <ul className={stls.links}>
            {/* TODO: onClick should be on the button, not on li */}
            <li
              onClick={() => setOpenMenu(true)}
              className={cn(stls.link, stls.bold)}>
              {SetString(lang.programsBtn)}
            </li>
            {links.map((item, idx) => (
              <Link href={item.href} key={item.href + idx}>
                <a
                  className={cn(stls.link, {
                    [stls.last]: idx === tabs.length
                  })}
                  onClick={() => handleMenu(false)}>
                  {item.val}
                </a>
              </Link>
            ))}
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
        </Wrapper>
      </div>
      <div
        className={cn(stls.content, stls.menuPrograms, {
          [stls.opened]: openMenu
        })}>
        <button className={stls.btn} onClick={() => setOpenMenu(false)}>
          <Wrapper classNames={[stls.wrapperTitle]}>
            <span />
            {SetString(menu.backBtn)}
          </Wrapper>
        </button>
        <ul className={cn(stls.menu, stls.programs)}>
          <Wrapper classNames={[stls.wrapper]}>
            <p className={stls.title}>{SetString(lang.programsBtn)}</p>
            {tabs.map((item, idx) => {
              if (idx + 1 === tabs.length) {
                return (
                  <Link href={item.href} key={item.href + idx}>
                    <a
                      className={cn(stls.link, stls.last)}
                      onClick={() => handleMenu(false)}>
                      {item.val}
                    </a>
                  </Link>
                )
              } else {
                return (
                  <span
                    key={item.href + idx}
                    className={stls.link}
                    data-tab={`#header-podmenu-${idx + 1}`}
                    onClick={e => clickHandle(e)}>
                    {item.val}
                  </span>
                )
              }
            })}
          </Wrapper>
        </ul>
      </div>
      <div
        className={cn(stls.content, stls.programslist, {
          [stls.opened]: openProg
        })}>
        <button className={stls.btn} onClick={() => setOpenProg(false)}>
          <Wrapper classNames={[stls.wrapperTitle]}>
            <span />
            {SetString(menu.toProgramsBtn)}
          </Wrapper>
        </button>
        <Wrapper>
          <HeaderPrograms programs={programs} visible={visible} />
        </Wrapper>
        <button
          className={cn(stls.btn, stls.bottom)}
          onClick={() => setOpenProg(false)}>
          <Wrapper classNames={[stls.wrapperTitle]}>
            <span />
            {SetString(menu.toProgramsBtn)}
          </Wrapper>
        </button>
      </div>
    </div>
  )
}

export default HeaderMobileTabs
