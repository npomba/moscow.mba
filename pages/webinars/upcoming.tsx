import Webinars from '@/components/pages/Webinars'
import { HandleGetPrograms, handleGetStaticProps } from '@/helpers/index'

const PageWebinarsUpcoming = ({ programs }) => {
  HandleGetPrograms(programs)

  return (
    <Webinars
      title={'Ближайшие вебинары'}
      heading={'Ближайшие вебинары'}
      timeframe={'upcoming'}
    />
  )
}

export const getStaticProps = async () => handleGetStaticProps()

export default PageWebinarsUpcoming
