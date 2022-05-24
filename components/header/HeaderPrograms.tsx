import stls from '@/styles/components/header/HeaderPrograms.module.sass'
import React from 'react'
import { ProgramsColumn, ProgramsList } from '@/components/general'

const HeaderPrograms = ({ programs, visible }) => {
  const program = () => {
    switch (visible) {
      case '#header-podmenu-2':
        return (
          <ProgramsColumn
            data={programs}
            id={'header-podmenu-2'}
            type={'mba'}
          />
        )
      case '#header-podmenu-3':
        return (
          <ProgramsList
            data={programs}
            id={'header-podmenu-3'}
            type={'profession'}
          />
        )
      case '#header-podmenu-4':
        return (
          <ProgramsList
            data={programs}
            id={'header-podmenu-4'}
            type={'course'}
          />
        )
      default:
        return (
          <ProgramsColumn
            data={programs}
            id={'header-podmenu-1'}
            type={'mini'}
          />
        )
    }
  }
  return <div className={stls.container}>{program()}</div>
}

export default HeaderPrograms
