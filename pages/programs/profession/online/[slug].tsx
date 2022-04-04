import { GetStaticPaths, GetStaticProps } from 'next'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
import { routesFront } from '@/config/index'
import { ProfessionOnlineProgram } from '@/components/pages'

const PageProgramsProfessionOnlineProgram = ({ program, programs }) => {
  usePageHandleContext({ programs, program })

  return (
    <ProfessionOnlineProgram program={program} teachers={program?.teachers} />
  )
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({
    page: routesFront.program,
    context,
    type: 'profession',
    format: 'online'
  })

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({
    page: routesFront.program,
    type: 'profession',
    format: 'online'
  })

export default PageProgramsProfessionOnlineProgram
