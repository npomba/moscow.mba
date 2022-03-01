import { TypeLibPicture } from '../..'

type TypeLibTeacher = {
  name: string | null
  description: string | null
  slug: string | null
  portrait: TypeLibPicture | null
  descriptionItems: string[] | null
}

export default TypeLibTeacher
