import {
  TypeClassNames,
  TypeChildren,
  TypeBtnTagWithLink,
  TypeBtnType,
  TypeBtnHref,
  TypeGeneralOnClick,
  TypeBtnDisabled,
  TypeGeneralAriaLabel,
  TypeBtnAlphaVariant
} from '@/types/index'

type TypeBtn = TypeClassNames &
  TypeChildren &
  TypeBtnTagWithLink &
  TypeBtnType &
  TypeBtnHref &
  TypeGeneralOnClick &
  TypeBtnDisabled &
  TypeGeneralAriaLabel &
  TypeBtnAlphaVariant & {
    scroll?: boolean
  }

export default TypeBtn
