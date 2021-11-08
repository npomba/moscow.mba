import { TypeCategories, TypeStudyFormat } from '@/types/index'

type getProgramType = {
  programs: any[]
  slug: string
  studyFormat: TypeStudyFormat
  type: TypeCategories
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
