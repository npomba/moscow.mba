type getProgramType = {
  programs: any[]
  url: string
  studyFormat: string
  type: string
}

const getProgram = ({ programs, url, studyFormat, type }: getProgramType) => {
  const program = programs.filter(
    item =>
      item.slug === url &&
      item.studyFormat === studyFormat &&
      item.category.type === type
  )[0]

  return program
}

export default getProgram
