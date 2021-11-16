import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import MuiLink from '@mui/material/Link'

export const Copyright = ({ className }) => (
  <Box mt={3} py={3} align="center" className={className}>
    <Typography component="span" variant="body2">
      © { new Date().getFullYear() } co2birthdate,
    </Typography>
    &nbsp;
    <Typography component="span" variant="body2">
      (no trackers, no logs),
    </Typography>
    &nbsp;
    <MuiLink
      href="http://www.wtfpl.net"
      rel="noopener noreferrer"
      title="WTFPL - Do What the Fuck You Want to Public License"
    >
      WTF Public License
    </MuiLink>

  </Box>
)

export const FooterSection = () => (
  <Grid container spacing={3} justify="space-evenly">
    <Grid component="section" item xs={12} sm={6} md={3}>
      <Typography component="h2" variant="h6" gutterBottom>
        About...
      </Typography>
      <ul>
        <li>
          <MuiLink
            href="https://github.com/co2birthdate/dataops/blob/master/README.md"
            rel="noopener noreferrer"
            variant="subtitle1"
          >
            the data
          </MuiLink>
        </li>
        <li>
          <MuiLink
            href="https://en.wikipedia.org/wiki/Carbon_dioxide_in_Earth%27s_atmosphere#Anthropogenic_CO2_emissions"
            rel="noopener noreferrer"
            variant="subtitle1"
          >
            our CO<sub>2</sub> emissions
          </MuiLink>
        </li>
      </ul>
    </Grid>

    <Grid component="section" item xs={12} sm={6} md={3}>
      <Typography component="h2" variant="h6" gutterBottom>
        Created by
      </Typography>
      <ul>
        <li>
          <MuiLink
            href="https://smalldata.dev/#about"
            rel="noopener noreferrer"
            variant="subtitle1"
          >
            Philip Shemella
          </MuiLink>
        </li>
        <li>
          <MuiLink
            href="https://bowdenweb.com/"
            rel="noopener noreferrer"
            variant="subtitle1"
          >
            J. Albert Bowden II
          </MuiLink>
        </li>
      </ul>
    </Grid>

    <Grid component="section" item xs={12} sm={6} md={3}>
      <Typography component="h2" variant="h6" gutterBottom>
        Get in touch
      </Typography>
      <ul>
        <li>
          e-mail:
          &nbsp;
          <MuiLink
            href="mailto:info@co2birth.date"
            rel="noopener noreferrer"
            variant="subtitle1"
          >
            info@co2birth.date
          </MuiLink>
        </li>
      </ul>
    </Grid>

    <Grid component="section" item xs={12} sm={6} md={3}>
      <Typography component="h2" variant="h6" gutterBottom>
        Credits
      </Typography>
      <ul>
        <li>
          Web-dev:
          &nbsp;
          <MuiLink
            href="http://tunyk.com"
            rel="noopener noreferrer"
            variant="subtitle1"
          >
            Mykola Tunyk
          </MuiLink>
        </li>
        <li>
          Illustration:
          &nbsp;
          <MuiLink
            href="http://fiverr.com/myanes"
            rel="noopener noreferrer"
            variant="subtitle1"
          >
            Marco Yanes
          </MuiLink>
        </li>
        <li>
          Logo:
          &nbsp;
          <MuiLink
            href="https://thenounproject.com/chulvi"
            rel="noopener noreferrer"
            variant="subtitle1"
          >
            Alfonso López-Sanz
          </MuiLink>
        </li>
      </ul>
    </Grid>
  </Grid>
)
