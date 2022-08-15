import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, MenuItem, Menu } from '@mui/material'
import { Menu as MenuIcon, Brightness4, ShoppingCart, Person } from '@mui/icons-material'

const Navbar = ({ mode, setMode }) => {
  const [open, setOpen] = useState(false);

  return (

    <AppBar position="sticky">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        <Typography variant="h6" component="a" href="/" sx={{ color: "white", textDecoration: "none" }}>
          Spiceez
        </Typography>

        <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center", gap: "5px" }}>
          <MenuItem component="a" href="/">Home</MenuItem>
          <MenuItem component="a" href="/dashboard">Inventory</MenuItem>
          <MenuItem component="a" href="/shop">Shop</MenuItem>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Brightness4 sx={{ display: { xs: "none", sm: "flex" } }} />
          <Button color="inherit" sx={{ display: { xs: "none", sm: "flex" } }}>Login</Button>
          <ShoppingCart />
          <MenuIcon sx={{ display: { xs: "flex", sm: "none" } }} onClick={(e)=>setOpen(true)} />
        </Box>

          <Menu
          open={open}
          onClose={(e)=>setOpen(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          >
          <MenuItem component="a" href="/">Home</MenuItem>
          <MenuItem component="a" href="/dashboard">Inventory</MenuItem>
          <MenuItem component="a" href="/shop">Shop</MenuItem>
          <Box textAlign="center">
          <Brightness4/>
          </Box>
          <MenuItem component="a" href="/" sx={{bgcolor: "lightgray", borderRadius: "25px"}}>Login</MenuItem>
          </Menu>

      </Toolbar>
    </AppBar>
  );
}
export default Navbar;