import { TypeClassNames, TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/images'
import { useAt } from '@/helpers/index'
import src from '@/public/assets/images/branches_map-alt.png'

const ImgMBAAffiliates = ({
  classNames,
  width,
  height
}: TypeClassNames & TypeImg) => {
  const at = useAt()
  return (
    <ImgTemplate
      src={src}
      width={width}
      height={height}
      alt={at.en ? 'MBA affiliates work in Moscow, Berlin, New-York, Tashkent, and Almaty' : 'У Moscow Business Academy работают филиалы в Москве, Берлине, Нью-Йорке, Ташкенте и Алматы'}
      classNames={classNames}
    />
  )
}

export default ImgMBAAffiliates