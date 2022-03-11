import {
  SET_PROGRAMS,
  SET_CUR_PROGRAMS_TYPE,
  SET_CUR_STUDY_FIELD,
  SET_CUR_PROGRAMS_STUDY_FIELD_SLUG,
  SET_SEARCH_TERM,
  SEARCH_PROGRAM
} from '@/context/types'

// import { filterProgramsByType, getStudyFields } from '@/helpers/index'

const programsReducer = (state, action, at = null) => {
  switch (action.type) {
    case SET_PROGRAMS:
      const programs = action.payload.programs

      // const courses = filterProgramsByType({ programs, type: 'course' })
      const courses = []

      // const professions = filterProgramsByType({ programs, type: 'profession' })
      const professions = []

      // const studyFields = getStudyFields(programs)
      const studyFields = programs
        ?.reduce((acc, cur) => {
          if (!acc.includes(cur.study_field?.name))
            acc.push(cur.study_field?.name)
          return acc
        }, [])
        .filter(field => field)

      const studyFieldsWithSlugs = studyFields?.map(studyField => {
        return {
          label: studyField,
          slug: programs?.filter(
            program => program.study_field?.name === studyField
          )?.[0]?.study_field?.slug
        }
      })

      // console.log(studyFieldsWithSlugs)

      // const studyFieldsProfessions = getStudyFields(professions)
      const studyFieldsProfessions = []

      // const studyFieldsCourses = getStudyFields(courses)
      const studyFieldsCourses = []

      return {
        ...state,
        programs,
        courses,
        professions,
        studyFields,
        studyFieldsWithSlugs,
        studyFieldsProfessions,
        studyFieldsCourses
      }
    case SET_CUR_PROGRAMS_TYPE:
      return {
        ...state,
        curProgramsType: action.payload
      }
    case SET_CUR_STUDY_FIELD:
      return {
        ...state,
        curStudyField: action.payload
      }
    case SET_CUR_PROGRAMS_STUDY_FIELD_SLUG:
      return {
        ...state,
        curProgramsStudyFieldSlug: action.payload
      }
    case SET_SEARCH_TERM:
      const searchTerm = action.payload.term === '' ? null : action.payload.term
      const filteredPrograms = searchTerm
        ? action.payload.programs?.filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : []
      return {
        ...state,
        searchTerm,
        filteredPrograms
      }
    case SEARCH_PROGRAM:
      const { value, at } = action.payload
      const res = state.programs?.filter((item, idx) => {
        if (!value || idx >= 10) {
          return
        }
        if (
          (at.ru && item.title.toLowerCase().includes(value)) ||
          (at.en && item.slug.replace('-', ' ').toLowerCase().includes(value))
        ) {
          return item.title
        }
      })
      return {
        ...state,
        filteredPrograms: res
      }
    default:
      return state
  }
}

export default programsReducer
