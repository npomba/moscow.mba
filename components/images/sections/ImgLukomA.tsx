import { TypeClassNames, TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/images'
import { useAt } from '@/helpers/index'
import src from '@/public/assets/images/clients/client_8.jpg'

const ImgLukomA = ({
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
        alt={at.en ? 'Lukom-A' : 'Луком-А'}
        classNames={classNames}
      />
    )
}  

export default ImgLukomA
