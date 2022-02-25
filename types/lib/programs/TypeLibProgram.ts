type TypeLibProgram = {
  _id: string | null
  id: string | null
  title: string | null
  slug: string | null
  studyFormat: string | null
  category: {
    type: string | null
    slug: string | null
  } | null
  study_field: {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
  } | null
}

export default TypeLibProgram
