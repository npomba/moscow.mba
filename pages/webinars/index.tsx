import Webinars from '@/components/pages/Webinars'
import { fetchPrograms, createBlended } from '@/helpers/index'
import { revalidate } from '@/config/index'

const webinars = ({ programs }) => {
  return <Webinars title={'Вебинары'} heading={'Вебинары'} />
}

export async function getStaticProps() {
  const programs = await fetchPrograms()
  const programsWithBlended = createBlended(programs)

  return {
    props: {
      programs: programsWithBlended
    },
    revalidate: revalidate.default
  }
}

export default webinars
