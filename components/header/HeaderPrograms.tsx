import stls from "@/styles/components/header/HeaderPrograms.module.sass"
import Link from "next/link"
import React from "react"
import ProgramsColumn from "../general/ProgramsColumn"

const HeaderPrograms = ({ programs, visible }) => {

    const program = () => {
        switch (visible) {
            case '#header-podmenu-2':
                return <ProgramsColumn
                    data={programs}
                    id={'header-podmenu-2'}
                    type={'mba'}
                />
            case '#header-podmenu-3':
                return <ProgramsColumn
                    data={programs}
                    id={'header-podmenu-3'}
                    type={'profession'}
                />
            default:
                return <ProgramsColumn
                    data={programs}
                    id={'header-podmenu-1'}
                    type={'mini'}
                />
        }
    }

    return (
        <div className={stls.container}>
            {program()}
        </div>
    )
}

export default HeaderPrograms