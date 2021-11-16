import { createTheme } from '@mui/material/styles'

const options = {
  palette: {
    type: 'light',
    primary: {
      light: '#ceead6',
      main: '#1e8e3e',
      dark: '#137333',
      contrastText: '#fff',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    background: {
      default: '#fff',
    },
  },
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
      },
    },
    MuiLink: {
      underlineHover: {
        '&:hover': {
          color: '#137333',
        },
      },
      underlineNone: {
        '&:hover': {
          color: '#172225',
        },
      },
    },
  },
}

const theme = createTheme(options)


export default theme
