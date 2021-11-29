import {
  SET_PROGRAMS,
  SET_CUR_PROGRAMS_TYPE,
  SET_CUR_PROGRAMS_STUDY_FIELD_SLUG,
  SET_SEARCH_TERM,
  SEARCH_PROGRAM
} from '@/context/types'
import useAt from '@/helpers/useAt'
// import { filterProgramsByType, getStudyFields } from '@/helpers/index'

const programsReducer = (state, action) => {
  const at = useAt()
  switch (action.type) {
    case SET_PROGRAMS:
      const programs = action.payload

      // const courses = filterProgramsByType({ programs, type: 'course' })
      const courses = []

      // const professions = filterProgramsByType({ programs, type: 'profession' })
      const professions = []

      // const studyFields = getStudyFields(programs)
      const studyFields = []

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
        studyFieldsProfessions,
        studyFieldsCourses
      }
    case SET_CUR_PROGRAMS_TYPE:
      return {
        ...state,
        curProgramsType: action.payload
      }
    case SET_CUR_PROGRAMS_STUDY_FIELD_SLUG:
      return {
        ...state,
        curProgramsStudyFieldSlug: action.payload
      }
    case SET_SEARCH_TERM:
      const searchTerm = action.payload.term === '' ? null : action.payload.term
      const filteredPrograms = searchTerm
        ? action.payload.programs.filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : []
      return {
        ...state,
        searchTerm,
        filteredPrograms
      }
    case SEARCH_PROGRAM:
      let value = action.payload
      let res = state.programs.filter((item, inx) => {
        if (!value || inx >= 10) {
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
