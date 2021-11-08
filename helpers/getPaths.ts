type getPathsType = {
  programs: any[]
  studyFormat: string
  type: string
}

const getPaths = ({ programs, studyFormat, type }: getPathsType) => {
  const slugs = programs
    .filter(
      program =>
        program.studyFormat === studyFormat && program.category.type === type
    )
    .map(program => ({ id: program._id, slug: program.slug }))

  const paths = slugs.map(({ slug }) => ({
    params: { slug }
  }))

  return paths
}

export default getPaths
