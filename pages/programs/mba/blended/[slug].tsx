import { GetStaticPaths, GetStaticProps } from 'next'
import { v4 as uuidv4 } from 'uuid'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { studyFormats, routesFront } from '@/config/index'
import { usePageHandleContext } from '@/hooks/index'
import { BlendedProgram } from '@/components/pages'

const PageProgramsMbaBlendedProgram = ({ program, programs }) => {
  usePageHandleContext({ programs, program })

  return <BlendedProgram program={program} teachers={program?.teachers} />
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({
    page: routesFront.program,
    context,
    type: 'mba',
    format: 'blended'
  })

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({
    page: routesFront.program,
    type: 'mba',
    format: 'blended'
  })

export default PageProgramsMbaBlendedProgram
