import { useRouter } from 'next/router'

const useAt = () => {
  const { pathname, asPath } = useRouter()

  const getSplitedPath = pathname
    .split('/')
    .filter(item => item !== '' && item !== '[url]')

  const getProgramTitle = asPath.split('/')[4]

  const index = () => {
    return getSplitedPath[0] === undefined
  }

  const about = () => {
    return getSplitedPath[0] === 'about'
  }

  const teachers = () => {
    return getSplitedPath[0] === 'teachers'
  }

  const legal = () => {
    return getSplitedPath[0] === 'legal' && !getSplitedPath[1]
  }

  const promo = () => {
    return getSplitedPath[0] === 'promo'
  }

  const webinars = () => {
    return getSplitedPath[0] === 'webinars'
  }

  const webinarsIndex = () => {
    return getSplitedPath[0] === 'webinars' && !getSplitedPath[1]
  }

  const webinarsUpcoming = () => {
    return getSplitedPath[0] === 'webinars' && getSplitedPath[1] === 'upcoming'
  }

  const webinarsArchive = () => {
    return getSplitedPath[0] === 'webinars' && getSplitedPath[1] === 'archive'
  }

  const articles = () => {
    return getSplitedPath[0] === 'articles'
  }

  const contact = () => {
    return getSplitedPath[0] === 'contact'
  }

  const programs = () => {
    return getSplitedPath[0] === 'programs' && !getSplitedPath[3]
  }

  const mini = () => {
    return getSplitedPath[1] === 'mini'
  }

  const professional = () => {
    return getSplitedPath[1] === 'professional'
  }

  const industry = () => {
    return getSplitedPath[1] === 'industry'
  }

  const profession = () => {
    return getSplitedPath[1] === 'profession'
  }

  const executive = () => {
    return getSplitedPath[1] === 'executive'
  }

  const online = () => {
    return getSplitedPath[2] === 'online'
    // return (
    //   getSplitedPath.filter((pathPart) => pathPart === 'online')[0] === 'online'
    // )
  }

  const blended = () => {
    return getSplitedPath[2] === 'blended'
  }

  const programChunk = () => {
    return getProgramTitle ? true : false
  }

  const onWhichPage = () => {
    const typesOfPages = {
      mini: mini(),
      professional: professional(),
      industry: industry(),
      profession: profession(),
      executive: executive(),
      promo: promo()
    }

    for (const [key, value] of Object.entries(typesOfPages)) {
      if (value) return key
    }
  }

  return {
    index: index(),
    about: about(),
    teachers: teachers(),
    legal: legal(),
    promo: promo(),
    mini: mini(),
    professional: professional(),
    industry: industry(),
    profession: profession(),
    executive: executive(),
    programs: programs(),
    online: online(),
    blended: blended(),
    webinars: webinars(),
    webinarsUpcoming: webinarsUpcoming(),
    webinarsArchive: webinarsArchive(),
    webinarsIndex: webinarsIndex(),
    articles: articles(),
    contact: contact(),
    programChunk: programChunk(),
    getSplitedPath,
    onWhichPage: onWhichPage()
  }
}

export default useAt
