import { TypeProgram } from '@/types/index'

type TypegetProgramsReducedData = {
  programs: TypeProgram[]
  data: string[]
}

const getProgramsReducedData = ({
  programs,
  data
}: TypegetProgramsReducedData) => {
  const output = programs.map(program => {
    const output = {}
    data.forEach(key => {
      // hardcoded for only one level deep
      if (key.includes('.')) {
        if (!output[key.split('.')[0]]) {
          program[key.split('.')[0]] && (output[key.split('.')[0]] = {})
        }
        program[key.split('.')[0]] &&
          (output[key.split('.')[0]][key.split('.')[1]] =
            program[key.split('.')[0]][key.split('.')[1]])
      } else {
        program[key] && (output[key] = program[key])
      }
    })
    return output
  })
  return output
}

export default getProgramsReducedData
