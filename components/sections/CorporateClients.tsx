import stls from '@/styles/components/sections/CorporateClients.module.sass'
import Image from 'next/image'
import cn from 'classnames'
import { SetString } from '@/helpers/index'
import { base64pixel } from '@/config/index'
import { Wrapper } from '@/components/layout'
import { index, corporateClients } from '@/data/index'

const CorporateClients = ({ partnershipTitle = false }) => {
  const title = partnershipTitle ? (
    <h3 className={stls.partnershipTitle}>
      {SetString(index.corporateClientsPartnership)}
    </h3>
  ) : (
    <>
      <h2>
        {SetString(index.corporateClientsTitleTop)} <br />
        {SetString(index.corporateClientsTitleBottom)}
      </h2>
      <p>{SetString(index.corporateClientsDics)}</p>
    </>
  )

  return (
    <section className={stls.container}>
      <Wrapper classNames={[stls.wrapper]}>
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
                  src={corporateClients.hh.src}
                  alt={SetString(corporateClients.hh.alt)}
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
                  src={corporateClients.rzd.src}
                  alt={SetString(corporateClients.rzd.alt)}
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
                  src={corporateClients.tatenergo.src}
                  alt={SetString(corporateClients.tatenergo.alt)}
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
                  src={corporateClients.toms.src}
                  alt={SetString(corporateClients.toms.alt)}
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
                  src={corporateClients.rosneft.src}
                  alt={SetString(corporateClients.rosneft.alt)}
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
                  src={corporateClients.rosseti.src}
                  alt={SetString(corporateClients.rosseti.alt)}
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
                  src={corporateClients.sberbankLeasing.src}
                  alt={SetString(corporateClients.sberbankLeasing.alt)}
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
                  src={corporateClients.lukomA.src}
                  alt={SetString(corporateClients.lukomA.alt)}
                  width={165}
                  height={43}
                  placeholder='blur'
                  blurDataURL={base64pixel}
                />
              </div>
            </li>
          </ul>
        </div>
      </Wrapper>
    </section>
  )
}

export default CorporateClients
