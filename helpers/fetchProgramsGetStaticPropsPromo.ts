import { routesBack } from '@/config/index'
import { TypeOfType, TypePrograms } from '@/types/index'
import qs from 'qs'
import axios from 'axios'

const fetchProgramsGetStaticPropsPromo = async (
  { ofType }: TypeOfType = { ofType: null }
) => {
  const query = qs.stringify({
    _where: ofType ? { 'category.type': ofType } : undefined,
    _limit: -1
  })

  const res = await axios.get(
    `${routesBack.root}${routesBack.programsGetStaticPropsPromo}?${query}`
  )

  return res.data.programs.filter(item => item.category?.type === 'mini')
}

export default fetchProgramsGetStaticPropsPromo
