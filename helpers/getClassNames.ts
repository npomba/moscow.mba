type getClassNamesType = {
  classNames: string[]
}

type OutputType = {
  [key: string]: boolean
}

const getClassNames = ({ classNames }: getClassNamesType) => {
  const output: OutputType = {}

  classNames.forEach(className => {
    className && (output[className] = true)
  })

  return output
}

export default getClassNames
