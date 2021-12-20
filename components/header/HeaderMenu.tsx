import stls from "@/styles/components/header/HeaderMenu.module.sass"
import SetString from "@/helpers/SetString"
import HeaderPrograms from "./HeaderPrograms"
import HeaderTabs from "./HeaderTabs"
import langMenu from '@/data/translation/menu'
import { useState } from "react"
import HeaderTabsModile from "./HeaderMobileTabs"
import useAt from "@/helpers/useAt"
import lang from '@/data/translation/header'
import useWindowWidth from "@/helpers/useWindowWidth"



const HeaderMenu = ({ programs, handleMenu }) => {
  const widthWindowMobile = useWindowWidth() < 1020

  const at = useAt()
  const links = [
      {
          href: '/about',
          val: SetString(lang.linkAbout),
          red: at.about
      },
      {
          href: '/teachers',
          val: SetString(lang.linkTeachers),
          red: at.teachers,
          locale: 'ru'
      },
      {
          href: '/webinars',
          val: SetString(lang.linkWebinars),
          red: at.webinars,
          locale: 'ru'
      },
      {
          href: '/contact',
          val: SetString(lang.linkContacts),
          red: at.contact,
          locale: 'ru'
      },
      {
          href: '/legal',
          val: SetString(lang.linkLegal),
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
      val: SetString(langMenu.professions)
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
      val: SetString(langMenu.allPrograms)
    }
  ]

  const [visible, setVisible] = useState('')

  const handleMouseEnter = e => {
    setVisible(e.target.dataset.tab)
  }



  return (
    <div className={stls.container}>
      <div className={stls.content}>
        {
          widthWindowMobile ? 
          <HeaderTabsModile tabs={tabs} links={links}/>
          :
          <>
            <HeaderTabs tabs={tabs} handleMouseEnter={handleMouseEnter} handleMenu={handleMenu} visible={visible} />
            <HeaderPrograms programs={programs} visible={visible} />
          </>
        }
      </div>
    </div>
  )
}

export default HeaderMenu