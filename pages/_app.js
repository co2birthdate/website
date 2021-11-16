import Head from 'next/head'
import Router, { useRouter } from 'next/router'
import NProgress from 'nprogress'
import React, { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { AppContextProvider } from '../providers/appContextService'
import theme from '../layouts/theme'
import CssStyles from '../assets/jss/styles'

import createEmotionCache from '../lib/createEmotionCache'

const clientSideEmotionCache = createEmotionCache();
const NoLayout = ({ children }) => children

// framer-motion
function handleExitComplete() {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 })
  }
}

// nprogress
Router.events.on('routeChangeStart', (url) => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function App({ Component, emotionCache = clientSideEmotionCache, pageProps, err }) {
  const Layout = Component.Layout || NoLayout
  const router = useRouter()

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  // Workaround for https://github.com/vercel/next.js/issues/8592
  return (
    <AppContextProvider theme={theme} emotionCache={emotionCache}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="stylesheet" type="text/css" href="/css/nprogress.css" />
      </Head>
      <CssStyles />
      <Layout>
        <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
          <Component {...pageProps} err={err} key={router.pathname} />
        </AnimatePresence>
      </Layout>
    </AppContextProvider>
  )
}
