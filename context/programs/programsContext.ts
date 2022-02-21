import { createContext } from 'react'

const programsContext = createContext({
  programs: [],
  courses: [],
  professions: [],
  studyFields: [],
  studyFieldsWithSlugs: [],
  studyFieldsProfessions: [],
  studyFieldsCourses: [],
  curProgramsType: null,
  curStudyField: null,
  curProgramsStudyFieldSlug: null,
  searchTerm: null,
  filteredPrograms: [],
  setSearchTerm: (programs, term) => {},
  setPrograms: programs => {},
  setCurProgramsType: programType => {},
  setCurStudyField: studyField => {},
  setCurProgramsStudyFieldSlug: slug => {},
  setSearchProgram: (value: string) => {}
})

export default programsContext
