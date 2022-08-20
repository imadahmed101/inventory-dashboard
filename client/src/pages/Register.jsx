import { useState } from 'react'
import { Box, Typography, Button } from '@mui/material'

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function registerUser(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        })

        const data = await response.json();

        console.log(data);

        if(data.status === 'ok') {
            alert('Registration successful')
            window.location.href = '/login'
          }
          else if(data.status === 'error:') {
            alert('Registration unsuccessful')
          }
        
    }

    return (

        <Box flex={3} p={2} textAlign="center">
            <Typography variant='h3' marginBottom='50px'>Register</Typography>
            <Typography>Register</Typography>
            <form onSubmit={registerUser}>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Name"
                />
                <br />

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
                
                <Button type="submit" variant="contained">Register</Button>

            </form>
            <Button href="/login" variant="outlined">Sign In</Button>
        </Box>
    );
}

export default Register;