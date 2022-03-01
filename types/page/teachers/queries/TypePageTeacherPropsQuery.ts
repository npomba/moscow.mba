import { TypeLibPrograms, TypeLibTeachers } from '@/types/index'

type TypePageTeachersPropsQuery = {
  readonly programs: TypeLibPrograms | null
  readonly teacher: TypeLibTeachers | null
}

export default TypePageTeachersPropsQuery
