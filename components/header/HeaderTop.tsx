import stls from '@/styles/components/header/HeaderTop.module.sass'
import { useAt } from '@/helpers/index'
import { useTranslate } from '@/hooks/index'
import { HeaderNav, HeaderInformation } from '@/components/header'

const HeaderTop = ({ handleMenu, openMenu }) => {
  const at = useAt()
  const links = [
    {
      href: '/about',
      val: useTranslate({ en: 'About', def: 'Об академии' }),
      red: at.about
    },
    {
      href: '/teachers',
      val: useTranslate({ en: 'Experts', def: 'Эксперты' }),
      red: at.teachers && !at.teachersTeacher,
      locale: 'ru'
    },
    {
      href: '/webinars',
      val: useTranslate({ en: 'Webinars', def: 'Вебинары' }),
      red: at.webinars,
      locale: 'ru'
    },
    {
      href: '/contact',
      val: useTranslate({ en: 'Contact', def: 'Контакты' }),
      red: at.contact,
      locale: 'ru'
    },
    {
      href: '/legal',
      val: useTranslate({ en: 'Legal', def: 'Сведения об организации' }),
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
