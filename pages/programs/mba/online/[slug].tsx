import {
  fetchPrograms,
  createBlended,
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
  const program = getProgram({
    programs: programsWithBlended,
    slug: context.params.slug,
    studyFormat: 'online',
    type: 'mba'
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
    studyFormat: 'online',
    type: 'mba'
  })

  return {
    paths,
    fallback: false
  }
}

export default programsMbaOnlineProgram
