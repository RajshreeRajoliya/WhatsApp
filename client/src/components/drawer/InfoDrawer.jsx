import React from 'react'
import { styled, Drawer, Box, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

const drawerStyle = {
    left: 20,
    top: 17,
    height: '95%',
    width: '30%',
    boxShadow: 'none'
}

const InfoDrawer = ({ open, setOpen}) => {
    const handleClose = () => {
        setOpen(false);
    };
  return (
    <Drawer
    open={open}
    onClose={handleClose}
    PaperProps={{ sx: drawerStyle }}
    style={{ zIndex: 1500 }}
>
   
   <Box>
   <ArrowBack onClick={() => setOpen(false)} />
   <Typography>Profile</Typography>
   </Box>
   <Box>
 
   </Box>

</Drawer>
  )
}

export default InfoDrawer
