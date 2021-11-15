import { dev } from '@/config/index'

const routesFront = {
  root: dev ? 'http://localhost:3000' : 'https://moscow.mba',
  home: '/',
  about: '/about',
  teachers: '/teachers',
  contact: '/contact',
  legal: '/legal',
  payment: '/payment',
  promo: '/promo',
  webinars: '/webinars',
  webinarsArchive: '/webinars/archive',
  webinarsUpcoming: '/webinars/upcoming',
  programsExecutive: '/programs/executive',
  programsInternationalBusinessLaw: '/programs/international-business-law',
  programsMba: '/programs/mba',
  programsMini: '/programs/mini',
  programsProfession: '/programs/profession',
  programsMbaOnline: '/programs/mba/online',
  programsMbaBlended: '/programs/mba/blended',
  programsMiniOnline: '/programs/mini/online',
  programsMiniBlended: '/programs/mini/blended',
  programsProfessionOnline: '/programs/profession/online'
}

export default routesFront
