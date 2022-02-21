import { routesBack } from '@/config/index'
import { TypeOfType, TypePrograms } from '@/types/index'
import qs from 'qs'
import axios from 'axios'

const fetchProgramsGetStaticProps = async (
  { ofType }: TypeOfType = { ofType: null }
) => {
  const query = qs.stringify({
    _where: ofType ? { 'category.type': ofType } : undefined,
    _limit: -1
  })

  const programs = await axios.get(
    `${routesBack.root}${routesBack.programsGetStaticProps}?${query}`
  )

  return programs.data
}

export default fetchProgramsGetStaticProps
