import Webinars from '@/components/pages/Webinars'
import {
  fetchPrograms,
  createBlended,
  getProgramsReducedData
} from '@/helpers/index'
import { revalidate } from '@/config/index'

const webinars = ({ programs }) => {
  return <Webinars title={'Вебинары'} heading={'Вебинары'} />
}

export async function getStaticProps() {
  const programs = await fetchPrograms()
  const programsReducedData = getProgramsReducedData({
    programs,
    data: [
      'id',
      'title',
      'slug',
      'category.slug',
      'category.type',
      'studyFormat'
    ]
  })
  const programsWithBlended = createBlended(programsReducedData)

  return {
    props: {
      programs: programsWithBlended
    },
    revalidate: revalidate.default
  }
}

export default webinars
