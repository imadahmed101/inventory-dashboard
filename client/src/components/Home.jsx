import { useNavigate, useParams } from 'react-router-dom';
import { Hero, Featured, About } from '/'
import { Box } from '@mui/material'

function Home() {
    let navigate = useNavigate();
    return (
        <Box flex={3} p={2}>
            <Hero />
            <Featured />
            <About />
        </Box>
    )
}
export default Home;