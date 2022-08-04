import { useState, useEffect } from 'react';
import Axios from 'axios';
import { Box, Stack, createTheme, ThemeProvider, Typography, Paper, Grid, Rating, Container } from '@mui/material'
import Item from './Item'

function Shop() {

  const [list, setList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:5000/read')
      .then((response) => {
        setList(response.data);
      });
  }, []);

  return (
    <Box flex={3} p={2}>
      <Typography variant='h3' marginBottom='50px'>Current Inventory</Typography>

      <Grid container>

          {list.map((val, key) => {
            return (
              <div key={key}>
                <Grid item>
                <Item name={val.name}/>

                </Grid>
              </div>
          )
        })}
</Grid>
</Box>


  );
}

export default Shop;