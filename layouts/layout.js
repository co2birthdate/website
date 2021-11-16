import Head from 'next/head'
import Container from '@mui/material/Container'
import { Fragment } from 'react'

import Nav from './nav'
import { FooterSection, Copyright } from './footer'

// Check out the documentation for Configuring your Layout for more information:
// - https://react-md.dev/guides/configuring-your-layout
const Layout = ({ children, meta=[], title = 'CO₂ Birthdate!' }) => (
  <>
    <Head>
      <title>{title}</title>
      {meta.map(({ content, name, property }, index) => (
        <Fragment key={index}>
          {name && <meta name={name} content={content} />}
          {property && <meta property={property} content={content} />}
        </Fragment>
      ))}
    </Head>

    <Container component="header" id="header" maxWidth="lg">
      <Nav />
    </Container>

    <Container component="main" maxWidth="lg">
      {children}
    </Container>

    <Container component="footer" id="footer" maxWidth="lg">
      <FooterSection />
      <Copyright className="copyright" />
    </Container>
  </>
)

export default Layout
