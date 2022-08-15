import React, { useState } from 'react'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography, Switch, Button, Icon, createTheme, ThemeProvider } from '@mui/material'
import { Fireplace, ShoppingCart, Mail, Notifications, Nightlight } from '@mui/icons-material'
import { borderRadius } from '@mui/system'
import { yellow, white } from '@mui/material/colors';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const StyledMenu = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems:"center",
  gap:"5px",
  [theme.breakpoints.up("sm")]:{
    display: "flex"
  }
}));


const Icons = styled(Box)(({ theme }) => ({
  display:"none",
  alignItems:"center",
  gap:"0px",
  [theme.breakpoints.up("sm")]:{
    display: "flex"
  }
}));

const UserBox = styled(Box)(({ theme }) => ({
  display:"flex",
  alignItems:"center",
  gap:"10px",
  [theme.breakpoints.up("sm")]:{
    display: "none"
  }
}));

const Navbar = ({mode, setMode}) => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" component="a" href="/" sx={{ color: "white", textDecoration: "none" }}>
          Spiceez
        </Typography>
<StyledMenu>

        <MenuItem component="a" href="/">Home</MenuItem>
        <MenuItem component="a" href="/dashboard">Inventory</MenuItem>
        <MenuItem component="a" href="/shop">Shop</MenuItem>
</StyledMenu>
        <Icons>
          <Button component="a" onClick={e=>setMode(mode === "light" ? "dark" : "light")}>
              <Nightlight sx={{color: yellow[500]}}/>
          </Button>
          <Button component="a" href="/shop">
          <Badge badgeContent={4} color="error">
            <ShoppingCart sx={{color: "white"}}/>
          </Badge>
          </Button>
          <Button component="a" onClick={(e)=>setOpen(true)}>
          <Avatar 
            sx={{witdh:"30px", height:"30px"}} 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdFTxfDW5ydBun6E9V1meB0ldUyeHLpRlr_JuyFCnU5dC3aho_bQRMU9UvXwYFyUxoNQ&usqp=CAU"
            />
          </Button>
        </Icons>
        <UserBox>
          <Avatar 
            sx={{witdh:"30px", height:"30px"}} 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdFTxfDW5ydBun6E9V1meB0ldUyeHLpRlr_JuyFCnU5dC3aho_bQRMU9UvXwYFyUxoNQ&usqp=CAU" 
          onClick={(e)=>setOpen(true)} />
          <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
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
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar