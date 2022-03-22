import stls from '@/styles/components/sections/JumbotronCta.module.sass'
import 'reactjs-popup/dist/index.css'
import Image from 'next/image'
import Link from 'next/link'
import { SetString } from '@/helpers/index'
import { useAt } from '@/hooks/index'
import lang from '@/data/translation/index'
import { useState } from 'react'
import Until from '@/components/costs/Until'
import {
  Breadcrumbs,
  InfoRectangle,
  LeadLoaderThankyou
} from '@/components/general'
import { FormAlpha } from '@/components/forms'
import { Wrapper } from '@/components/layout'

const JumbotronCta = ({ programTitle = null, programId = null }) => {
  const at = useAt()

  const [open, setOpen] = useState(false)
  const [openLoader, setOpenLoader] = useState(false)

  return (
    <section className={stls.container}>
      <LeadLoaderThankyou
        open={open}
        setOpen={setOpen}
        openLoader={openLoader}
        setOpenLoader={setOpenLoader}
        programId={programId}
        programTitle={programTitle}
      />
      <div className={stls.image}>
        <Image
          src='/assets/images/jumbotron_1.jpg'
          alt={'Аудитория MBA'}
          layout='fill'
          priority
        />
      </div>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.content}>
          <Breadcrumbs />
          <div className={stls.flexContainer}>
            <div className={stls.descContainer}>
              <ul className={stls.desktopLinksList}>
                {/* <li className={stls.desktopLinkBorder}></li> */}
                <li className={stls.linkItem}>
                  {/* <Link href='/programs/mba'>
                    <a>MBA</a>
                  </Link> */}
                  MBA
                </li>
                <li className={stls.desktopLinkBorder}></li>
                <li className={stls.linkItem}>
                  {/* <Link href='/programs/mini'>
                    <a>MINI MBA</a>
                  </Link> */}
                  MINI MBA
                </li>
                <li className={stls.desktopLinkBorder}></li>
                <li className={stls.linkItem}>{SetString(lang.courses)}</li>
              </ul>

              <ul className={stls.mobileLinksList}>
                <li className={stls.linkItem}>
                  <Link href='/programs' locale='ru'>
                    <a>{SetString(lang.programsMbaMobileLink)}</a>
                  </Link>
                </li>
              </ul>
              <h1 className={stls.title}>
                {SetString(lang.headerTitlePreHighlight)}{' '}
                <span className={stls.red}>
                  {SetString(lang.headerTitleHighlight)}
                </span>{' '}
                {SetString(lang.headerTitlePostHighlight)}
              </h1>
              <div className={stls.descTopPart}>
                <span className={stls.red}>
                  {SetString(lang.headerDescTopHightlight)}
                </span>{' '}
                {SetString(lang.headerDescTop)} <Until preposition={true} />!
              </div>
              <div className={stls.descForm}>
                <p className={stls.descBottomPart}>
                  {SetString(lang.headerDescription)}
                </p>
                <FormAlpha
                  programTitle={programTitle}
                  setOpenLoader={setOpenLoader}
                  setOpen={setOpen}
                  alpha
                  policyPrivacy={false}
                />
              </div>
            </div>
            <ul className={stls.prosList}>
              <li className={stls.prosItem}>
                <div className={stls.prosStatsNumber}>100+</div>
                <p>{SetString(lang.benefitOneDisc)}</p>
              </li>
              <li className={stls.prosSeparator}></li>
              <li className={stls.prosItem}>
                <div className={stls.prosStatsNumber}>2021+</div>
                <p>{SetString(lang.benefitTwoDisc)}</p>
              </li>
              <li className={stls.prosSeparator}></li>

              <li className={stls.prosItem}>
                <div className={stls.prosStatsNumber}>150+</div>
                <p>{SetString(lang.benefitThreeDisc)}</p>
              </li>
              <li className={stls.prosSeparator}></li>

              <li className={stls.prosItem}>
                <div className={stls.prosStatsNumber}>
                  {at.index ? '9000+' : '2000+'}
                </div>
                <p>
                  {at.index
                    ? SetString(lang.benefitFourDiscAlt)
                    : SetString(lang.benefitFourDisc)}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
      <InfoRectangle />
    </section>
  )
}

export default JumbotronCta
