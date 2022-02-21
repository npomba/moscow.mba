import colors from '@/styles/themes/default/Colors.module.sass'
import { TypeColorsKeys, TypeColor } from '@/types/index'

type TypeColors = {
  [key in TypeColorsKeys]: TypeColor
}

export default colors as TypeColors
