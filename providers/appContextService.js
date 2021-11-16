import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { ThemeProvider } from '@mui/material/styles'
import { CacheProvider } from '@emotion/react'

export const AppContextProvider = ({ children, theme, emotionCache }) => (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </CacheProvider>
  </LocalizationProvider>
)
