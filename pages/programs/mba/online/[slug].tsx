import { GetStaticPaths, GetStaticProps } from 'next'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
import { routesFront } from '@/config/index'
import OnlineProgram from '@/components/pages/OnlineProgram'

const PageProgramsMbaOnlineProgram = ({ program, programs }) => {
  usePageHandleContext({ programs })

  return (
    <OnlineProgram program={program && program} teachers={program?.teachers} />
  )
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({
    page: routesFront.program,
    context,
    type: 'mba'
  })

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({
    page: routesFront.program,
    type: 'mba',
    format: 'online'
  })

export default PageProgramsMbaOnlineProgram
