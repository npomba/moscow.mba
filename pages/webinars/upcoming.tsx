import Webinars from '@/components/pages/Webinars'
import { handleGetStaticProps } from '@/helpers/index'

const pageWebinarsUpcoming = ({ programs }) => {
  return (
    <Webinars
      title={'Ближайшие вебинары'}
      heading={'Ближайшие вебинары'}
      timeframe={'upcoming'}
    />
  )
}

export const getStaticProps = async () => handleGetStaticProps()

export default pageWebinarsUpcoming
