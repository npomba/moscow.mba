import { TypeLibPicture } from '@/types/index'

type TypeLibTeacher = {
  name: string | null
  description: string | null
  slug: string | null
  portrait: TypeLibPicture | null
  descriptionItems:
    | {
        item: string | null
      }[]
    | null
}

export default TypeLibTeacher
