import { TypeStudyFormat, TypeCategories } from '@/types/index'

type TypeProgramDefault = {
  id: string
  _id: string
  title: string
  slug: string
  studyFormat: TypeStudyFormat
  category: {
    id: string
    _id: string
    labelCases: string
    slug: string
    type: TypeCategories
  }
  test: string
}

export default TypeProgramDefault
