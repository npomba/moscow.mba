import { useRouter } from 'next/router'

const useAt = () => {
  const { pathname, asPath, locale } = useRouter()

  const getSplitedPath = pathname
    .split('/')
    .filter(item => item !== '' && item !== '[url]')

  const getProgramTitle = asPath.split('/')[4]

  return {
    index: getSplitedPath[0] === undefined,
    about: getSplitedPath[0] === 'about',
    corporateClients: getSplitedPath[0] === 'corporate-clients',
    teachers: getSplitedPath[0] === 'teachers',
    teachersTeacher:
      getSplitedPath[0] === 'teachers' && (!!getSplitedPath?.[1] || false),
    legal: getSplitedPath[0] === 'legal' && !getSplitedPath[1],
    promo: getSplitedPath[0] === 'promo',
    mini: getSplitedPath[1] === 'mini',
    mba: getSplitedPath[1] === 'mba',
    course: getSplitedPath[1] === 'course',
    profession: getSplitedPath[1] === 'profession',
    executive: getSplitedPath[1] === 'executive',
    programs: getSplitedPath[0] === 'programs' && !getSplitedPath[3],
    online: getSplitedPath[2] === 'online',
    blended: getSplitedPath[2] === 'blended',
    webinars: getSplitedPath[0] === 'webinars',
    webinarsUpcoming:
      getSplitedPath[0] === 'webinars' && getSplitedPath[1] === 'upcoming',
    webinarsArchive:
      getSplitedPath[0] === 'webinars' && getSplitedPath[1] === 'archive',
    webinarsIndex: getSplitedPath[0] === 'webinars' && !getSplitedPath[1],
    articles: getSplitedPath[0] === 'articles',
    contact: getSplitedPath[0] === 'contact',
    mbl: getSplitedPath[1] === 'international-business-law',
    ru: locale === 'ru',
    en: locale === 'en-US',
    kz: locale === 'kz',
    programChunk: !!getProgramTitle,
    getSplitedPath
  }
}

export default useAt
