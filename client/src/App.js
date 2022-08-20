import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {  Navbar } from './components/index';
import { Cart, Home, Dashboard, Shop, Login, Register } from './pages/index';
import { Stack, Box, createTheme, ThemeProvider } from '@mui/material'

function App() {
  const [mode, setMode] = useState(localStorage.theme || "light");

  const darkTheme = createTheme({
    palette: {
      mode
    },
  });
  
  useEffect(() => {
    localStorage.setItem("theme", mode)
  },[mode]);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"} minHeight="100vh">
        <Navbar setMode={setMode} mode={mode} />
        <Router>
          <Stack direction="row">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Stack>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;