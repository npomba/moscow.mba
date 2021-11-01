import { dev } from '@/config/index'

const routesFront = {
  root: dev ? 'http://localhost:3000' : 'https://moscow.mba',
  home: '/',
  about: '/about',
  teachers: '/teachers',
  contact: '/contact',
  legal: '/legal',
  payment: '/payment',
  promo: '/promo'
}

export default routesFront
