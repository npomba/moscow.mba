import stls from '@/styles/components/pages/Webinars.module.sass'
import Link from 'next/link'
import cn from 'classnames'
import breadcrumbsStls from '@/styles/components/general/Breadcrumbs.module.sass'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import WebinarCards from '@/components/sections/WebinarCards'
import { useAt } from '@/helpers/index'
import { Breadcrumbs } from '@/components/general'

const Webinars = ({ title, heading, timeframe = 'all' }) => {
  const at = useAt()

  const webinarsLinks = [
    {
      title: 'Все вебинары',
      ref: '/webinars',
      isActive: at.webinarsIndex
    },
    {
      title: 'Ближайшие вебинары',
      ref: '/webinars/upcoming',
      isActive: at.webinarsUpcoming
    },
    {
      title: 'Прошедшие вебинары',
      ref: '/webinars/archive',
      isActive: at.webinarsArchive
    }
  ]

  return (
    <>
      <NextSeo
        title={`${title} MBA - Moscow Business Academy`}
        description={truncate('Узнайте даты и время вебинаров MBA', 120)}
        canonical={'https://moscow.mba/webinars'}
      />
      <section className={breadcrumbsStls.jumbotronGeneral}>
        <div className={stls.generalContainer}>
          <Breadcrumbs />
        </div>
      </section>
      <div className={stls.generalContainer}>
        <section className={stls.container}>
          <h1 className={stls.title}>{heading}</h1>
          {/*<ul className={stls.list}>*/}
          {/*  {webinarsLinks.map((link, idx) => (*/}
          {/*    <li key={idx + link.ref} className={stls.listItem}>*/}
          {/*      <Link href={link.ref} locale='ru'>*/}
          {/*        <a*/}
          {/*          className={cn(stls.link, {*/}
          {/*            [stls.active]: link.isActive*/}
          {/*          })}>*/}
          {/*          {link.title}*/}
          {/*        </a>*/}
          {/*      </Link>*/}
          {/*    </li>*/}
          {/*  ))}*/}
          {/*</ul>*/}
          <WebinarCards timeframe={timeframe} />
        </section>
      </div>
    </>
  )
}

export default Webinars
