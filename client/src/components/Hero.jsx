import { Button, Box, Typography, Grid } from '@mui/material'

function Hero() {

  return (
    <Box mb="100px">
      <Grid container columns={{xs: 4, sm: 8, md: 12}} alignItems="center" textAlign="center">
        <Grid item xs={4} sm={8} md={6} mt="50px" >

          <Typography variant="h2" mb="20px" fontWeight="600">Fresh Spice Mixes</Typography>
          <Typography variant="h4" mb="50px" fontWeight="200">Check Out Our Different Blends</Typography>
          <Button variant="contained" size="large" href="/shop">Shop Now</Button>
        </Grid>
        <Grid item xs={2} sm={4} md={6} justifyContent="center" sx={{display: { xs: 'none', md: 'flex' }}}>
          <img src='/fire.jpg' alt="landing page display of fire" height="400px" width="400px" />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Hero;