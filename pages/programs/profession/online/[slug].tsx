import { GetStaticPaths, GetStaticProps } from 'next'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
import { routesFront } from '@/config/index'
import ProfessionOnlineProgram from '@/components/pages/ProfessionOnlineProgram'

const PageProgramsProfessionOnlineProgram = ({ program, programs }) => {
  usePageHandleContext({ programs })

  if (program)
    return (
      <ProfessionOnlineProgram program={program} teachers={program.teachers} />
    )
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({
    page: routesFront.program,
    context,
    type: 'profession'
  })

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({
    page: routesFront.program,
    type: 'profession',
    format: 'online'
  })

export default PageProgramsProfessionOnlineProgram
