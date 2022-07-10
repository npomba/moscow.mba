import { createContext, Dispatch } from 'react'

// TODO: figure out better types
const ContextStaticProps = createContext<{
  programs: any
  program: any
  curStudyField: any
  studyFields: any
  studyFieldsWithSlugs: any
  setPrograms: Dispatch<any>
  setProgram: Dispatch<any>
  setCurStudyField: Dispatch<any>
  setStudyFields: Dispatch<any>
  setStudyFieldsWithSlugs: Dispatch<any>
}>({
  programs: [],
  program: null,
  curStudyField: null,
  studyFields: null,
  studyFieldsWithSlugs: null,
  setPrograms: () => {},
  setProgram: () => {},
  setCurStudyField: () => {},
  setStudyFields: () => {},
  setStudyFieldsWithSlugs: () => {}
})

export default ContextStaticProps
