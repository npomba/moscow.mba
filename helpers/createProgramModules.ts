import { v4 as uuidv4 } from 'uuid'
import { TypeProgram } from '@/types/index'

type createProgramModulesType = {
  program: TypeProgram
  type: 'specializedSubjects' | 'baseSubjects'
}

const createProgramModules = ({ program, type }: createProgramModulesType) => {
  const output = []
  if (program[type]) {
    const programModulesTitles = program[type].filter(subject => subject.title)

    if (programModulesTitles.length > 0) {
      program[type].forEach(
        subject =>
          subject.title &&
          output.push({
            id: subject.id,
            title: subject.title,
            subjects: []
          })
      )

      let i = -1

      program[type].forEach(subject => {
        subject.title && i++
        subject.string && output[i].subjects.push(subject.string)
      })
    } else {
      const l = Math.ceil(program[type].length / 5)
      for (let i = 0; i < l; i++) {
        output.push({
          id: uuidv4(),
          title: null,
          subjects: program[type].slice(i * 5, i * 5 + 5)
        })
      }
    }
  }

  return output
}

export default createProgramModules
