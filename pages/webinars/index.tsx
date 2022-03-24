import { GetStaticProps } from 'next'
import { routesFront } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
import { Webinars } from '@/components/pages'

const PageWebinars = ({ programs }) => {
  usePageHandleContext({ programs })

  return <Webinars title={'Вебинары'} heading={'Вебинары'} />
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.webinars, context })

export default PageWebinars
