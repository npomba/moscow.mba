import { dev } from '@/config/index'

const routesBack = {
  root: dev ? 'http://localhost:1337' : 'https://api-moscow-mba.herokuapp.com',
  home: '/',
  programs: '/products',
  programsGetStaticProps: '/products/getStaticProps',
  programsGetStaticPropsProfession: '/products/getStaticProps/profession',
  programsGetStaticPropsPromo: '/products/getStaticProps/promo',
  // programsProgramTypeSlug: '/products/program/:type.slug',
  programsProgram: '/products/program',
  // programsProgramTypeSlug: '/products/paths/:type',
  programsPaths: '/products/paths',
  categories: '/categories'
}

export default routesBack
