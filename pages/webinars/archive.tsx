import Webinars from '@/components/pages/Webinars'
import { handleGetStaticProps, HandleGetPrograms } from '@/helpers/index'

const PageWebinarsArchive = ({ programs }) => {
  HandleGetPrograms(programs)
  return (
    <Webinars
      title={'Прошедшие вебинары'}
      heading={'Прошедшие вебинары'}
      timeframe={'archive'}
    />
  )
}

export const getStaticProps = async () => handleGetStaticProps()

export default PageWebinarsArchive
