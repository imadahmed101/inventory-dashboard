import { useState, useEffect } from 'react';
import Axios from 'axios';
import { Box, Typography, Grid } from '@mui/material'
import Item from '../components/Item'

function Shop() {

  const [list, setList] = useState([]);

  useEffect(() => {
    Axios.get('http://54.234.150.219:5000/read')
      .then((response) => {
        setList(response.data);
      });
  }, []);

  return (
    <Box flex={3} p={2}>
      <Typography variant='h3' marginBottom='50px'>Current Inventory</Typography>

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center" alignItems="center">

          {list.map((val, key) => {
            return (
              <div key={key}>
                <Grid item xs={2} sm={4} md={4}>
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