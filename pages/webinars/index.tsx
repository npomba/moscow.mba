import Webinars from '@/components/pages/Webinars'
import HengeleGetPrograms from '@/helpers/hengeleGetPrograms'
import { handleGetStaticProps } from '@/helpers/index'

<<<<<<< HEAD
const webinars = ({ programs }) => {
  HengeleGetPrograms(programs)
=======
const PageWebinars = ({ programs }) => {
>>>>>>> bbab6c952f81983dac0226f26db7aa0eb88a147c
  return <Webinars title={'Вебинары'} heading={'Вебинары'} />
}

export const getStaticProps = async () => handleGetStaticProps()

export default PageWebinars
