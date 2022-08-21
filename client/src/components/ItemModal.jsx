import React from 'react';
import { Box, Modal, Typography } from '@mui/material'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ItemModal = ({name, open, onClose}) => {

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
      >
        <Box sx={style}>
            <Typography variant="h4" component="h2">{name}</Typography>
          <Typography id="modal-modal-title" variant="h6" component="p" sx={{ mt: 2 }}>
            Fresh blend of Spices to enhance your dish!
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default ItemModal;