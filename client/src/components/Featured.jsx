import { useState, useEffect } from 'react';
import Axios from 'axios';
import { Box, Typography, Grid } from '@mui/material'
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
    <Box flex={3} p={2} sx={{background: `linear-gradient(to top, red 5%, #fff 95%)`}}>
      <Typography variant='h3' mb='50px' textAlign="center">Featured Items</Typography>

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center" alignItems="center">

        {
          list.filter((featuredList) =>
            featuredList.featured.includes("Yes")
          ).map((featuredList) => (<div key={featuredList.id}>
            <Grid item xs={2} sm={4} md={4}>
              <Item name={featuredList.name} />

            </Grid>
          </div>))
        }
      </Grid>
    </Box>
  );
}

export default Featured;