import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import DatePicker from '@mui/lab/DatePicker'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { isValid, format } from 'date-fns'
import Layout from '../layouts/layout'
import { DATE_FORMAT, DATE_MASK, DEFAULT_DATE, WEBSITE_URL } from '../lib/constants'

const HomePage = () => {
  const router = useRouter()
  const [ birthdate, setBirthdate ] = useState(new Date(DEFAULT_DATE))

  const handleOnChangeBirthdate = (date) => {
    const validDate = isValid(date) ? date : null
    setBirthdate(validDate)
  }

  const handleSubmit = (event) => {
    if (!isValid(birthdate)) {
      event.preventDefault()
      return false
    }

    const date = format(birthdate, DATE_FORMAT)
    router.push('/co2/[date]', `/co2/${date}`)
  }

  const handleSubmitByEnter = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event)
    }
  }

  return (
  <Grid container component="section" alignItems="center" spacing={3}>
    <Grid item xs={12} sm={5}>
      <motion.img
        src="/img/co2birthdatecake_min2.png"
        width="75%"
        alt="birthday cake with smokestack candles"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      />
    </Grid>

    <Grid item xs={12} sm={5}>
      <Typography component="h1" variant="h3" gutterBottom>
        What's your CO<sub>2</sub> Birthdate?
      </Typography>

      <Box my={5}>
        <Typography variant="body1">How much has CO<sub>2</sub> increased in your lifetime?</Typography>
        <Typography variant="body2">Enter a valid date (since 1900)</Typography>

        <Box mt={3}>
          <DatePicker
            renderInput={(props) => <TextField {...props} onKeyPress={handleSubmitByEnter} />}
            clearable
            disableFuture
            allowSameDateSelection
            openTo="year"
            views={[ "year", "month", "day" ]}
            mask={DATE_MASK}
            inputFormat={DATE_FORMAT}
            maxDate={new Date()}
            value={birthdate}
            onChange={handleOnChangeBirthdate}
          />
        </Box>
      </Box>

      <Button
        variant="outlined"
        color="primary"
        disabled={!birthdate}
        onClick={handleSubmit}
      >
        Get My Birthdate CO2
      </Button>
    </Grid>
  </Grid>
)
}

HomePage.Layout = (props) => Layout({
  title: 'CO₂ Birthdate!',
  meta: [
    { name: 'description', content: 'Discover how much atmospheric carbon dioxide (CO₂) emissions have increased in your lifetime.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: WEBSITE_URL },
    { property: 'og:image', content: `${WEBSITE_URL}/img/co2birthdate-logo-x512.png` },
    { property: 'og:description', content: 'Discover how much atmospheric carbon dioxide (CO₂) emissions have increased in your lifetime.' },
  ],
  ...props,
})

export default HomePage
