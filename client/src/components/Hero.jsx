import { Button, Box, Typography, Grid } from '@mui/material'

function Hero() {

  return (
    <Box>
      <Grid container columns={{xs: 4, sm: 8, md: 12}} alignItems="center" textAlign="center">
        <Grid item xs={4} sm={8} md={6} >

          <Typography variant="h2" marginBottom="20px">Fresh Spice Mixes</Typography>
          <Typography variant="h4" marginBottom="50px">Check Out Our Different Blends</Typography>
          <Button variant="contained" size="large" href="/shop">Shop Now</Button>
        </Grid>
        <Grid item xs={2} sm={4} md={6} sx={{display: { xs: 'none', md: 'flex' }}}>
          <img src='/fire.jpg' height="400px" width="400px" />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Hero;