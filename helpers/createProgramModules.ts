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

      // console.log(program[type])
      let l = Math.ceil(program[type].length / 5)

      const remainder = Math.ceil(program[type].length % 5)


      const chunk = (arr, size) => arr.reduce((carry, _, index, orig) => !(index % size) ? carry.concat([orig.slice(index, index+size)]) : carry, [])

      let arr = chunk(program[type], 5)
      console.log('arr', arr)

      if (remainder) {
        let n = arr[arr.length - 2].push(...arr[arr.length - 1])
        let a = arr[arr.length - 2].concat(...arr[arr.length - 3])
        console.log(a)
      }

      console.log('res', arr)


      // for (let i = 0; i < l; i++) {
      //   output.push({
      //     id: uuidv4(),
      //     title: null,
      //     // subjects: remainder === 1 ? program[type].slice(i * 4, i * 4 + 4) : program[type].slice(i * 5, i * 5 + 5)
      //     subjects: program[type].slice(i * 5, i * 5 + 5)
      //   })
      // }

    }
  }




  return output
}

export default createProgramModules
