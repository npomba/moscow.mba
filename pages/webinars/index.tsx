import Webinars from '@/components/pages/Webinars'
import { handleGetStaticProps } from '@/helpers/index'

const PageWebinars = ({ programs }) => {
  return <Webinars title={'Вебинары'} heading={'Вебинары'} />
}

export const getStaticProps = async () => handleGetStaticProps()

export default PageWebinars
