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
  searchRes: [],
  setSearchTerm: (programs, term) => {},
  setPrograms: programs => {},
  setCurProgramsType: programType => {},
  setCurProgramsStudyFieldSlug: slug => {},
  setSearchProgram: (value: string) => {}
})

export default programsContext
