import { TypeCategories, TypeStudyFormat } from '@/types/index'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import routesBack from '@/config/routesBack'
import studyFormats from '@/config/studyFormats'

type TypeFetchProgram = {
  slug: string
  studyFormat: TypeStudyFormat
  type: TypeCategories
}

const fetchProgram = async ({ slug, studyFormat, type }: TypeFetchProgram) => {
  const program = await axios.get(
    `${routesBack.root}${routesBack.programsProgram}/${type}.${slug}`
  )

  const programData = program?.data

  if (studyFormat === studyFormats.blended) {
    const id = uuidv4()
    return { ...programData, studyFormat: studyFormats.blended, id, _id: id }
  }

  return programData
}

export default fetchProgram
