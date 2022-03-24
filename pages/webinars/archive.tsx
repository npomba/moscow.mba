import { GetStaticProps } from 'next'
import { routesFront } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
import { Webinars } from '@/components/pages'

const PageWebinarsArchive = ({ programs }) => {
  usePageHandleContext({ programs })
  return (
    <Webinars
      title={'Прошедшие вебинары'}
      heading={'Прошедшие вебинары'}
      timeframe={'archive'}
    />
  )
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.webinarsArchive, context })

export default PageWebinarsArchive
