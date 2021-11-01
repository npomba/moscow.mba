import { dev } from '@/config/index'

const routesBack = {
  root: dev ? 'http://localhost:1337' : 'https://api-moscow-mba.herokuapp.com',
  home: '/',
  programs: '/products',
  categories: '/categories'
}

export default routesBack
