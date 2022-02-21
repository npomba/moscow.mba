import { createProgramModules } from '@/helpers/index'

const createProgramModulesBase = program =>
  createProgramModules({ program, type: 'baseSubjects' })

export default createProgramModulesBase
