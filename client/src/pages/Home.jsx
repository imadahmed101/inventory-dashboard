import { Hero, Featured, About, HowToUse } from '../components'
import { Box } from '@mui/material'

function Home() {
    return (
        <Box flex={3} p={2}>
            <Hero />
            <Featured />
            <About />
            <HowToUse />
        </Box>
    )
}
export default Home;