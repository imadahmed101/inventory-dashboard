import { useState } from 'react'
import { Paper, Typography, Box, Button } from '@mui/material'
import { LocalFireDepartment } from '@mui/icons-material'
import ItemModal from './ItemModal'


const Item = ({ name }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        
            <Paper elevation="3" sx={{margin: "0px 25px 25px 25px", width: "266px"}}>

<Box textAlign="center">
                <Button onClick={handleOpen}>


                <img
                    src='/fire.jpg'
                    alt="fire"
                    className='img'
                    height= "250px"
                    width= "250px"/>
                    </Button>
                    </Box>
                    <ItemModal open={open} onClose={handleClose} name={name}/>
                <Box paddingX={1}>
                    <Typography variant="subtitle1" component="h2">{name}</Typography>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "Center"
                        }}>
                        <LocalFireDepartment sx={{ width: 20 }} />
                        <Typography variant="body2" component="p" ml={0.5}>Spicy</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" component="h3" ml={0.5}>From $2.99</Typography>
                    </Box>
                </Box>
            </Paper>
        
    )
}

export default Item