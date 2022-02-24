import stls from '@/styles/components/sections/JumbotronCta.module.sass'
import 'reactjs-popup/dist/index.css'
import Image from 'next/image'
import Link from 'next/link'
import { SetString, useAt } from '@/helpers/index'
import { index } from '@/data/index'
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
                <li className={stls.linkItem}>{SetString(index.courses)}</li>
              </ul>

              <ul className={stls.mobileLinksList}>
                <li className={stls.linkItem}>
                  <Link href='/programs' locale='ru'>
                    <a>{SetString(index.programsMbaMobileLink)}</a>
                  </Link>
                </li>
              </ul>
              <h1 className={stls.title}>
                {SetString(index.headerTitlePreHighlight)}{' '}
                <span className={stls.red}>
                  {SetString(index.headerTitleHighlight)}
                </span>{' '}
                {SetString(index.headerTitlePostHighlight)}
              </h1>
              <div className={stls.descTopPart}>
                <span className={stls.red}>
                  {SetString(index.headerDescTopHightlight)}
                </span>{' '}
                {SetString(index.headerDescTop)} <Until preposition={true} />!
              </div>
              <div className={stls.descForm}>
                <p className={stls.descBottomPart}>
                  {SetString(index.headerDescription)}
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
                <p>{SetString(index.benefitOneDisc)}</p>
              </li>
              <li className={stls.prosSeparator}></li>
              <li className={stls.prosItem}>
                <div className={stls.prosStatsNumber}>2021+</div>index
                <p>{SetString(index.benefitTwoDisc)}</p>
              </li>
              <li className={stls.prosSeparator}></li>

              <li className={stls.prosItem}>
                <div className={stls.prosStatsNumber}>150+</div>
                <p>{SetString(index.benefitThreeDisc)}</p>
              </li>
              <li className={stls.prosSeparator}></li>

              <li className={stls.prosItem}>
                <div className={stls.prosStatsNumber}>
                  {at.index ? '9000+' : '2000+'}
                </div>
                <p>
                  {at.index
                    ? SetString(index.benefitFourDiscAlt)
                    : SetString(index.benefitFourDisc)}
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
