import { apiProgramsReqUrl, backendUrl } from '@/config/index'

import OnlineProgram from '@/components/pages/OnlineProgram'

const programsIndustryOnlineProgram = ({ program, programs }) => {
  return <OnlineProgram program={program} />
}

export const getStaticProps = async context => {
  const res = await fetch(`${backendUrl}${apiProgramsReqUrl}`)
  const { data } = await res.json()

  const programsFiltered = data.filter(
    item =>
      item.slug === context.params.url &&
      item.studyFormat === 'online' &&
      item.category.type === 'mba'
  )

  const program = programsFiltered[0]

  return {
    props: {
      program,
      programs: data
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${backendUrl}${apiProgramsReqUrl}`)
  const programs = await res.json()

  const urls = programs.data
    .map(program => {
      if (
        program.studyFormat === 'online' &&
        program.category?.type === 'mba'
      ) {
        return { id: program._id, url: program.url && program.url }
      }
    })
    .filter(program => program !== undefined)

  const paths = urls.map(item => ({
    params: { url: item.slug.toString() }
  }))

  return {
    paths,
    fallback: false
  }
}

export default programsIndustryOnlineProgram
