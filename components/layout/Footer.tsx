import stls from '@/styles/components/layout/Footer.module.sass'
import classNames from 'classnames'
import Link from 'next/link'
import SetString from '@/components/hooks/SetString'
import langHeader from '@/data/translation/header'
import lang from '@/data/translation/footer'
import contactData from '@/data/contactData'
import useAt from '@/components/hooks/useAt'
import {
  IconLocation,
  IconVk,
  IconTelegramAlt,
  IconWhatsappAlt
} from '@/components/icons'

const Footer = () => {
  const contactInfo = contactData()
  const at = useAt()

  return (
    <footer className={stls.container}>
      <div className={stls.generalContainer}>
        <div className={stls.top}>
          <div className={stls.contactDetails}>
            <div className={stls.telephone}>
              <a href={contactInfo.ru.tels[0].href}>
                {contactInfo.ru.tels[0].val}
              </a>
            </div>
            <div className={stls.email}>
              <a href={contactInfo.ru.email.mailTo}>
                {contactInfo.ru.email.val}
              </a>
            </div>
          </div>
          <div className={stls.links}>
            {!at.promo && (
              <ul className={stls.linksList}>
                <li className={stls.linkItem}>
                  <Link href='/programs/mini/online' locale='ru'>
                    <a className={stls.link}>MBA Mini</a>
                  </Link>
                </li>
                {/* <li>
                <Link href='/programs/mini/blended' locale='ru'>
                  <a>MBA Mini Blended</a>
                </Link>
              </li> */}
                <li className={stls.linkItem}>
                  <Link href='/programs/professional/online' locale='ru'>
                    <a className={stls.link}>MBA Professional</a>
                  </Link>
                </li>
                {/* <li>
                <Link href='/programs/professional/blended' locale='ru'>
                  <a>MBA Professional Blended</a>
                </Link>
              </li> */}
                <li className={stls.linkItem}>
                  <Link href='/programs/industry/online' locale='ru'>
                    <a className={stls.link}>MBA Industry</a>
                  </Link>
                </li>
                {/* <li>
                <Link href='/programs/industry/blended' locale='ru'>
                  <a>MBA Industry Blended</a>
                </Link>
              </li> */}
                <li className={stls.linkItem}>
                  <Link href='/programs/executive' locale='ru'>
                    <a className={stls.link}>Executive MBA</a>
                  </Link>
                </li>
                <li className={stls.linkItem}>
                  <Link href='#' locale='ru'>
                    <a
                      className={classNames({
                        [stls.link]: true,
                        [stls.inactiveLink]: true
                      })}>
                      Профессии
                    </a>
                  </Link>
                </li>
                <li className={stls.linkItem}>
                  <Link href='/about'>
                    <a className={stls.link}>
                      {SetString(langHeader.linkAbout)}
                    </a>
                  </Link>
                </li>
                <li className={stls.linkItem}>
                  <Link href='/teachers' locale='ru'>
                    <a className={stls.link}>
                      {SetString(langHeader.linkTeachers)}
                    </a>
                  </Link>
                </li>
                <li className={stls.linkItem}>
                  <Link href='/webinars' locale='ru'>
                    <a className={stls.link}>
                      {SetString(langHeader.linkWebinars)}
                    </a>
                  </Link>
                </li>
                <li className={stls.linkItem}>
                  <Link href='/contact'>
                    <a className={stls.link}>
                      {SetString(langHeader.linkContacts)}
                    </a>
                  </Link>
                </li>
                <li className={stls.linkItem}>
                  <Link href='/legal' locale='ru'>
                    <a className={stls.link}>
                      {SetString(langHeader.linkLegal)}
                    </a>
                  </Link>
                </li>
                {/* <li>
                <Link href='/legal/about' locale='ru'>
                  <a>{SetString(lang.legalAboutLink)}</a>
                </Link>
              </li> */}
                <li className={stls.linkItem}>
                  <Link href='/payment' locale='ru'>
                    <a className={stls.link}>{SetString(lang.paymentLink)}</a>
                  </Link>
                </li>
              </ul>
            )}
            <div className={stls.contacts}>
              <div className={stls.location}>
                <IconLocation />
                <span>
                  {SetString(contactInfo.ru.address.city)},{' '}
                  {SetString(contactInfo.ru.address.street)}
                </span>
              </div>
              <ul className={stls.socialsList}>
                <li className={stls.socialItem}>
                  <a className={stls.socialLink} href='#!' aria-label='MBA VK'>
                    <IconVk />
                  </a>
                </li>
                <li className={stls.socialItem}>
                  <a
                    className={stls.socialLink}
                    href='#!'
                    aria-label='MBA Telegram'>
                    <IconTelegramAlt />
                  </a>
                </li>
                <li className={stls.socialItem}>
                  <a
                    className={stls.socialLink}
                    href='https://api.whatsapp.com/send?phone=89258088389text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C!'
                    aria-label='MBA Whatsapp'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <IconWhatsappAlt />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={stls.bottom}>
          <div className={stls.copyright}>
            &copy; Moscow Business Academy, 2021
          </div>
          <a
            href='/legaldocuments/oferta.pdf'
            target='_blank'
            className={stls.legalLink}>
            {SetString(lang.offerContract)}
          </a>
          <a
            href='/legaldocuments/NDA.pdf'
            target='_blank'
            className={stls.legalLink}>
            {SetString(lang.privacyPolicy)}
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
