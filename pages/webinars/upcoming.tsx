import Webinars from '@/components/pages/Webinars'
import { handleGetStaticProps } from '@/helpers/index'
import HandleGetPrograms from '@/helpers/HandleGetPrograms'

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
