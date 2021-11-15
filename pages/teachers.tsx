import stls from '@/styles/pages/Teachers.module.sass'
import breadcrumbsStls from '@/styles/components/general/Breadcrumbs.module.sass'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import Teachers from '@/components/sections/Teachers'
import { handleGetStaticProps } from '@/helpers/index'

import Breadcrumbs from '@/components/general/Breadcrumbs'

const teachers = ({ programs }) => {
  return (
    <>
      <NextSeo
        title={'Российские и зарубежные эксперты MBA - Moscow Business Academy'}
        description={truncate(
          'Перенимайте уникальный опыт международных экспертов, адаптированный под рынок РФ',
          120
        )}
        canonical={'https://moscow.mba/teachers'}
      />
      <section className={breadcrumbsStls.jumbotronGeneral}>
        <div className={stls.container}>
          <Breadcrumbs />
        </div>
      </section>
      <div className={stls.container}>
        <Teachers atStandAlonePage />
      </div>
    </>
  )
}

export const getStaticProps = async () => handleGetStaticProps()

export default teachers
