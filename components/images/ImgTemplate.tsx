import stls from '@/styles/components/images/ImgTemplate.module.sass'
import Image from 'next/image'
import classnames from 'classnames'
import { getClassNames } from '@/helpers/index'

type ImgTemplateType = {
  classNames?: string[]
  width?: number
  height?: number
  src: StaticImageData | string
  alt: string
}

const ImgTemplate = ({
  classNames = [],
  width,
  height,
  src,
  alt
}: ImgTemplateType) => {
  const container = getClassNames({ classNames })

  return (
    <div className={classnames([stls.container], container)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={stls.img}
        placeholder='blur'
      />
    </div>
  )
}

export default ImgTemplate
