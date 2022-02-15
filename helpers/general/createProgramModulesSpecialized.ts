import { createProgramModules } from '@/helpers/index'

const createProgramModulesSpecialized = program =>
  createProgramModules({ program, type: 'specializedSubjects' })

export default createProgramModulesSpecialized
