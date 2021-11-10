import { routesBack } from '@/config/index'
import { TypeOfType, TypePrograms } from '@/types/index'
import qs from 'qs'

const fetchPrograms = async ({ ofType }: TypeOfType = { ofType: null }) => {
  const programs: TypePrograms = []
  const limit = 200
  const resCount = await fetch(`${routesBack.root}${routesBack.programs}/count`)
  const count: number = await resCount.json()
  const reqsQtyRequired = Math.ceil(count / limit)
  for (let i = 0; i < reqsQtyRequired; i++) {
    const query = qs.stringify({
      _where: ofType ? { 'category.type': ofType } : undefined,
      _start: limit * i,
      _limit: limit
    })
    const res = await fetch(`${routesBack.root}${routesBack.programs}?${query}`)
    const data = await res.json()
    programs.push(...data)
  }
  // console.log(programs)
  // const programs = convertMdToHtml({
  //   arr: ofType ? filterProgramsByType({ programs: data, type: ofType }) : data,
  //   params: ['description']
  // })

  return programs
}

export default fetchPrograms
