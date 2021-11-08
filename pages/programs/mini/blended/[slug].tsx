import {
  fetchPrograms,
  createBlended,
  getProgram,
  getPaths
} from '@/helpers/index'
import { revalidate } from '@/config/index'

import BlendedProgram from '@/components/pages/BlendedProgram'

const programsMiniBlendedProgram = ({ program, programs }) => {
  return <BlendedProgram program={program} />
}

export const getStaticProps = async context => {
  const programs = await fetchPrograms()
  const programsWithBlended = createBlended(programs)
  const program = getProgram({
    programs: programsWithBlended,
    slug: context.params.slug,
    studyFormat: 'blended',
    type: 'mini'
  })

  return {
    props: {
      program,
      programs: programsWithBlended
    },
    revalidate: revalidate.default
  }
}

export const getStaticPaths = async () => {
  const programs = await fetchPrograms()
  const programsWithBlended = createBlended(programs)
  const paths = getPaths({
    programs: programsWithBlended,
    studyFormat: 'blended',
    type: 'mini'
  })

  return {
    paths,
    fallback: false
  }
}

export default programsMiniBlendedProgram
