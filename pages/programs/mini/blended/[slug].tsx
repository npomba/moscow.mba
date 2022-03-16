import { GetStaticPaths, GetStaticProps } from 'next'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
import { routesFront } from '@/config/index'
import { createBlended } from '@/helpers/index'
import BlendedProgram from '@/components/pages/BlendedProgram'

const PageProgramsMiniBlendedProgram = ({ program, programs }) => {
  usePageHandleContext({ programs })

  const programBlended =
    (program &&
      createBlended([program])?.filter(
        program => program?.studyFormat === 'blended'
      )?.[0]) ||
    null

  return (
    <BlendedProgram
      program={programBlended}
      teachers={programBlended?.teachers}
    />
  )
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
    format: 'blended'
  })

export default PageProgramsMiniBlendedProgram
