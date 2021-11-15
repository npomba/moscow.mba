import stls from '@/styles/components/general/ProgramsQty.module.sass'
import classNames from 'classnames'
import { SetString } from '@/helpers/index'
import langMenu from '@/data/translation/menu'
import { getStringDeclensionNumber } from '@/helpers/index'

const ProgramsQty = ({
  programs,
  type = '',
  format = '',
  isInsideHeader = false
}) => {
  let ProgramsQty

  if (type && format)
    ProgramsQty =
      programs &&
      programs.filter(
        program =>
          program.category?.type === type && program.studyFormat === format
      ).length
  else ProgramsQty = programs.length

  return (
    <div
      className={classNames(stls.container, {
        [stls.headerContainer]: isInsideHeader
      })}>
      <span>{ProgramsQty} </span>
      {SetString(
        langMenu.qtPrograms,
        false,
        getStringDeclensionNumber(ProgramsQty)
      )}
    </div>
  )
}

export default ProgramsQty
