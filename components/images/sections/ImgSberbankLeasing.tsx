import { TypeClassNames, TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/images'
import { useAt } from '@/helpers/index'
import src from '@/public/assets/images/clients/client_7.jpg'

const ImgSberbankLeasing = ({
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
        alt={at.en ? 'Sberbank Leasing' : 'Сбербанк Лизинг'}
        classNames={classNames}
      />
    )
}  

export default ImgSberbankLeasing
