import { TypeClassNames, TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/corporateClients/anyIndustry.jpg'

const ImgCorporateClientsAnyIndustry = ({
  classNames,
  width,
  height
}: TypeClassNames & TypeImg) => {
  return (
    <ImgTemplate
      classNames={classNames}
      src={src}
      width={width}
      height={height}
      alt={'Спикер выступает для аудитории'}
    />
  )
}

export default ImgCorporateClientsAnyIndustry
