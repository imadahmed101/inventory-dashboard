import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Dashboard, Navbar, Sidebar, Shop } from './components/index';
import { Stack, Box, createTheme, ThemeProvider } from '@mui/material'

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar setMode={setMode} mode={mode} />
        <Router>
          <Stack direction="row">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/shop" element={<Shop />} />
            </Routes>
          </Stack>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;