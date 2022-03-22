import stls from '@/styles/components/header/HeaderTop.module.sass'
import { useAt } from '@/hooks/index'
import { HeaderNav, HeaderInformation } from '@/components/header'

const HeaderTop = ({ handleMenu, openMenu }) => {
  const at = useAt()
  const links = [
    {
      href: '/about',
      val: at.en ? 'About' : 'Об академии',
      red: at.about
    },
    {
      href: '/teachers',
      val: at.en ? 'Experts' : 'Эксперты',
      red: at.teachers && !at.teachersTeacher,
      locale: 'ru'
    },
    {
      href: '/webinars',
      val: at.en ? 'Webinars' : 'Вебинары',
      red: at.webinars,
      locale: 'ru'
    },
    {
      href: '/contact',
      val: at.en ? 'Contact' : 'Контакты',
      red: at.contact,
      locale: 'ru'
    },
    {
      href: '/legal',
      val: at.en ? 'Legal' : 'Сведения об организации',
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
