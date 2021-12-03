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
      let l = Math.ceil(program[type].length / 5)

      const remainder = Math.ceil(program[type].length % 5)

      const separation = separationArray(program[type], remainder)

      for (let i = 0; i < l - 1; i++) {
        output.push({
          id: uuidv4(),
          title: null,
          subjects: separation[i]
        })
      }

    }
  }
  return output
}

export default createProgramModules

const separationArray = (array, remainder ) => {
  const chunk = (arr, size) => arr.reduce((carry, _, index, orig) => !(index % size) ? carry.concat([orig.slice(index, index+size)]) : carry, [])
  let sepArr = chunk(array, 5)
  if (remainder) {
    let finalEl = sepArr[sepArr.length -1]
    sepArr.pop()
    sepArr.map((currentValue, index) => {
      if (index === sepArr.length - 2) {
        currentValue.push(...finalEl.filter((el, idx) => {
          if (!(idx % 2)) {
            return el
          }
        }))
      }
      if (index === sepArr.length - 1) {
        currentValue.push(...finalEl.filter((el, idx) => {
          if (idx % 2) {
            return el
          }
        }))
      }
    })
  }
  return sepArr
}
