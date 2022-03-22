import {
  SET_PROGRAMS,
  SET_CUR_PROGRAMS_TYPE,
  SET_CUR_STUDY_FIELD,
  SET_CUR_PROGRAMS_STUDY_FIELD_SLUG,
  SET_SEARCH_TERM,
  SEARCH_PROGRAM
} from '@/context/types'
import { useReducer } from 'react'
// import { useRouter } from 'next/router'
import { ProgramsContext, programsReducer } from '@/context/index'
import { useAt } from '@/hooks/index'

const ProgramsState = props => {
  // const router = useRouter()
  const at = useAt()

  const initialState = {
    programs: [],
    courses: [],
    professions: [],
    studyFields: [],
    studyFieldsWithSlugs: [],
    studyFieldsCourses: [],
    studyFieldsProfessions: [],
    curProgramsType: null,
    curStudyField: null,
    curProgramsStudyFieldSlug: null,
    searchTerm: null,
    filteredPrograms: []
  }

  const [state, dispatch] = useReducer(programsReducer, initialState)

  const setPrograms = (programs = []) => {
    const studyFieldArr =
      Array.from(
        new Set(
          programs?.filter(item => item !== undefined && item?.study_field)
        )
      ) || []
    const fields = Array.from(
      new Map(
        studyFieldArr.map(item => [item.study_field.slug, item.study_field])
      ).values()
    ).map(item => {
      return { title: item.name, slug: item.slug }
    })

    dispatch({ type: SET_PROGRAMS, payload: { programs, fields } })
  }

  const setCurProgramsType = (programType: string | null) => {
    dispatch({ type: SET_CUR_PROGRAMS_TYPE, payload: programType })
  }

  const setCurStudyField = (studyField: string) => {
    // studyField &&
    // router.push({ query: { ...router.query, filter: studyField } })
    // console.log(router)
    dispatch({
      type: SET_CUR_STUDY_FIELD,
      payload: studyField
    })
  }

  const setCurProgramsStudyFieldSlug = (slug: string | null) => {
    dispatch({
      type: SET_CUR_PROGRAMS_STUDY_FIELD_SLUG,
      payload: slug
    })
  }

  const setSearchTerm = (programs: any[], term: string | null) => {
    dispatch({
      type: SET_SEARCH_TERM,
      payload: { programs, term }
    })
  }

  const setSearchProgram = (value: string) => {
    dispatch({
      type: SEARCH_PROGRAM,
      payload: { value, at }
    })
  }

  return (
    <ProgramsContext.Provider
      value={{
        programs: state.programs,
        courses: state.courses,
        professions: state.professions,
        studyFields: state.studyFields,
        studyFieldsWithSlugs: state.studyFieldsWithSlugs,
        studyFieldsProfessions: state.studyFieldsProfessions,
        studyFieldsCourses: state.studyFieldsCourses,
        curProgramsType: state.curProgramsType,
        curStudyField: state.curStudyField,
        curProgramsStudyFieldSlug: state.curProgramsStudyFieldSlug,
        searchTerm: state.searchTerm,
        filteredPrograms: state.filteredPrograms,
        setSearchTerm,
        setPrograms,
        setCurProgramsType,
        setCurStudyField,
        setCurProgramsStudyFieldSlug,
        setSearchProgram
      }}>
      {props.children}
    </ProgramsContext.Provider>
  )
}

export default ProgramsState
