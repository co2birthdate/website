import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined'
import Layout from '../layouts/layout'

const NotFound = () => (
  <Box
    component="section"
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    align="center"
    minHeight="20vh"
    py={3}
  >
    <Typography component="h1" variant="h3" gutterBottom>
      404
    </Typography>
    <Typography color="textSecondary" paragraph>
      This page could not be found.
    </Typography>
    <Box mb={2}>
      <Button
        color="primary"
        variant="text"
        autoFocus onClick={() => {
          history.back()
        }}
      >
        <KeyboardBackspaceOutlinedIcon /> Get back
      </Button>
    </Box>
  </Box>
)

NotFound.Layout = (props) => Layout({ ...props, title: 'Error 404' })

export default NotFound
