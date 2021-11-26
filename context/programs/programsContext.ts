import { createContext } from 'react'
import { string } from 'prop-types'

const programsContext = createContext({
  programs: [],
  courses: [],
  professions: [],
  studyFields: [],
  studyFieldsProfessions: [],
  studyFieldsCourses: [],
  curProgramsType: null,
  curProgramsStudyFieldSlug: null,
  searchTerm: null,
  filteredPrograms: [],
  currentFilter: string,
  setSearchTerm: (programs, term) => {},
  setPrograms: programs => {},
  setCurProgramsType: programType => {},
  setCurrentFilter: filter => {},
  setCurProgramsStudyFieldSlug: slug => {},
  setSearchProgram: (value: string) => {}
})

export default programsContext
