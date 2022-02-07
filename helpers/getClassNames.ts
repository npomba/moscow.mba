import { TypeClassNames } from '@/types/index'

type TypegetClassNamesProps = TypeClassNames

type TypeGetClassNamesOutput = {
  readonly [key: string]: boolean
}

const getClassNames = ({
  classNames = []
}: TypegetClassNamesProps): TypeGetClassNamesOutput =>
  classNames
    .filter(className => className)
    .reduce((acc, cur) => ({ ...acc, [cur]: true }), {})

export default getClassNames
