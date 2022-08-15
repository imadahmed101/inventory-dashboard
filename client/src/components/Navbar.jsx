import React, { useState} from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, MenuItem } from '@mui/material'
import { Menu, Brightness4, ShoppingCart, Person } from '@mui/icons-material'

const Navbar = ({mode, setMode}) => {
  return (

      <AppBar position="sticky">
        <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
          <Typography variant="h6" component="a" href="/" sx={{ color: "white", textDecoration: "none" }}>
            Spiceez
          </Typography>

<Box sx={{display: {xs: "none", sm: "flex"}, alignItems: "center", gap: "5px"}}>

          <MenuItem component="a" href="/">Home</MenuItem>
          <MenuItem component="a" href="/dashboard">Inventory</MenuItem>
          <MenuItem component="a" href="/shop">Shop</MenuItem>
</Box>

<Box sx={{display: "flex", alignItems: "center", gap: "10px"}}>

          <Brightness4 sx={{display: {xs: "none", sm: "flex"}}}/>
          <Button color="inherit" sx={{display: {xs: "none", sm: "flex"}}}>Login</Button>
          <ShoppingCart />
          <Menu sx={{display: {xs: "flex", sm: "none"}}}/>

</Box>


        </Toolbar>
      </AppBar>
  );
}
export default Navbar;