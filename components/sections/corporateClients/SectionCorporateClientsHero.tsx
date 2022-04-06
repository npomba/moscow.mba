import stls from '@/styles/components/sections/corporateClients/SectionCorporateClientsHero.module.sass'
import { MouseEventHandler } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { useAt } from '@/hooks/index'
import {
  Breadcrumbs,
  JumbotronLabel,
  InfoRectangle
} from '@/components/general'
import { PopupForm } from '@/components/popups'
import { Loan, Discount, Until } from '@/components/costs'
import { IconCheckCircleAlt } from '@/components/icons'
import { ImgCorporateClientsBg } from '@/components/images'
import { Wrapper } from '@/components/layout'
import routesFront from '@/config/routesFront'
import { BtnAlpha } from '@/components/btns'

const SectionCorporateClientsHero = () => {
  const at = useAt()

  const title = <>Корпоративное обучение для&nbsp;бизнеса</>

  const pros = [
    {
      title: '100+',
      content: 'Программ MBA и курсов'
    },
    {
      title: '2021',
      content: 'Новейшие программы 2021 года'
    },
    {
      title: '2000+',
      content: 'Студентов по всему миру'
    },
    {
      title: '150+',
      content: 'Международных экспертов'
    }
  ]

  const breadcrumbs = [
    { href: routesFront.home, val: 'Главная' },
    { val: title }
  ]

  return (
    <section className={stls.container}>
      <ImgCorporateClientsBg classNames={[stls.bg]} />
      <Wrapper column classNames={[stls.wrapper]}>
        <ul className={stls.breadcrumbs}>
          {breadcrumbs.map((item, idx) => (
            <li key={`${item.val}-${idx}`} className={stls.breadcrumbItem}>
              {item.href ? (
                <Link href={item.href}>
                  <a className={cn(stls.breadcrumb, stls.breadcrumbLink)}>
                    {item.val}
                  </a>
                </Link>
              ) : (
                <span className={cn(stls.breadcrumb, stls.breadcrumbSpan)}>
                  {item.val}
                </span>
              )}
            </li>
          ))}
        </ul>
        <div className={stls.content}>
          <div className={stls.left}>
            <h1 className={stls.title}>{title}</h1>
            <p className={stls.subtitle}>
              Подберем или разработаем с нуля образовательные программы с учётом
              специфики ниши, целей и&nbsp;задач&nbsp;компании
            </p>

            <Popup
              trigger={() => (
                <BtnAlpha variant='beta' classNames={[stls.btn]}>
                  Оставить заявку
                </BtnAlpha>
              )}
              modal
              lockScroll
              nested
              closeOnDocumentClick>
              {(close: MouseEventHandler) => (
                <PopupForm
                  programId={'50e856d1-4610-491f-80f6-e4061e88d200'}
                  programTitle={title}
                  title={'Получите консультацию'}
                  closePopUpForm={close}
                />
              )}
            </Popup>
          </div>
          <div className={stls.right}>
            <ul className={stls.pros}>
              {pros.map((item, idx) => (
                <li key={`${item.title}-${idx}`} className={stls.pro}>
                  <p className={stls.proTitle}>{item.title}</p>
                  <p className={stls.proContent}>{item.content}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionCorporateClientsHero
