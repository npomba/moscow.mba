import {
  TypeClassNames,
  TypeChildren,
  TypeBtnTag,
  TypeBtnType,
  TypeBtnHref,
  TypeOnClick,
  TypeBtnDisabled,
  TypeAriaLabel,
  TypeBtnBetaVariant
} from '@/types/index'
import { HTMLAttributeAnchorTarget } from 'react'

type TypeBtn = TypeClassNames &
  TypeChildren &
  TypeBtnTag &
  TypeBtnType &
  TypeBtnHref & {
    target?: HTMLAttributeAnchorTarget
  } & TypeOnClick &
  TypeBtnDisabled &
  TypeAriaLabel &
  TypeBtnBetaVariant

export default TypeBtn
