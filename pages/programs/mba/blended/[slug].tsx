import {
  fetchPrograms,
  createBlended,
  getProgramsReducedData,
  getProgram,
  getPaths
} from '@/helpers/index'
import { revalidate } from '@/config/index'

import BlendedProgram from '@/components/pages/BlendedProgram'

const programsMbaBlendedProgram = ({ program, programs }) => {
  return <BlendedProgram program={program} />
}

export const getStaticProps = async context => {
  const programs = await fetchPrograms()
  const programsWithBlended = createBlended(programs)
  const programsReducedData = getProgramsReducedData({
    programs: programsWithBlended,
    data: [
      'id',
      'title',
      'slug',
      'category.slug',
      'category.type',
      'studyFormat'
    ]
  })

  const program = getProgram({
    programs: programsWithBlended,
    slug: context.params.slug,
    studyFormat: 'blended',
    type: 'mba'
  })

  return {
    props: {
      program,
      programs: programsReducedData
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
    type: 'mba'
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export default programsMbaBlendedProgram
