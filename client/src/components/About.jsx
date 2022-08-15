import { Box, Typography } from '@mui/material'

function About() {

  return (
    <Box flex={3} p={2}>
      <Typography variant='h3' mb='50px'>What Is Spiceez?</Typography>
      <Typography variant='h6' mb='20px'>Spiceez is a company dedicated to bringing an authentic and flavourful element into the traditional South Asian dishes.</Typography>
      <Typography variant='h6' mb='20px'>Each blend of spices is carefully curated to provide an excellent taste to the meals you make at home.</Typography>
      <Typography variant='h6' mb='20px'>Try out one of our spice mixes the next time you cook to get an appetizing and mouth watering meal.</Typography>
    </ Box>
  );
}


export default About;