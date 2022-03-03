import { GetStaticPaths, GetStaticProps } from 'next'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
import { routesFront } from '@/config/index'
import BlendedProgram from '@/components/pages/BlendedProgram'

const PageProgramsMiniBlendedProgram = ({ program, programs }) => {
  usePageHandleContext({ programs })

  return <BlendedProgram program={program} teachers={program?.teachers} />
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({
    page: routesFront.program,
    context,
    type: 'mini',
    format: 'blended'
  })

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({
    page: routesFront.program,
    type: 'mini',
    format: 'blended'
  })

export default PageProgramsMiniBlendedProgram
