import stls from '@/styles/components/general/ProgramsQty.module.sass'
import cn from 'classnames'
import { SetString, getStringDeclensionNumber } from '@/helpers/index'
import langMenu from '@/data/translation/menu'

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
          program?.category?.type === type && program?.studyFormat === format
      ).length
  else ProgramsQty = programs.length

  return (
    <div
      className={cn(stls.container, {
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
