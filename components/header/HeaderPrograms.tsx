import stls from "@/styles/components/header/HeaderPrograms.module.sass"
import ProgramsColumn from "../general/ProgramsColumn"

const HeaderPrograms = ({ programs }) => {

    return (
        <div className={stls.container}>
            <ProgramsColumn
                data={programs}
                id={'header-podmenu-1'}
                type={'mini'}
            />
            <ProgramsColumn
                data={programs}
                id={'header-podmenu-2'}
                type={'mba'}
            />
             <ProgramsColumn
                data={programs}
                id={'header-podmenu-2'}
                type={'mba'}
            />
        </div>
    )
}

export default HeaderPrograms