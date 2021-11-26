import { useReducer } from 'react'
import ProgramsContext from '@/context/programs/programsContext'
import programsReducer from '@/context/programs/programsReducer'
import {
  SET_PROGRAMS,
  SET_CUR_PROGRAMS_TYPE,
  SET_CUR_PROGRAMS_STUDY_FIELD_SLUG,
  SET_SEARCH_TERM,
  SEARCH_PROGRAM, CURRENT_FILTER
} from '@/context/types'

const ProgramsState = props => {
  const initialState = {
    programs: [],
    courses: [],
    professions: [],
    studyFields: [],
    studyFieldsCourses: [],
    studyFieldsProfessions: [],
    curProgramsType: null,
    curProgramsStudyFieldSlug: null,
    searchTerm: null,
    filteredPrograms: [],
    currentFilter: '',
  }

  const [state, dispatch] = useReducer(programsReducer, initialState)

  const setPrograms = (programs = []) => {
    dispatch({ type: SET_PROGRAMS, payload: programs })
  }

  const setCurProgramsType = (programType: string | null) => {
    dispatch({ type: SET_CUR_PROGRAMS_TYPE, payload: programType })
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
      payload: value
    })
  }


  const setCurrentFilter = (filter: string) => {
    dispatch({
      type: CURRENT_FILTER,
      payload: filter
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
        curProgramsStudyFieldSlug: state.curProgramsStudyFieldSlug,
        searchTerm: state.searchTerm,
        filteredPrograms: state.filteredPrograms,
        currentFilter: state.currentFilter,
        setSearchTerm,
        setPrograms,
        setCurProgramsType,
        setCurProgramsStudyFieldSlug,
        setSearchProgram,
        setCurrentFilter,
      }}>
      {props.children}
    </ProgramsContext.Provider>
  )
}

export default ProgramsState
