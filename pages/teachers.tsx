import stls from '@/styles/pages/Teachers.module.sass'
import breadcrumbsStls from '@/styles/components/general/Breadcrumbs.module.sass'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import Teachers from '@/components/sections/Teachers'
import { handleGetStaticProps } from '@/helpers/index'

import Breadcrumbs from '@/components/general/Breadcrumbs'
import HandleGetPrograms from '@/helpers/HandleGetPrograms'
import WrapperComponent from '@/components/layout/WrapperComponent'

const PageTeachers = ({ programs, teachers }) => {
  HandleGetPrograms(programs)
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
        <WrapperComponent>
          <Breadcrumbs />
        </WrapperComponent>
      </section>
      <Teachers atStandAlonePage teachers={teachers} />
    </>
  )
}

export const getStaticProps = async () => handleGetStaticProps()

export default PageTeachers
