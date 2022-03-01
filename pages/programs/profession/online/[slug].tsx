import { GetStaticProps } from 'next'
import { handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
import { routesFront } from '@/config/index'
import { handleGetStaticPaths } from '@/helpers/index'
import ProfessionOnlineProgram from '@/components/pages/ProfessionOnlineProgram'

const PageProgramsProfessionOnlineProgram = ({ program, programs }) => {
  usePageHandleContext({ programs })

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

export const getStaticPaths = async () =>
  handleGetStaticPaths({ studyFormat: 'online', type: 'profession' })

export default PageProgramsProfessionOnlineProgram
