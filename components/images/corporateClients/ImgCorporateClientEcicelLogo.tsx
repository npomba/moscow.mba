import { TypeClassNames, TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/images'
import src from '@/public/assets/images/corporateClients/ecicel-logo.png'

const ImgCorporateClientEcicelLogo = ({
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
      alt={'ECICEL лого'}
    />
  )
}

export default ImgCorporateClientEcicelLogo
