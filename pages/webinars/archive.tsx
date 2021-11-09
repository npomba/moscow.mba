import Webinars from '@/components/pages/Webinars'
import {
  fetchPrograms,
  createBlended,
  getProgramsReducedData
} from '@/helpers/index'
import { revalidate } from '@/config/index'

const archive = ({ programs }) => {
  return (
    <Webinars
      title={'Прошедшие вебинары'}
      heading={'Прошедшие вебинары'}
      timeframe={'archive'}
    />
  )
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

export default archive
