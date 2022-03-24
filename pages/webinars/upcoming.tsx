import { GetStaticProps } from 'next'
import { routesFront } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
import { Webinars } from '@/components/pages'

const PageWebinarsUpcoming = ({ programs }) => {
  usePageHandleContext({ programs })

  return (
    <Webinars
      title={'Ближайшие вебинары'}
      heading={'Ближайшие вебинары'}
      timeframe={'upcoming'}
    />
  )
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.webinarsUpcoming, context })

export default PageWebinarsUpcoming
