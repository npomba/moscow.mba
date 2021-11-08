import { TypePrograms } from '@/types/index'
import { categories, studyFormats } from '@/config/index'
import { v4 as uuidv4 } from 'uuid'

const createBlended = (programs: TypePrograms) => {
  const output = [...programs]
  programs
    .filter(
      program =>
        program.category?.type === categories.mini ||
        program.category?.type === categories.mba
    )
    .forEach(program => {
      const id = uuidv4()
      output.push({
        ...program,
        studyFormat: studyFormats.blended,
        id,
        _id: id
      })
    })

  return output
}

export default createBlended
