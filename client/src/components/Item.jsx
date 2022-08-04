import { Paper, Grid, Typography, Box, Rating } from '@mui/material'
import { Thermostat, LocalFireDepartment } from '@mui/icons-material'


const Item = ({ name }) => {
    return (
        
            <Paper elevation="3" sx={{marginBottom: "15px", marginRight: "15px", width: "250px"}}>

                <img
                    src='/fire.jpg'
                    alt="fire"
                    className='img'
                    height= "100px"
                    width= "100px"/>
                <Box paddingX={1}>
                    <Typography variant="subtitle1" component="h2">{name}</Typography>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "Center"
                        }}>
                        <LocalFireDepartment sx={{ width: 20 }} />
                        <Typography variant="body2" component="p" marginLeft={0.5}>Spicy</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" component="h3" marginLeft={0.5}>From $2.99</Typography>
                    </Box>
                </Box>
            </Paper>
        
    )
}

export default Item