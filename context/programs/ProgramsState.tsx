import { useReducer } from 'react'
import ProgramsContext from '@/context/programs/programsContext'
import programsReducer from '@/context/programs/programsReducer'
import {
  SET_PROGRAMS,
  SET_CUR_PROGRAMS_TYPE,
  SET_CUR_PROGRAMS_STUDY_FIELD_SLUG,
  SET_SEARCH_TERM,
  SEARCH_PROGRAM
} from '@/context/types'
import { loadGetInitialProps } from 'next/dist/shared/lib/utils'

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
    allFilters: []
  }

  const [state, dispatch] = useReducer(programsReducer, initialState)

  const setPrograms = (programs = []) => {
    const studyFieldArr = [...new Set(programs.filter(item => item !== undefined && item?.study_field))]
    const arrayKey = [...new Map(studyFieldArr.map(item => [item.study_field['slug'], item.study_field])).values()]
    console.log('arrayKey', programs)
    dispatch({ type: SET_PROGRAMS, payload: { programs, filters: arrayKey } })
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
        allFilters: state.allFilters,
        setSearchTerm,
        setPrograms,
        setCurProgramsType,
        setCurProgramsStudyFieldSlug,
        setSearchProgram
      }}>
      {props.children}
    </ProgramsContext.Provider>
  )
}

export default ProgramsState
