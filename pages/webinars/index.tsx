import Webinars from '@/components/pages/Webinars'
import { fetchPrograms, createBlended } from '@/helpers/index'

const webinars = ({ programs }) => {
  return <Webinars title={'Вебинары'} heading={'Вебинары'} />
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

export default webinars
