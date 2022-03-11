import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { TypePageHomeProps } from '@/types/index'
import { handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
import { routesFront } from '@/config/index'
import Programs from '@/components/pages/Programs'

const PageProgramsCourseOnline = ({ programs }) => {
  usePageHandleContext({ programs })

  const data = programs.filter(
    program =>
      program?.studyFormat === 'online' && program?.category?.type === 'course'
  )

  return (
    <Programs
      programs={data}
      mbaTypeOfProgram={'course'}
      mbaFormat={'online'}
    />
  )
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.programs, context })

export default PageProgramsCourseOnline
