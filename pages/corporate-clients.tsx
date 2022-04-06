import stls from '@/styles/pages/PageCorporateClients.module.sass'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { TypePageHomeProps } from '@/types/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront, companyName } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext, useAt } from '@/hooks/index'
import {
  CorporateClients,
  Diploma,
  Qna,
  SectionCorporateClientsHero
} from '@/components/sections'

const PageCorporateClients: NextPage<TypePageHomeProps> = ({ programs }) => {
  usePageHandleContext({ programs })

  const at = useAt()

  const programId = '50e856d1-4610-491f-80f6-e4061e88d200'

  return (
    <>
      <NextSeo
        title={
          at.en
            ? companyName
            : `Корпоративное обучение
        для бизнеса | ${companyName}`
        }
        description={truncate(
          at.en
            ? ''
            : 'Подберем или разработаем с нуля образовательные программы с учётом специфики ниши, целей и задач компании',
          120
        )}
        canonical={routesFront.corporateClients}
      />
      <SectionCorporateClientsHero programId={programId} />
      <Diploma />
      <CorporateClients />
      <Qna
        programId={programId}
        programTitle={'Корпоративное обучение для бизнеса'}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.home, context })

export default PageCorporateClients
