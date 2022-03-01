import stls from '@/styles/components/header/HeaderTop.module.sass'
import { SetString, useAt } from '@/helpers/index'
import { HeaderNav, HeaderInformation } from '@/components/header'
import lang from '@/data/translation/header'

const HeaderTop = ({ handleMenu, openMenu }) => {
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
      red: at.teachers && !at.teachersTeacher,
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

  return (
    <>
      <HeaderInformation
        classNames={[stls.border]}
        handleMenu={handleMenu}
        openMenu={openMenu}
      />
      {!at.promo && (
        <HeaderNav
          links={links}
          classNames={[stls.border]}
          handleMenu={handleMenu}
          openMenu={openMenu}
        />
      )}
    </>
  )
}

export default HeaderTop
