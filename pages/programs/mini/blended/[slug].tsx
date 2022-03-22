import { GetStaticPaths, GetStaticProps } from 'next'
import { v4 as uuidv4 } from 'uuid'
import { studyFormats, routesFront } from '@/config/index'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
import BlendedProgram from '@/components/pages/BlendedProgram'

const PageProgramsMiniBlendedProgram = ({ program, programs }) => {
  usePageHandleContext({ programs })

  const id = uuidv4()
  const programBlended =
    (program && {
      ...program,
      studyFormat: studyFormats.blended,
      id,
      _id: id
    }) ||
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
