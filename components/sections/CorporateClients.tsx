import stls from '@/styles/components/sections/CorporateClients.module.sass'
import cn from 'classnames'
import Image from 'next/image'
import { SetString } from '@/helpers/index'
import lang from '@/data/translation/index'
import imageData from '@/data/images/corporateClients'
import { base64pixel } from '@/config/index'

const CorporateClients = ({ partnershipTitle = false }) => {
  const title = partnershipTitle ? (
    <h3 className={stls.partnershipTitle}>
      {SetString(lang.corporateClientsPartnership)}
    </h3>
  ) : (
    <>
      <h2>
        {SetString(lang.corporateClientsTitleTop)} <br />
        {SetString(lang.corporateClientsTitleBottom)}
      </h2>
      <p>{SetString(lang.corporateClientsDics)}</p>
    </>
  )

  return (
    <section className={stls.container}>
      <div
        className={cn(stls.titleContainer, {
          [stls.noPaddingLeft]: partnershipTitle
        })}>
        <div className={stls.title}>{title}</div>
      </div>
      <div className={stls.slider}>
        <ul className={stls.list}>
          <li className={stls.listItem}>
            <div className={stls.image}>
              <Image
                src={imageData.hh.src}
                alt={SetString(imageData.hh.alt)}
                width={141}
                height={106}
                placeholder='blur'
                blurDataURL={base64pixel}
              />
            </div>
          </li>
          <li className={stls.listItem}>
            <div className={stls.image}>
              <Image
                src={imageData.rzd.src}
                alt={SetString(imageData.rzd.alt)}
                width={141}
                height={107}
                placeholder='blur'
                blurDataURL={base64pixel}
              />
            </div>
          </li>
          <li className={stls.listItem}>
            <div className={stls.image}>
              <Image
                src={imageData.tatenergo.src}
                alt={SetString(imageData.tatenergo.alt)}
                width={240}
                height={92}
                placeholder='blur'
                blurDataURL={base64pixel}
              />
            </div>
          </li>
          <li className={stls.listItem}>
            <div className={stls.image}>
              <Image
                src={imageData.toms.src}
                alt={SetString(imageData.toms.alt)}
                width={163}
                height={54}
                placeholder='blur'
                blurDataURL={base64pixel}
              />
            </div>
          </li>
        </ul>
        <ul className={stls.list}>
          <li className={stls.listItem}>
            <div className={stls.image}>
              <Image
                src={imageData.rosneft.src}
                alt={SetString(imageData.rosneft.alt)}
                width={142}
                height={107}
                placeholder='blur'
                blurDataURL={base64pixel}
              />
            </div>
          </li>
          <li className={stls.listItem}>
            <div className={stls.image}>
              <Image
                src={imageData.rosseti.src}
                alt={SetString(imageData.rosseti.alt)}
                width={142}
                height={107}
                placeholder='blur'
                blurDataURL={base64pixel}
              />
            </div>
          </li>
          <li className={stls.listItem}>
            <div className={stls.image}>
              <Image
                src={imageData.sberbankLeasing.src}
                alt={SetString(imageData.sberbankLeasing.alt)}
                width={168}
                height={67}
                placeholder='blur'
                blurDataURL={base64pixel}
              />
            </div>
          </li>
          <li className={stls.listItem}>
            <div className={stls.image}>
              <Image
                src={imageData.lukomA.src}
                alt={SetString(imageData.lukomA.alt)}
                width={165}
                height={43}
                placeholder='blur'
                blurDataURL={base64pixel}
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default CorporateClients
