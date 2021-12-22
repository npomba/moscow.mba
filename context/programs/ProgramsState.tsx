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
import ProgramsContext from '@/context/programs/programsContext'
import programsReducer from '@/context/programs/programsReducer'
import useAt from '@/helpers/useAt'

const ProgramsState = props => {
  // const router = useRouter()
  const at = useAt()

  const initialState = {
    programs: [],
    courses: [],
    professions: [],
    studyFields: [],
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
    dispatch({ type: SET_PROGRAMS, payload: programs })
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
