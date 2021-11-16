import CssBaseline from '@mui/material/CssBaseline'
import { darken, lighten } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'

const CssStyles = () => {
  (makeStyles(({ palette, ...theme }) => ({
    '@global': {
      html: {
        backgroundColor: '#172225',
      },

      pre: {
        whiteSpace: 'pre-wrap',
        textAlign: 'left',
        padding: theme.spacing(3),
        background: lighten(palette.primary.light, 0.7),
        border: `solid 1px ${palette.primary.main}`,
        borderRadius: '3px',
      },

      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',

        '&.row': {
          display: 'flex',
          flexDirection: 'row',

          '& > li+li': {
            paddingLeft: theme.spacing(1),
          },
        },
      },

      '.social-links': {
        display: 'flex',
        justifyContent: 'center',

        [theme.breakpoints.up('sm')]: {
          justifyContent: 'start',
        },
      },
      /* 77e87d */
      '.twitter': { color: '#55acee' }, /* 55acee */
      '.facebook': { color: '#3b5999' }, /* 3b5999 */
      '.linkedin': { color: '#0077B5' },  /* 0077B5 */

      '#__next': {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      },

      'main': {
        '& > h1': {
          textAlign: 'center',
          [theme.breakpoints.up('sm')]: {
            textAlign: 'left',
          },
        },

        '& > section': {
          paddingBottom: theme.spacing(3),
          textAlign: 'center',
          [theme.breakpoints.up('sm')]: {
            textAlign: 'left',
          },

          '& > ul > li.MuiListItem-dense': {
            paddingTop: 0,
            paddingBottom: 0,
          },

          '& > h2': {
            paddingBottom: theme.spacing(1),
          }
        },
      },

      'footer#footer': {
        marginTop: 'auto',
        paddingTop: theme.spacing(3),
        backgroundColor: '#172225',
        color: palette.background.default,

        '& section': {
          textAlign: 'center',
          [theme.breakpoints.up('sm')]: {
            textAlign: 'left',
          },

          '& a': {
            color: darken(palette.background.default, 0.1),
          },
        },

        '& .copyright': {
          borderTop: `1px solid ${palette.grey[700]}`,
          color: palette.grey[400],

          '& a': {
            color: palette.grey[500],
          },
        },
      },
    },
  })))()

  return <CssBaseline />
}

export default CssStyles
