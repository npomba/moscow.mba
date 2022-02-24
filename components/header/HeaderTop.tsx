import stls from '@/styles/components/header/HeaderTop.module.sass'
import { SetString, useAt } from '@/helpers/index'
import { HeaderNav, HeaderInformation } from '@/components/header'
import { header } from '@/data/index'

const HeaderTop = ({ handleMenu, openMenu }) => {
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

  return (
    <>
      <HeaderInformation
        classNames={[stls.border]}
        handleMenu={handleMenu}
        openMenu={openMenu}
      />
      <HeaderNav
        links={links}
        classNames={[stls.border]}
        handleMenu={handleMenu}
        openMenu={openMenu}
      />
    </>
  )
}

export default HeaderTop
