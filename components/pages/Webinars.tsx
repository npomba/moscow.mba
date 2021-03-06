import stls from '@/styles/components/pages/Webinars.module.sass'
import breadcrumbsStls from '@/styles/components/general/Breadcrumbs.module.sass'
import Link from 'next/link'
import cn from 'classnames'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { useAt } from '@/hooks/index'
import { Breadcrumbs } from '@/components/general'
// import { WebinarCards } from '@/components/sections'
import WebinarCards from '@/components/sections/general/WebinarCards'

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
