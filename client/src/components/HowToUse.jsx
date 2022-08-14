import { Box, Stack, createTheme, ThemeProvider, Typography, Paper, Grid, Rating, Container } from '@mui/material'
import { LocalShipping, Add, LocalDining, EmojiEmotions} from '@mui/icons-material'

function HowToUse() {

  return (
    <Box flex={3} p={2}>
      <Typography variant='h3' marginBottom='50px' textAlign="center">How To Use</Typography>

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center" alignItems="center" textAlign="center">

            <Grid item xs={4} sm={4} md={4}>
                <Typography variant="h4">Step 1</Typography>
                <LocalShipping />
                <Typography variant="h5">Order</Typography>
                <Typography variant="h6">Purchase the spice mix of your choice and get fast delivery.</Typography>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <Typography variant="h4">Step 2</Typography>
                <LocalDining />
                <Typography variant="h5">Add</Typography>
                <Typography variant="h6">Add the spice mix when preparing your meal for extreme flavour.</Typography>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <Typography variant="h4">Step 3</Typography>
                <EmojiEmotions />
                <Typography variant="h5">Enjoy</Typography>
                <Typography variant="h6">Enjoy the different blends and aromatic scents that are infused in your dish.</Typography>
            </Grid>
      </Grid>
    </Box>
  );
}

export default HowToUse;