import stls from '@/styles/components/header/HeaderMenu.module.sass'
import { SetString, useAt, useWindowWidth } from '@/helpers/index'
import HeaderPrograms from './HeaderPrograms'
import HeaderTabs from './HeaderTabs'
import React, { useState } from 'react'
import HeaderMobileTabs from './HeaderMobileTabs'
import { menu, header } from '@/data/index'

const HeaderMenu = ({ programs, handleMenu }) => {
  // TODO: this should be avoided and replaced with native css solution (media queries and display nones) because event listener on resize unnecessary slows apps perfomance, expecially on less powerful cpus. It will be ok for screen readers & robots. Screen readers don't read markup with display none. Robots are used to reading repeated content for mobile & desktop menus as long as semantics are good, so it won't effect seo
  // TODO: useWindowWidth should be removed
  const widthWindowMobile = useWindowWidth() < 1020

  const at = useAt()
  const links = [
    {
      href: '/about',
      val: SetString(header.linkAbout),
      red: at.about
    },
    {
      href: '/teachers',
      val: SetString(header.linkTeachers),
      red: at.teachers,
      locale: 'ru'
    },
    {
      href: '/webinars',
      val: SetString(header.linkWebinars),
      red: at.webinars,
      locale: 'ru'
    },
    {
      href: '/contact',
      val: SetString(header.linkContacts),
      red: at.contact,
      locale: 'ru'
    },
    {
      href: '/legal',
      val: SetString(header.linkLegal),
      red: at.legal,
      locale: 'ru'
    }
  ]

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
      val: SetString(menu.professions)
    },
    // {
    //   href: '/programs/course/online',
    //   val: SetString(langMenu.courses)
    // },
    // {
    //   href: '/programs/international-business-law',
    //   val: SetString(langMenu.internationalBusinessLaw)
    // },
    {
      href: '/programs/mini/online',
      val: SetString(menu.allPrograms)
    }
  ]

  const [visible, setVisible] = useState('')
  const handleMouseEnter = e => setVisible(e.target.dataset.tab)

  return (
    <div className={stls.container}>
      <div className={stls.content}>
        {widthWindowMobile ? (
          <HeaderMobileTabs
            tabs={tabs}
            links={links}
            programs={programs}
            handleMenu={handleMenu}
            handleMouseEnter={handleMouseEnter}
            visible={visible}
          />
        ) : (
          <>
            <HeaderTabs
              tabs={tabs}
              handleMouseEnter={handleMouseEnter}
              handleMenu={handleMenu}
              visible={visible}
            />
            <HeaderPrograms programs={programs} visible={visible} />
          </>
        )}
      </div>
    </div>
  )
}

export default HeaderMenu
