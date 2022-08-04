import { useNavigate, useParams } from 'react-router-dom';
import { Hero } from '.'
import { Box } from '@mui/material'

function Home() {
    let navigate = useNavigate();
    return (
        <Box flex={3} p={2}>
            <Hero />
        </Box>
    )
}
export default Home;