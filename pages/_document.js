import * as React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import createEmotionServer from '@emotion/server/create-instance'

import theme from '../layouts/theme'
import createEmotionCache from '../lib/createEmotionCache'

export default class AppDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/*<link rel="shortcut icon" href="/favicons/favicon.ico" />*/}
          <link rel="icon" type="image/x-icon" href="/favicons/favicon.ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
          {/*<link rel="manifest" href="/favicons/site.webmanifest" />*/}
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
          <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color={theme.palette.primary.main} />
          {/*<meta name="msapplication-config" content="/favicons/browserconfig.xml" />*/}
          <meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png" />
          <meta name="msapplication-TileColor" content={theme.palette.primary.main} />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
AppDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage
  const emotionCache = createEmotionCache()
  const { extractCriticalToChunks } = createEmotionServer(emotionCache)

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => (<App emotionCache={emotionCache} {...props} />),
    })

  const initialProps = await Document.getInitialProps(ctx)

  // This is important. It prevents emotion to render invalid HTML.
  // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html)
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ))

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), ...emotionStyleTags],
  }
}
