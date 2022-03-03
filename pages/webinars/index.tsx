import { GetStaticProps } from 'next'
import Webinars from '@/components/pages/Webinars'
import { routesFront } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'

const PageWebinars = ({ programs }) => {
  usePageHandleContext({ programs })

  return <Webinars title={'Вебинары'} heading={'Вебинары'} />
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.webinars, context })

export default PageWebinars
