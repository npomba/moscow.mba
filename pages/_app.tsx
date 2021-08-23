import App from 'next/app'
import { useEffect, useState } from 'react'
import TagManager from 'react-gtm-module'
import { DefaultSeo, LogoJsonLd } from 'next-seo'
import SEO from '../seo.config'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Wrapper from '@/components/layout/Wrapper'
import Content from '@/components/layout/Content'
import '@/styles/app.sass'
import { dev, gtmId } from '@/config/index'

import NProgress from 'nprogress'
import Router from 'next/router'
import 'nprogress/nprogress.css'

import Script from 'next/script'
import MenuState from '@/context/menu/MenuState'

import OverlayState from '@/context/overlay/OverlayState'

function MyApp({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    TagManager.initialize({ gtmId, dataLayerName: 'dataLayer' })

    const utms = JSON.parse(sessionStorage.getItem('utms')) || {}
    let utmsAreEmpty = false

    for (const key in utms) {
      if (utms.hasOwnProperty(key)) {
        utmsAreEmpty = true
        break
      }
    }

    if (!utmsAreEmpty) {
      const urlUtmsArr = router.asPath.split('?')[1]

      urlUtmsArr &&
        urlUtmsArr.split('&').forEach(utm => {
          utms[utm.split('=')[0]] = utm.split('=')[1]
        })
      sessionStorage.setItem('utms', JSON.stringify(utms))
    }

    const referer = sessionStorage.getItem('referrer')
    if (!referer) {
      sessionStorage.setItem('referer', JSON.stringify(document.referrer))
    }

    NProgress.configure({
      // minimum: 0.3,
      // easing: 'ease',
      // speed: 800,
      showSpinner: false
    })

    const start = () => {
      NProgress.start()
      setLoading(true)
    }
    const end = () => {
      NProgress.done()
      setLoading(false)
    }
    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)
    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [])

  if (!dev) {
    console.log = function () {}
  }
  let programs = []
  if (pageProps) {
    programs = pageProps.programs
  }

  return (
    <>
      <DefaultSeo {...SEO} />
      <LogoJsonLd
        logo='https://moscow.mba/logo.jpg'
        url='https://moscow.mba/'
      />
      <Script src='/assets/js/vendors/jquery-3.6.0.min.js' />
      <OverlayState>
        <MenuState>
          <Wrapper>
            <Header programs={programs} />
            <Content>
              <Component {...pageProps} />
            </Content>
            <Footer />
          </Wrapper>
        </MenuState>
      </OverlayState>
    </>
  )
}

export default MyApp
