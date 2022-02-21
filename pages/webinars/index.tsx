import Webinars from '@/components/pages/Webinars'
import { HandleGetPrograms, handleGetStaticProps } from '@/helpers/index'

const PageWebinars = ({ programs }) => {
  HandleGetPrograms(programs)
  return <Webinars title={'Вебинары'} heading={'Вебинары'} />
}

export const getStaticProps = async () => handleGetStaticProps()

export default PageWebinars
