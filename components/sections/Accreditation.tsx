import stls from '@/styles/components/sections/Accreditation.module.sass'
import Image from 'next/image'
import { ImgLogoEcicel, ImgLogoRabo, ImgLogoMde, ImgAccreditation } from '@/components/images'
import imgData from '@/data/images/accreditation'
import { SetString } from '@/helpers/index'
import lang from '@/data/translation/about'
import { IconPaperCorner } from '@/components/icons'
import { base64pixel } from '@/config/index'
import Wrapper from '../layout/Wrapper'

const Accreditation = () => {
  const logos = [
    { logo: <ImgLogoEcicel /> },
    { logo: <ImgLogoRabo /> },
    { logo: <ImgLogoMde /> }
  ]

  return (
    <section className={stls.container}>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.image}>
          <ImgAccreditation/>
          {/* <Image
            src={imgData.accreditationImageAlt.src}
            alt={SetString(imgData.accreditationImageAlt.alt)}
            width={648}
            height={899}
            placeholder='blur'
            blurDataURL={base64pixel}
            layout='responsive'
          /> */}

        </div>
        <div className={stls.content}>
          <h2 className={stls.title}>{SetString(lang.accreditationTitle)}</h2>
          <div className={stls.titleDesc}>
            {SetString(lang.accreditationDics)}
          </div>
          <div className={stls.logosContainer}>
            {logos.map(({ logo }, idx) => (
              <div key={`AccreditationLogos-${idx}`} className={stls.logo}>
                {logo}
              </div>
            ))}
          </div>
          <ul className={stls.list}>
            <li className={stls.listItem}>
              {SetString(lang.accreditationItemOne)}
            </li>
            <li className={stls.listItem}>
              {SetString(lang.accreditationItemTwo)}
            </li>
            <p>{SetString(lang.accreditationItemTwoPara)}</p>
            <li className={stls.listItem}>
              {SetString(lang.accreditationItemThree)}
            </li>
          </ul>
          <a
            href='https://isga.obrnadzor.gov.ru/rlic/details/2df11621-2d30-4173-9389-2fecc24a7639/'
            target='_blank'
            rel='noopener noreferrer'
            className={stls.link}>
            <div className={stls.iconContainer}>
              <IconPaperCorner />
            </div>
            <span>{SetString(lang.accreditationLicenseLink)}</span>
          </a>
        </div>
      </Wrapper>
    </section>
  )
}

export default Accreditation
