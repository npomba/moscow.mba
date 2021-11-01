import { TypesPrograms } from '@/types/index'
import { categories, studyFormats } from '@/config/index'

const createBlended = (programs: TypesPrograms) => {
  const output: TypesPrograms = programs

  programs.forEach(program => {
    if (
      program.category.type === categories.mini ||
      program.category.type === categories.mba
    ) {
      const blendedProgram = program
      blendedProgram.studyFormat = studyFormats.blended
      output.push(blendedProgram)
    }
  })

  return output
}

export default createBlended
