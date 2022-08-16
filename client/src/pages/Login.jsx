import { useState } from 'react'
import { Box, Typography, Button } from '@mui/material'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function loginUser(event) {
    event.preventDefault()
    
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
  })
  
  const data = await response.json()
  console.log(email, password, 'yo', data, data.status)

  if(data.status === 'ok') {
    alert('Login successful')
    window.location.href = '/login'
  }
  else if(data.status === 'error:') {
    alert('Incorrect username and password')
  }

}

  return (
    <Box flex={3} p={2} textAlign="center">
      <Typography variant='h3'>Login</Typography>
      <form onSubmit={loginUser}>

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <br />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <br />
        <Button type="submit" variant="contained">Log In</Button>

      </form>
      <Button href="/register" variant="outlined">Register</Button>
      </Box>

  );
}

export default Login;