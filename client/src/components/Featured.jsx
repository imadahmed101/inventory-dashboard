import { useState, useEffect } from 'react';
import Axios from 'axios';
import { Box, Stack, createTheme, ThemeProvider, Typography, Paper, Grid, Rating, Container } from '@mui/material'
import Item from './Item'

function Featured() {

  const [list, setList] = useState([]);

  useEffect(() => {
    Axios.get('http://54.234.150.219:5000/read')
      .then((response) => {
        setList(response.data);
      });
  }, []);

  return (
    <Box flex={3} p={2}>
      <Typography variant='h3' marginBottom='50px'>Featured Items</Typography>

      <Grid container>

        {
          list.filter((featuredList) =>
            featuredList.featured.includes("Yes")
          ).map((featuredList) => (<div key={featuredList.id}>
            <Grid item>
              <Item name={featuredList.name} />

            </Grid>
          </div>))
        }
      </Grid>
    </Box>


  );
}


export default Featured;