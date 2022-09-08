import { Button, Box, Typography, Grid } from '@mui/material'

function Hero() {

  return (
    <Box sx={{ backgroundImage: `url(/one.jpg)`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", color: "black", height: "100vh", minHeight: "600px" }}>
      <Typography variant="h2" mb="20px" fontWeight="600">Fresh <span style={{ color: "red" }}>Spice</span> Mixes</Typography>
      <Typography variant="h4" mb="50px" fontWeight="200">Check Out Our Different Blends</Typography>
      <Button variant="contained" href="/shop" sx={{ backgroundColor: "red", "&:hover": {backgroundColor: "#750000"} }}>Shop Now</Button>
    </Box>
  );
}

export default Hero;

/*<Grid container columns={{xs: 4, sm: 8, md: 12}} alignItems="center" textAlign="center">
  <Grid item xs={4} sm={8} md={6} mt="50px" >

    <Typography variant="h2" mb="20px" fontWeight="600">Fresh Spice Mixes</Typography>
    <Typography variant="h4" mb="50px" fontWeight="200">Check Out Our Different Blends</Typography>
    <Button variant="contained" size="large" href="/shop">Shop Now</Button>
  </Grid>
  <Grid item xs={2} sm={4} md={6} justifyContent="center" sx={{display: { xs: 'none', md: 'flex' }}}>
    <img src='/fire.jpg' alt="landing page display of fire" height="400px" width="400px" />
  </Grid>
</Grid>*/