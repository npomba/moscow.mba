import Webinars from '@/components/pages/Webinars'
import HengeleGetPrograms from '@/helpers/hengeleGetPrograms'
import { handleGetStaticProps } from '@/helpers/index'

const webinars = ({ programs }) => {
  HengeleGetPrograms(programs)
  return <Webinars title={'Вебинары'} heading={'Вебинары'} />
}

export const getStaticProps = async () => handleGetStaticProps()

export default webinars
