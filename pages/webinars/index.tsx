import Webinars from '@/components/pages/Webinars'
import { handleGetStaticProps } from '@/helpers/index'

const webinars = ({ programs }) => {
  return <Webinars title={'Вебинары'} heading={'Вебинары'} />
}

export const getStaticProps = async () => handleGetStaticProps()

export default webinars
