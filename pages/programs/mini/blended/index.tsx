import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { TypePageHomeProps } from '@/types/index'
import { handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
import { routesFront } from '@/config/index'
import { Programs } from '@/components/pages'
import { SeoPagesPrograms } from '@/components/seo'

const PageProgramsMiniBlended = ({ programs }) => {
  usePageHandleContext({ programs })

  return (
    <>
      <SeoPagesPrograms />
      <Programs mbaTypeOfProgram={'mini'} mbaFormat={'blended'} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.programs, context })

export default PageProgramsMiniBlended
