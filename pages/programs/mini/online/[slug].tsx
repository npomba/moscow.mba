import { GetStaticPaths, GetStaticProps } from 'next'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
import { routesFront } from '@/config/index'
import OnlineProgram from '@/components/pages/OnlineProgram'

const PageProgramsMiniOnlineProgram = ({ program, programs }) => {
  usePageHandleContext({ programs })

  if (!program) return null

  return <OnlineProgram program={program} teachers={program.teachers} />
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({
    page: routesFront.program,
    context,
    type: 'mini'
  })

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({
    page: routesFront.program,
    type: 'mini',
    format: 'online'
  })

export default PageProgramsMiniOnlineProgram
