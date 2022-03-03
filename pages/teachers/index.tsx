import stls from '@/styles/pages/teachers/PageTeachers.module.sass'
import breadcrumbsStls from '@/styles/components/general/Breadcrumbs.module.sass'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import Teachers from '@/components/sections/Teachers'
import { handleGetStaticProps } from '@/lib/index'
import { routesFront } from '@/config/index'
import { usePageHandleContext } from '@/hooks/index'
import { Breadcrumbs } from '@/components/general'
import { Wrapper } from '@/components/layout'

const PageTeachers = ({ programs, teachers }) => {
  usePageHandleContext({ programs })
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
        <Wrapper>
          <Breadcrumbs />
        </Wrapper>
      </section>
      <Teachers atStandAlonePage teachers={teachers} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.teachers, context })

export default PageTeachers
