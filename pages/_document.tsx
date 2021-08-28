import Document, { Html, Head, Main, NextScript } from 'next/document'
import HeadFonts from '@/components/general/HeadFonts'
import HeadManifest from '@/components/general/HeadManifest'

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet='UTF-8' />
          <meta name='theme-color' content='#ff3535' />
          <HeadFonts />
          <HeadManifest />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
