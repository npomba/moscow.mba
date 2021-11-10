import { routesBack } from '@/config/index'
import { TypeOfType, TypePrograms } from '@/types/index'
import qs from 'qs'
import axios from 'axios'

const fetchPrograms = async ({ ofType }: TypeOfType = { ofType: null }) => {
  const limit = 100
  const resCount = await axios.get(
    `${routesBack.root}${routesBack.programs}/count`
  )
  const count: number = resCount.data
  const reqsQtyRequired = Math.ceil(count / limit)

  const reqs = Array.from({ length: reqsQtyRequired }, (_, idx) => {
    const query = qs.stringify({
      _where: ofType ? { 'category.type': ofType } : undefined,
      _start: limit * idx,
      _limit: limit
    })
    return `${routesBack.root}${routesBack.programs}?${query}`
  })

  const res = await axios.all(reqs.map(req => axios.get(req)))

  const output: TypePrograms = res
    .map(item => item.data)
    .reduce((a, b) => [...a, ...b], [])

  return output
}

export default fetchPrograms
