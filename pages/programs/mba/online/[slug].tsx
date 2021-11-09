import {
  fetchPrograms,
  createBlended,
  getProgramsReducedData,
  getProgram,
  getPaths
} from '@/helpers/index'
import { revalidate } from '@/config/index'

import OnlineProgram from '@/components/pages/OnlineProgram'

const programsMbaOnlineProgram = ({ program, programs }) => {
  return <OnlineProgram program={program} />
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
    studyFormat: 'online',
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
  const paths = getPaths({
    programs: programs,
    studyFormat: 'online',
    type: 'mba'
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export default programsMbaOnlineProgram
