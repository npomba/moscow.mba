import { dev } from '@/config/index'

const routesBack = {
  home: dev ? 'http://localhost:1337' : 'https://api-moscow-mba.herokuapp.com',
  programs: '/products',
  categories: '/categories'
}

export default routesBack
