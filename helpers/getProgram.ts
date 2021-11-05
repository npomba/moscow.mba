type getProgramType = {
  programs: any[]
  slug: string
  studyFormat: string
  type: string
}

const getProgram = ({ programs, slug, studyFormat, type }: getProgramType) => {
  const program = programs.filter(
    item =>
      item.slug === slug &&
      item.studyFormat === studyFormat &&
      item.category.type === type
  )[0]

  return program
}

export default getProgram
