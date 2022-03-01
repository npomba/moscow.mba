import { GetStaticProps } from 'next'
import { handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
import { routesFront } from '@/config/index'
import { handleGetStaticPaths } from '@/helpers/index'
import BlendedProgram from '@/components/pages/BlendedProgram'

const PageProgramsMbaBlendedProgram = ({ program, programs }) => {
  usePageHandleContext({ programs })

  return <BlendedProgram program={program} teachers={program?.teachers} />
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({
    page: routesFront.program,
    context,
    type: 'mba',
    format: 'blended'
  })

export const getStaticPaths = async () =>
  handleGetStaticPaths({ studyFormat: 'blended', type: 'mba' })

export default PageProgramsMbaBlendedProgram
