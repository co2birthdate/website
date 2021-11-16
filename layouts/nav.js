import React from 'react'
import MuiLink from '@mui/material/Link'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import GitHubIcon from '@mui/icons-material/GitHub'
// import SvgIcon from '@mui/material/SvgIcon'

// import WtfplSvg from '../assets/svg/wtfpl.svg'
import LogoSvg from '../assets/svg/co2logo.svg'
import Link from '../components/common/link'

const Nav = () => (
  <Box component="nav" pt={1} pb={3}>
    <Grid container spacing={3} justify="space-between" alignItems="center">
      <Grid item xs={3}>
        {/*<Link href="/" as={process.env.BACKEND_URL + '/'}>*/}
        <Link href="/">
          <LogoSvg height="64" width="64" />
        </Link>
      </Grid>
      <Grid item xs={3} align="right">
        <MuiLink
          href="https://github.com/co2birthdate"
          title="co2birthdate open-source"
          rel="noopener noreferrer"
          underline="none"
          color="textSecondary"
        >
          <GitHubIcon />
        </MuiLink>
        {/*<MuiLink
          href="http://www.wtfpl.net"
          title="WTFPL - Do What the Fuck You Want to Public License"
          rel="noopener noreferrer"
          underline="none"
        >
          <SvgIcon component={WtfplSvg} width="24" height="24" />
        </MuiLink>*/}
      </Grid>
    </Grid>
  </Box>
)

export default Nav
