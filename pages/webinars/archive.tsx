import Webinars from '@/components/pages/Webinars'
import { handleGetStaticProps } from '@/helpers/index'

const pageWebinarsArchive = ({ programs }) => {
  return (
    <Webinars
      title={'Прошедшие вебинары'}
      heading={'Прошедшие вебинары'}
      timeframe={'archive'}
    />
  )
}

export const getStaticProps = async () => handleGetStaticProps()

export default pageWebinarsArchive
