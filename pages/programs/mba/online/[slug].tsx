import { GetStaticProps } from 'next'
import { handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
import { routesFront } from '@/config/index'
import { handleGetStaticPaths } from '@/helpers/index'
import OnlineProgram from '@/components/pages/OnlineProgram'

const PageProgramsMbaOnlineProgram = ({ program, programs }) => {
  usePageHandleContext({ programs })

  return <OnlineProgram program={program} teachers={program?.teachers} />
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({
    page: routesFront.program,
    context,
    type: 'mba',
    format: 'online'
  })

export const getStaticPaths = async () =>
  handleGetStaticPaths({ studyFormat: 'online', type: 'mba' })

export default PageProgramsMbaOnlineProgram
