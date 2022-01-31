import GlobalStyle from '../styles/globalStyle'
import type { AppProps } from 'next/app'
import {Helmet} from 'react-helmet'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
      </Helmet>
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
