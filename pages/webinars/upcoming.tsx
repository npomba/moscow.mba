import Webinars from '@/components/pages/Webinars'
import { fetchPrograms, createBlended } from '@/helpers/index'

const upcoming = ({ programs }) => {
  return (
    <Webinars
      title={'Ближайшие вебинары'}
      heading={'Ближайшие вебинары'}
      timeframe={'upcoming'}
    />
  )
}

export async function getStaticProps() {
  const programs = await fetchPrograms()
  const programsWithBlended = createBlended(programs)

  return {
    props: {
      programs: programsWithBlended
    }
  }
}

export default upcoming
